import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { profile, education, certifications } from "../data/resume";

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "6+", label: "Major Projects" },
  { value: "15+", label: "Technologies" },
  { value: "3", label: "Certifications" },
];

export default function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="01" title="About" subtitle="Me" />

        <div className="grid md:grid-cols-5 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="md:col-span-3 space-y-6"
          >
            <p className="text-slate-300 text-lg leading-relaxed">{profile.summary}</p>
            <p className="text-slate-400 leading-relaxed">
              From shipping{" "}
              <span className="text-violet-300">SaaS e-signature platforms</span> with
              client-side encryption to building{" "}
              <span className="text-cyan-300">WebRTC communication systems</span>, I love
              turning complex requirements into clean, reliable products. My background in
              quality assurance means I write code with testing and stability in mind from
              day one.
            </p>

            {/* terminal card */}
            <div className="glass glow-border rounded-xl p-5 font-mono text-sm">
              <div className="flex gap-2 mb-4">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <p className="text-slate-400">
                <span className="text-green-400">➜</span>{" "}
                <span className="text-cyan-300">~</span> cat education.txt
              </p>
              <p className="text-white mt-2">{education.degree}</p>
              <p className="text-slate-400">{education.school} · {education.period}</p>
              <p className="text-slate-400 mt-4">
                <span className="text-green-400">➜</span>{" "}
                <span className="text-cyan-300">~</span> ls certifications/
              </p>
              <p className="text-violet-300 mt-1">{certifications.join("  ·  ")}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="md:col-span-2 grid grid-cols-2 gap-4 content-start"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                whileHover={{ y: -6, scale: 1.03 }}
                className="glass glow-border rounded-xl p-6 text-center"
              >
                <p className="font-display text-4xl font-bold text-gradient">{s.value}</p>
                <p className="mt-2 text-xs text-slate-400 font-mono uppercase tracking-wider">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
