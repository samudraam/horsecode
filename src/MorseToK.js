import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const MorseToK = ({ isMorseAll, color }) => {
  const [isMorse, setIsMorse] = useState(false);

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
        {/* Morse Code Dashes */}
        <motion.rect
          y={40}
          width={832}
          height={122}
          fill={color}
          variants={{
            morse: { y: 40, width: 832, height: 122 },
            letter: { x: -300, y: 330, width: 832, height: 122, rotate: -90 },
          }}
          initial="morse"
          animate={isMorse ? "morse" : "letter"}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: isMorse ? 0.5 : 0,
          }}
        />

        <motion.rect
          x={620}
          y={40}
          width={832}
          height={122}
          fill={color}
          variants={{
            morse: { x: 620, y: 40, width: 832, height: 122 },
            letter: { x: -650, y: 80, width: 580, height: 122, rotate: -50 },
          }}
          initial="morse"
          animate={isMorse ? "morse" : "letter"}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: isMorse ? 0.5 : 0.2,
          }}
        />

        {/* Morse Code Dot */}
        <motion.circle
          cx={1029}
          cy={125}
          r={125}
          fill={color}
          variants={{
            morse: { cx: 1029, cy: 125, r: 125 },
            letter: { cx: 500, cy: 720, r: 125 },
          }}
          initial="morse"
          animate={isMorse ? "morse" : "letter"}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
            delay: isMorse ? 0.5 : 0,
          }}
        />

        {/* Letter K Connecting Line */}
        <motion.path
          d="M122 450 L500 707"
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

export default MorseToK;
