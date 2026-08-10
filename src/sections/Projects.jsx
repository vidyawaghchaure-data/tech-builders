import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Project Alpha",
    description:
      "A practical software solution designed to solve a real-world problem.",
    tags: ["Python", "Database"],
  },
  {
    number: "02",
    title: "Project Nexus",
    description:
      "A modern digital application combining intelligent technology and user-focused design.",
    tags: ["AI", "Web"],
  },
  {
    number: "03",
    title: "Project Core",
    description:
      "A data-driven system built for efficient processing, management and analysis.",
    tags: ["Data", "Cloud"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">

        <p className="text-cyan-400 text-xs tracking-[.3em]">
          04 // PROJECT ARCHIVE
        </p>

        <h2 className="font-display text-4xl sm:text-5xl font-bold mt-4">
          What we build.
        </h2>

        <div className="grid lg:grid-cols-3 gap-5 mt-10">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -7 }}
              className="glass rounded-2xl p-7 group"
            >
              <div className="flex justify-between">
                <span className="text-cyan-400 text-xs">
                  {project.number}
                </span>

                <ArrowUpRight
                  size={19}
                  className="text-slate-600 group-hover:text-cyan-300 transition"
                />
              </div>

              <h3 className="font-display text-2xl font-bold mt-12">
                {project.title}
              </h3>

              <p className="text-slate-500 leading-7 mt-4">
                {project.description}
              </p>

              <div className="flex gap-2 flex-wrap mt-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] border border-slate-700 rounded-full px-3 py-1 text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}