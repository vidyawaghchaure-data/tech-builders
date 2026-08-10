import { motion } from "framer-motion";

const technologies = [
  "Python",
  "Java",
  "React",
  "Flask",
  "MySQL",
  "PostgreSQL",
  "Power BI",
  "Git",
  "Cloud",
  "AI / ML",
];

export default function Technologies() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-7xl mx-auto">

        <p className="text-cyan-400 text-xs tracking-[.3em]">
          05 // TECHNOLOGY STACK
        </p>

        <h2 className="font-display text-4xl sm:text-5xl font-bold mt-4">
          Our toolbox.
        </h2>

        <div className="flex flex-wrap gap-3 mt-10">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="glass rounded-xl px-5 py-4 text-sm text-slate-300 hover:text-cyan-300 hover:border-cyan-400/30 transition"
            >
              {tech}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}