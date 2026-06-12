import { useEffect } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useMotionValue,
} from "framer-motion";

/** thin gradient progress bar pinned to the very top */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });

  return (
    <motion.div
      style={{ scaleX }}
      className="pointer-events-none fixed top-0 left-0 right-0 h-[3px] z-[60] origin-left bg-gradient-to-r from-violet-500 via-fuchsia-400 to-cyan-400 shadow-[0_0_12px_rgba(139,92,246,0.8)]"
    />
  );
}

/** soft radial glow that follows the mouse */
export function CursorGlow() {
  const x = useMotionValue(-400);
  const y = useMotionValue(-400);
  const sx = useSpring(x, { stiffness: 120, damping: 25 });
  const sy = useSpring(y, { stiffness: 120, damping: 25 });

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX - 250);
      y.set(e.clientY - 250);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div
      style={{ x: sx, y: sy }}
      className="pointer-events-none fixed top-0 left-0 z-[5] hidden md:block w-[500px] h-[500px] rounded-full"
      aria-hidden
    >
      <div className="w-full h-full rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.10)_0%,rgba(34,211,238,0.04)_40%,transparent_70%)]" />
    </motion.div>
  );
}

/** big static colored blobs that give each section depth */
export function Nebula() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden>
      <div className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-violet-700/12 blur-[160px]" />
      <div className="absolute top-[35%] -right-60 w-[650px] h-[650px] rounded-full bg-cyan-600/10 blur-[160px]" />
      <div className="absolute top-[70%] -left-52 w-[600px] h-[600px] rounded-full bg-fuchsia-600/10 blur-[160px]" />
      <div className="absolute -bottom-40 right-1/4 w-[500px] h-[500px] rounded-full bg-indigo-600/12 blur-[150px]" />
    </div>
  );
}
