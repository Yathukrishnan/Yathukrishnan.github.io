// src/components/HandWave.tsx
import React from 'react';
import { motion } from 'framer-motion';

const HandWave: React.FC = () => {
  return (
    <motion.div
      initial={{ rotate: 0 }}
      animate={{ rotate: [0, 15, -10, 15, -10, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
      style={{ fontSize: '6rem', display: 'inline-block' }} // Increased size
    >
      👋
    </motion.div>
  );
};

export default HandWave;
