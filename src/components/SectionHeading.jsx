import { motion } from "framer-motion";

export default function SectionHeading({ index, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="mb-14"
    >
      <p className="font-mono text-sm text-violet-400 mb-2">
        <span className="text-slate-600">//</span> {index}
      </p>
      <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
        {title} <span className="text-gradient">{subtitle}</span>
      </h2>
      <div className="mt-4 h-px w-24 bg-gradient-to-r from-violet-500 to-transparent" />
    </motion.div>
  );
}
