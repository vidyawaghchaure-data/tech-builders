import { motion } from "framer-motion";

const nodes = [
  { text: "AI", x: "50%", y: "15%" },
  { text: "DATA", x: "80%", y: "35%" },
  { text: "WEB", x: "73%", y: "73%" },
  { text: "CLOUD", x: "27%", y: "73%" },
  { text: "SQL", x: "20%", y: "35%" },
];

export default function BrainNetwork() {
  return (
    <div className="relative w-[330px] h-[330px] sm:w-[420px] sm:h-[420px]">

      <motion.div
        className="absolute inset-10 rounded-full border border-cyan-400/10"
        animate={{ rotate: 360 }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute inset-20 rounded-full border border-blue-400/10"
        animate={{ rotate: -360 }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
      >
        {[
          [50, 50, 50, 15],
          [50, 50, 80, 35],
          [50, 50, 73, 73],
          [50, 50, 27, 73],
          [50, 50, 20, 35],
        ].map((line, i) => (
          <line
            key={i}
            x1={line[0]}
            y1={line[1]}
            x2={line[2]}
            y2={line[3]}
            stroke="rgba(34,211,238,0.22)"
            strokeWidth="0.3"
          />
        ))}
      </svg>

      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full border border-cyan-300/30 bg-slate-900/80 flex items-center justify-center"
        animate={{
          boxShadow: [
            "0 0 20px rgba(34,211,238,.1)",
            "0 0 70px rgba(34,211,238,.3)",
            "0 0 20px rgba(34,211,238,.1)",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      >
        <div className="text-center">
          <div className="text-3xl">🧠</div>
          <p className="text-[8px] tracking-[0.3em] text-cyan-300 mt-1">
            CORE
          </p>
        </div>
      </motion.div>

      {nodes.map((node, index) => (
        <motion.div
          key={node.text}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{
            left: node.x,
            top: node.y,
          }}
          whileHover={{ scale: 1.15 }}
        >
          <div className="w-14 h-14 rounded-full border border-cyan-300/25 bg-slate-950/90 flex items-center justify-center">
            <span className="text-[9px] font-bold text-cyan-200">
              {node.text}
            </span>
          </div>

          <motion.div
            className="absolute inset-0 rounded-full border border-cyan-400/20"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: index * 0.3,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}