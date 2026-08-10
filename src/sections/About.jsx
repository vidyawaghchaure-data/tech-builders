import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">

        <p className="text-cyan-400 text-xs tracking-[.3em]">
          01 // ABOUT US
        </p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl sm:text-5xl font-bold mt-4"
        >
          Built by students.
          <br />
          <span className="text-slate-500">
            Driven by possibilities.
          </span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 mt-10">

          <p className="text-slate-400 text-lg leading-8">
            Tech Builders is a collaborative technology team focused on
            building meaningful software projects. We bring together
            different technical skills and perspectives to create solutions
            that are practical, scalable and impactful.
          </p>

          <div className="glass rounded-2xl p-7">
            <p className="text-xs tracking-widest text-cyan-400">
              OUR PRINCIPLES
            </p>

            <div className="grid grid-cols-2 gap-4 mt-6">
              {[
                "Innovation",
                "Collaboration",
                "Consistency",
                "Execution",
              ].map((item) => (
                <div
                  key={item}
                  className="border border-slate-800 rounded-xl p-4 text-sm text-slate-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}