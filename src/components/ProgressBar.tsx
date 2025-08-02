import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface ProgressBarProps {
  completed: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ completed, total }) => {
  const percentage = (completed / total) * 100;

  return (
    <div className="progress-container">
      <div className="progress-header">
        <h3>Your Progress Today!</h3>
        <div className="progress-stats">
          <span>{completed} of {total} activities completed</span>
        </div>
      </div>
      
      <div className="progress-bar-wrapper">
        <motion.div 
          className="progress-bar"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        <div className="progress-text">{Math.round(percentage)}%</div>
      </div>

      <div className="stars-container">
        {Array.from({ length: total }, (_, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ 
              scale: index < completed ? 1 : 0.3,
              rotate: index < completed ? 0 : -180
            }}
            transition={{ 
              delay: index * 0.1,
              duration: 0.5,
              type: "spring",
              stiffness: 200
            }}
          >
            <Star 
              className={`star ${index < completed ? 'completed' : ''}`}
              fill={index < completed ? '#FFD700' : 'transparent'}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;