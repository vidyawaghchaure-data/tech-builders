import { motion } from "framer-motion";
import { Code2, Database, Brain, Palette, Cloud } from "lucide-react";

const members = [
  {
    name: "Team Leader",
    role: "Project & Development",
    icon: Code2,
  },
  {
    name: "Member 02",
    role: "Data & Database",
    icon: Database,
  },
  {
    name: "Member 03",
    role: "AI & Machine Learning",
    icon: Brain,
  },
  {
    name: "Member 04",
    role: "UI / UX & Frontend",
    icon: Palette,
  },
  {
    name: "Member 05",
    role: "Cloud & Backend",
    icon: Cloud,
  },
];

export default function Team() {
  return (
    <section id="team" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">

        <p className="text-cyan-400 text-xs tracking-[.3em]">
          03 // THE BUILDERS
        </p>

        <h2 className="font-display text-4xl sm:text-5xl font-bold mt-4">
          Meet the team.
        </h2>

        <p className="text-slate-500 mt-4">
          Different skills. One direction.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-10">
          {members.map((member, index) => {
            const Icon = member.icon;

            return (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="glass rounded-2xl p-6 text-center"
              >
                <div className="w-20 h-20 mx-auto rounded-full border border-cyan-400/20 bg-slate-900 flex items-center justify-center">
                  <Icon className="text-cyan-300" size={28} />
                </div>

                <h3 className="font-display font-bold mt-5">
                  {member.name}
                </h3>

                <p className="text-xs text-slate-500 mt-2">
                  {member.role}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}