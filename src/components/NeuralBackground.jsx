import { motion } from "framer-motion";

export default function NeuralBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      <div className="absolute inset-0 grid-bg" />

      <motion.div
        className="absolute w-[450px] h-[450px] rounded-full bg-cyan-500/10 blur-[120px]"
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -40, 60, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ top: "5%", right: "0" }}
      />

      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-blue-600/10 blur-[120px]"
        animate={{
          x: [0, -70, 40, 0],
          y: [0, 60, -30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ bottom: "0", left: "0" }}
      />

      {Array.from({ length: 20 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute w-1 h-1 rounded-full bg-cyan-300/40"
          style={{
            left: `${(i * 19) % 95}%`,
            top: `${(i * 31) % 90}%`,
          }}
          animate={{
            opacity: [0.1, 0.8, 0.1],
            scale: [1, 1.8, 1],
          }}
          transition={{
            duration: 2 + (i % 3),
            repeat: Infinity,
            delay: i * 0.15,
          }}
        />
      ))}
    </div>
  );
}