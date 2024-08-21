/**
 * Note: Use position fixed according to your needs
 * Desktop navbar is better positioned at the bottom
 * Mobile navbar is better positioned at bottom right.
 **/

import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  motion,
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";
import { IconCaretRight, IconX } from "@tabler/icons-react";

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

const FloatingDockMobile = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={cn("fixed left-0  block lg:hidden", className)}>
      <button
        onClick={() => setOpen(!open)}
        className="h-10 w-10 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center"
      >
        {open ? (
          <IconX className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
        ) : (
          <IconCaretRight className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
        )}
      </button>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="mt-4 flex flex-col gap-4 items-center rounded-2xl bg-transparent px-3 py-4"
        >
          {items.map((item) => (
            <IconContainerMobile key={item.title} {...item} />
          ))}
        </motion.div>
      )}
    </div>
  );
};

function IconContainerMobile({
  icon,
  href,
}: {
  icon: React.ReactNode;
  href: string;
}) {
  return (
    <Link href={href}>
      <div className="aspect-square rounded-full bg-gray-200 dark:bg-neutral-800 flex items-center justify-center h-10 w-10">
        <div className="flex items-center justify-center h-4 w-4">{icon}</div>
      </div>
    </Link>
  );
}

const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  let mouseY = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseY.set(e.pageY)}
      onMouseLeave={() => mouseY.set(Infinity)}
      className={cn(
        "mx-auto hidden lg:flex w-16 gap-4 flex-col items-center rounded-2xl bg-gray-50 dark:bg-neutral-900 px-3 py-4",
        className,
      )}
    >
      {items.map((item) => (
        <IconContainer mouseY={mouseY} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseY,
  title,
  icon,
  href,
}: {
  mouseY: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
}) {
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseY, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { y: 0, height: 0 };

    return val - bounds.y - bounds.height / 2;
  });

  // Adjusting the transform values to scale up by 50% on hover
  let sizeTransform = useTransform(distance, [-150, 0, 150], [40, 60, 40]);
  let iconSizeTransform = useTransform(distance, [-150, 0, 150], [20, 30, 20]);

  let size = useSpring(sizeTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  let iconSize = useSpring(iconSizeTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <Link href={href}>
      <motion.div
        ref={ref}
        style={{ width: size, height: size }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="aspect-square rounded-full bg-gray-200 dark:bg-neutral-800 flex items-center justify-center relative"
      >
        <motion.div
          style={{ width: iconSize, height: iconSize }}
          className="flex items-center justify-center"
        >
          {icon}
        </motion.div>
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 left-[100%] flex items-center justify-start pl-2 text-xs text-neutral-700 dark:text-white"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Link>
  );
}
