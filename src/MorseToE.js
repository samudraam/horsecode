import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { easeInOut } from "framer-motion";

const MorseToE = ({ isMorseAll, color }) => {
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
        {/* 1st circle */}
        <motion.circle
          cx={125}
          cy={125}
          r={125}
          fill={color}
          variants={{
            morse: { cx: 125, cy: 125, r: 125 },
            letter: {
              cx: 125,
              cy: 410,
              r: 125,
            },
          }}
          initial="morse"
          animate={isMorse ? "morse" : "letter"}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
            delay: isMorse ? 0.5 : 0,
          }}
        />

        {/* Top Vertical Line */}
        <motion.path
          d="M125 414.28V4"
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

        {/* Top Horizontal Line */}
        <motion.path
          d="M125 4 H845"
          stroke={color}
          strokeWidth="8"
          fill="none"
          initial={{ scaleX: 0, transformOrigin: "0% 50%" }}
          animate={{ scaleX: isMorse ? 0 : 1 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: isMorse ? 0 : 0.8,
          }}
        />

        {/* Middle Horizontal Line */}
        <motion.path
          d="M125 414.28 H845"
          stroke={color}
          strokeWidth="8"
          fill="none"
          initial={{ scaleX: 0, transformOrigin: "0% 50%" }}
          animate={{ scaleX: isMorse ? 0 : 1 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: isMorse ? 0 : 0.8,
          }}
        />

        {/* Bottom Vertical Line */}
        <motion.path
          d="M125 414.28V832"
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

        {/* Bottom Horizontal Line */}
        <motion.path
          d="M125 832 H845"
          stroke={color}
          strokeWidth="8"
          fill="none"
          initial={{ scaleX: 0, transformOrigin: "0% 50%" }}
          animate={{ scaleX: isMorse ? 0 : 1 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: isMorse ? 0 : 0.8,
          }}
        />
      </motion.g>
    </svg>
  );
};

export default MorseToE;
