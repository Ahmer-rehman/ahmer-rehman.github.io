import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { profile } from "../data/resume";

const channels = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: "✉",
  },
  {
    label: "LinkedIn",
    value: "View Profile",
    href: profile.linkedin,
    icon: "in",
  },
  {
    label: "GitHub",
    value: "View Repositories",
    href: profile.github,
    icon: "⌥",
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/[\s-]/g, "")}`,
    icon: "☏",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-28">
      {/* glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-violet-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <SectionHeading index="05" title="Get In" subtitle="Touch" />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-slate-400 max-w-xl mx-auto -mt-6 mb-12 text-lg"
        >
          I'm currently open to new opportunities, including relocation and visa
          sponsorship. Whether you have a project, a role, or just want to say hi, my
          inbox is always open.
        </motion.p>

        <div className="grid sm:grid-cols-2 gap-4 mb-12 text-left">
          {channels.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass glow-border rounded-xl p-5 flex items-center gap-4 group"
            >
              <span className="w-12 h-12 shrink-0 flex items-center justify-center rounded-lg bg-violet-500/15 text-violet-300 text-xl font-bold group-hover:bg-cyan-500/15 group-hover:text-cyan-300 transition-colors">
                {c.icon}
              </span>
              <div className="min-w-0">
                <p className="font-mono text-xs text-slate-500 uppercase tracking-wider">
                  {c.label}
                </p>
                <p className="text-slate-200 group-hover:text-white truncate transition-colors">
                  {c.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.a
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          href={`mailto:${profile.email}`}
          className="inline-block px-10 py-4 rounded-xl font-semibold text-white text-lg bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500 bg-[length:200%_auto] hover:bg-[position:right_center] hover:shadow-[0_0_40px_rgba(139,92,246,0.5)] transition-all duration-500 hover:-translate-y-1"
        >
          Say Hello 👋
        </motion.a>
      </div>
    </section>
  );
}
