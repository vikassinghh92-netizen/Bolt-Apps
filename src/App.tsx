import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, RefreshCw } from 'lucide-react';
import RoutineItem from './components/RoutineItem';
import ProgressBar from './components/ProgressBar';
import CelebrationModal from './components/CelebrationModal';
import { initialActivities } from './data/activities';
import { Activity } from './types/Activity';
import './App.css';

function App() {
  const [activities, setActivities] = useState<Activity[]>(initialActivities);
  const [showCelebration, setShowCelebration] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const completedCount = activities.filter(activity => activity.completed).length;
    if (completedCount === activities.length && completedCount > 0) {
      setTimeout(() => setShowCelebration(true), 500);
    }
  }, [activities]);

  const handleActivityComplete = (id: number) => {
    setActivities(prev => 
      prev.map(activity => 
        activity.id === id 
          ? { ...activity, completed: true }
          : activity
      )
    );
  };

  const handleNewDay = () => {
    setActivities(initialActivities);
    setShowCelebration(false);
  };

  const completedActivities = activities.filter(activity => activity.completed).length;

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  return (
    <div className="app">
      <header className="app-header">
        <motion.div
          className="header-content"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="title-section">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sun className="sun-icon" />
            </motion.div>
            <h1>Good Morning, Superstar! ⭐</h1>
            <p className="current-time">{formatTime(currentTime)}</p>
          </div>
          
          <motion.button
            className="reset-btn"
            onClick={handleNewDay}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <RefreshCw className="reset-icon" />
            New Day
          </motion.button>
        </motion.div>
      </header>

      <main className="app-main">
        <ProgressBar 
          completed={completedActivities} 
          total={activities.length} 
        />

        <div className="activities-section">
          <h2>Your Morning Routine 🌅</h2>
          <div className="activities-grid">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <RoutineItem
                  activity={activity}
                  onComplete={handleActivityComplete}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {completedActivities > 0 && completedActivities < activities.length && (
          <motion.div
            className="encouragement"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p>🌟 You're doing great! Keep going! 🌟</p>
          </motion.div>
        )}
      </main>

      <CelebrationModal
        isOpen={showCelebration}
        onClose={() => setShowCelebration(false)}
        onNewDay={handleNewDay}
      />
    </div>
  );
}

export default App;