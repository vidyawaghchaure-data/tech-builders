import { motion } from "framer-motion";
import {
  Activity,
  Users,
  FolderKanban,
  Cpu,
} from "lucide-react";

const data = [
  {
    title: "SYSTEM STATUS",
    value: "ONLINE",
    icon: Activity,
  },
  {
    title: "TEAM MEMBERS",
    value: "05",
    icon: Users,
  },
  {
    title: "PROJECTS",
    value: "08+",
    icon: FolderKanban,
  },
  {
    title: "CORE SYSTEM",
    value: "ACTIVE",
    icon: Cpu,
  },
];

export default function MissionControl() {
  return (
    <section id="mission" className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">

        <p className="text-cyan-400 text-xs tracking-[.3em]">
          02 // MISSION CONTROL
        </p>

        <h2 className="font-display text-4xl sm:text-5xl font-bold mt-4">
          Command Center
        </h2>

        <p className="text-slate-500 mt-4 max-w-2xl">
          A snapshot of our current mission, team and development activity.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          {data.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass rounded-2xl p-6"
              >
                <Icon className="text-cyan-400" size={21} />

                <p className="text-[10px] tracking-[.2em] text-slate-500 mt-8">
                  {item.title}
                </p>

                <p className="font-display text-2xl font-bold mt-2">
                  {item.value}
                </p>

                <div className="flex items-center gap-2 mt-4 text-[9px] text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  OPERATIONAL
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}