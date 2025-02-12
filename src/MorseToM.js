import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const MorseToM = ({ isMorseAll, color }) => {
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
        {/* Left Horizontal Dash*/}
        <motion.rect
          x={0}
          y={0}
          width={832}
          height={122}
          fill={color}
          variants={{
            morse: { x: 0, y: 0, rotate: 0 },
            letter: {
              x: -300,
              y: 365,
              rotate: -90,
              transformOrigin: "bottom left",
            },
          }}
          initial="morse"
          animate={isMorse ? "morse" : "letter"}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: isMorse ? 0 : 0.5,
          }}
        />

        {/* Right Horizontal Dash */}
        <motion.rect
          x={450}
          y={0}
          width={832}
          height={122}
          fill={color}
          variants={{
            morse: { x: 450, y: 0, rotate: 0 },
            letter: {
              x: -80,
              y: 365,
              rotate: -90,
              transformOrigin: "bottom right",
            },
          }}
          initial="morse"
          animate={isMorse ? "morse" : "letter"}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: isMorse ? 0 : 0.5,
          }}
        />

        {/* Left Diagonal Stroke */}
        <motion.path
          d="M150 40L600 1000"
          stroke={color}
          strokeWidth="8"
          fill="none"
          strokeDasharray="800" 
          strokeDashoffset={isMorse ? 800 : 0}
          initial={{ strokeDashoffset: 750 }}
          animate={{ strokeDashoffset: isMorse ? 800 : 0 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: isMorse ? 0 : 1, 
          }}
        />

        {/* Right Diagonal Stroke */}
        <motion.path
          d="M444 819.5L774 1.5"
          stroke={color}
          strokeWidth="8"
          fill="none"
          strokeDasharray="850" 
          strokeDashoffset={isMorse ? 850 : 0} 
          initial={{ strokeDashoffset: 850 }}
          animate={{ strokeDashoffset: isMorse ? 850 : 0 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: isMorse ? 0 : 1.2, 
          }}
        />
      </motion.g>
    </svg>
  );
};

export default MorseToM;
