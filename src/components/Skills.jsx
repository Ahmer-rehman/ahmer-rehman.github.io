import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { skills, marqueeSkills } from "../data/resume";

export default function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="02" title="Tech" subtitle="Arsenal" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className="glass glow-border rounded-2xl p-6 group hover:bg-violet-500/5 transition-colors"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl text-violet-400 group-hover:scale-125 group-hover:text-cyan-300 transition-all duration-300">
                  {group.icon}
                </span>
                <h3 className="font-display text-lg font-semibold text-white">
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-xs font-mono bg-violet-500/10 text-violet-200 border border-violet-500/20 hover:border-cyan-400/50 hover:text-cyan-200 hover:bg-cyan-500/10 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* infinite marquee */}
      <div className="mt-20 overflow-hidden border-y border-violet-500/10 py-5 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="flex w-max animate-marquee gap-12">
          {[...marqueeSkills, ...marqueeSkills].map((s, i) => (
            <span key={i} className="font-mono text-slate-500 text-lg whitespace-nowrap">
              <span className="text-violet-500 mr-2">✦</span>
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
