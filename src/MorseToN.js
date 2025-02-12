import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const MorseToN = ({ isMorseAll, color }) => {
  const [isMorse, setIsMorse] = useState(isMorseAll);

  useEffect(() => {
    if (isMorseAll !== null) {
      setIsMorse(isMorseAll);
    }
  }, [isMorseAll]);

  return (
    <svg
      viewBox="0 0 3300 900"
      width="100%"
      preserveAspectRatio="xMidYMid meet"
      style={{
        maxWidth: "300px",
        height: "auto",
        cursor: "pointer",
        overflow: "visible",
      }}
      onClick={() => setIsMorse(!isMorse)}
    >
      <motion.g
        animate={isMorse ? "morse" : "letter"}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Morse Code Dot*/}
        <motion.circle
          cx={1029}
          cy={125}
          r={125}
          fill={color}
          variants={{
            morse: { cx: 1029, cy: 125, r: 125 },
            letter: { cx: 858, cy: 836, r: 125 },
          }}
          initial="morse"
          animate={isMorse ? "morse" : "letter"}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
            delay: isMorse ? 0.5 : 0,
          }}
        />

        {/* Morse Code Dash*/}
        <motion.rect
          y={40}
          width={832}
          height={122}
          fill={color}
          variants={{
            morse: { x: 0, y: 40, rotate: 0 },
            letter: { x: 0, y: 300, rotate: 45, transformOrigin: "top left" },
          }}
          initial="morse"
          animate={isMorse ? "morse" : "letter"}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: isMorse ? 0 : 0.5,
          }}
        />

        {/* Left Vertical Line */}
        <motion.path
          d="M120 100L120 900"
          stroke={color}
          strokeWidth="8"
          fill="none"
          initial={{ scaleY: 0, transformOrigin: "50% 0%" }}
          animate={{ scaleY: isMorse ? 0 : 1 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: isMorse ? 0 : 0.8,
          }}
        />
        {/* Right Diagonal Stroke (Fix: Draw Effect) */}
        <motion.path
          d="M406 423.5L829.5 834V12"
          stroke={color}
          strokeWidth="8"
          fill="none"
          strokeDasharray="1409" // Approximate path length
          strokeDashoffset={isMorse ? 1409 : 0} // Fully hidden to fully drawn
          initial={{ strokeDashoffset: 1409 }}
          animate={{ strokeDashoffset: isMorse ? 1409 : 0 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: isMorse ? 0 : 0.8, // Delayed so it appears last
          }}
        />
      </motion.g>
    </svg>
  );
};

export default MorseToN;
