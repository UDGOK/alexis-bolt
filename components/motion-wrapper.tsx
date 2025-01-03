import { motion } from 'framer-motion';
import React from 'react';

export interface MotionWrapperProps {
  children: React.ReactNode;
  className?: string; // Add className to the props
  [key: string]: any; // Allow any additional props
}

export const MotionWrapper: React.FC<MotionWrapperProps> = ({ children, className, ...props }) => {
  return (
    <motion.div className={className} {...props}>
      {children}
    </motion.div>
  );
};

