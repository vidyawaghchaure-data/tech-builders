import { motion } from "framer-motion";
import { ArrowRight, Activity } from "lucide-react";
import NeuralBackground from "../components/NeuralBackground";
import BrainNetwork from "../components/BrainNetwork";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center"
    >
      <NeuralBackground />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 border border-cyan-400/20 bg-cyan-400/5 rounded-full px-4 py-2 text-[10px] tracking-widest text-cyan-300"
            >
              <Activity size={13} />
              MISSION CONTROL // ONLINE
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[.95] mt-7"
            >
              ONE TEAM.
              <br />

              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500">
                FIVE MINDS.
              </span>

              <br />
              ONE MISSION.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="max-w-xl text-slate-400 text-lg leading-8 mt-7"
            >
              We are Tech Builders — a team of engineering students
              transforming ideas into practical digital solutions through
              technology, creativity and collaboration.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <a
                href="#projects"
                className="group flex items-center gap-2 bg-cyan-300 text-slate-950 font-semibold px-6 py-3.5 rounded-xl hover:bg-cyan-200 transition"
              >
                Explore Projects
                <ArrowRight
                  size={17}
                  className="group-hover:translate-x-1 transition"
                />
              </a>

              <a
                href="#team"
                className="border border-slate-700 px-6 py-3.5 rounded-xl text-slate-300 hover:border-cyan-400/40 hover:text-cyan-300 transition"
              >
                Meet The Team
              </a>
            </motion.div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <BrainNetwork />
          </div>

        </div>
      </div>
    </section>
  );
}