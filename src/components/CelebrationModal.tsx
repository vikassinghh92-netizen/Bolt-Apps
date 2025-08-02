import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Star, Sparkles } from 'lucide-react';

interface CelebrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNewDay: () => void;
}

const CelebrationModal: React.FC<CelebrationModalProps> = ({ isOpen, onClose, onNewDay }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="celebration-modal"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{ type: "spring", stiffness: 200 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="fireworks">
              {Array.from({ length: 8 }, (_, i) => (
                <motion.div
                  key={i}
                  className="firework"
                  initial={{ scale: 0, opacity: 1 }}
                  animate={{ 
                    scale: [0, 1, 0],
                    opacity: [1, 1, 0],
                    x: [0, Math.cos(i * 45 * Math.PI / 180) * 100],
                    y: [0, Math.sin(i * 45 * Math.PI / 180) * 100]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                >
                  ✨
                </motion.div>
              ))}
            </div>

            <motion.div
              className="trophy-container"
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity
              }}
            >
              <Trophy className="trophy-icon" />
            </motion.div>

            <h2>🎉 Fantastic Job! 🎉</h2>
            <p>You completed all your morning activities!</p>
            <p>You're ready for an amazing day at school!</p>

            <div className="celebration-stars">
              {Array.from({ length: 5 }, (_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    delay: i * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  <Star className="celebration-star" fill="#FFD700" />
                </motion.div>
              ))}
            </div>

            <div className="modal-buttons">
              <motion.button
                className="new-day-btn"
                onClick={onNewDay}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Sparkles className="btn-icon" />
                Start New Day
              </motion.button>
              
              <motion.button
                className="close-btn"
                onClick={onClose}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Close
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CelebrationModal;