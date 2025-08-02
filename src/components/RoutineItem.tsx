import React from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import { Activity } from '../types/Activity';

interface RoutineItemProps {
  activity: Activity;
  onComplete: (id: number) => void;
}

const RoutineItem: React.FC<RoutineItemProps> = ({ activity, onComplete }) => {
  const handleClick = () => {
    if (!activity.completed) {
      onComplete(activity.id);
    }
  };

  return (
    <motion.div
      className={`routine-item ${activity.completed ? 'completed' : ''}`}
      onClick={handleClick}
      whileHover={{ scale: activity.completed ? 1 : 1.05 }}
      whileTap={{ scale: activity.completed ? 1 : 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="routine-emoji">
        <motion.span
          animate={activity.completed ? { 
            scale: [1, 1.2, 1],
            rotate: [0, 10, -10, 0]
          } : {}}
          transition={{ duration: 0.6 }}
        >
          {activity.emoji}
        </motion.span>
      </div>
      
      <div className="routine-content">
        <h3>{activity.title}</h3>
        <p className="routine-time">{activity.timeRange}</p>
        <p className="routine-description">{activity.description}</p>
      </div>

      <div className="routine-status">
        {activity.completed ? (
          <motion.div
            className="completion-badge"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Check className="check-icon" />
            <span>Great Job!</span>
            <Sparkles className="sparkle-icon" />
          </motion.div>
        ) : (
          <div className="tap-hint">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              Tap when done!
            </motion.div>
          </div>
        )}
      </div>

      {activity.completed && (
        <motion.div
          className="celebration-burst"
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          ✨🎉✨
        </motion.div>
      )}
    </motion.div>
  );
};

export default RoutineItem;