import { motion } from "framer-motion";

const steps = [
  ["01", "DISCOVER", "Understand the problem."],
  ["02", "DESIGN", "Plan the right solution."],
  ["03", "BUILD", "Develop and integrate."],
  ["04", "TEST", "Validate every component."],
  ["05", "DELIVER", "Launch the final solution."],
];

export default function Workflow() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-7xl mx-auto">

        <p className="text-cyan-400 text-xs tracking-[.3em]">
          06 // OUR PROTOCOL
        </p>

        <h2 className="font-display text-4xl sm:text-5xl font-bold mt-4">
          From idea to execution.
        </h2>

        <div className="grid md:grid-cols-5 gap-4 mt-10">
          {steps.map(([number, title, text], index) => (
            <motion.div
              key={number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="relative"
            >
              <div className="glass rounded-2xl p-5 h-full">
                <span className="text-cyan-400 text-xs">
                  {number}
                </span>

                <h3 className="font-display font-bold mt-8">
                  {title}
                </h3>

                <p className="text-xs text-slate-500 mt-3 leading-6">
                  {text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}