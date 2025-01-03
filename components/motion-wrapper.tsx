"use client";

import { motion } from "framer-motion";
import React from "react";

interface MotionWrapperProps {
  children: React.ReactNode;
  className?: string;
  [key: string]: any; // for other motion props
}

export const MotionWrapper: React.FC<MotionWrapperProps> = ({ 
  children, 
  className = "", 
  ...props 
}) => {
  return (
    <motion.div 
      className={className} 
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;