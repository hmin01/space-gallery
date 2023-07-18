"use client"

// Framer motion
import { AnimatePresence as FMAnimatePresence, motion } from "framer-motion";
// Type
import { PropsWithChildren } from "react";

export function AnimatePresence({ children }: PropsWithChildren) {
  return (
    <FMAnimatePresence>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ type: "spring" }}>{children}</motion.div>
    </FMAnimatePresence>
  );
}