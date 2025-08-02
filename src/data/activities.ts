import { Activity } from '../types/Activity';

export const initialActivities: Activity[] = [
  {
    id: 1,
    title: "Brush Your Teeth",
    emoji: "🦷",
    timeRange: "7:00 - 7:05 AM",
    completed: false,
    description: "Clean your teeth to keep them healthy and shiny!"
  },
  {
    id: 2,
    title: "Nature Call",
    emoji: "🚽",
    timeRange: "7:05 - 7:10 AM",
    completed: false,
    description: "Use the bathroom and wash your hands!"
  },
  {
    id: 3,
    title: "Take a Bath",
    emoji: "🛁",
    timeRange: "7:10 - 7:25 AM",
    completed: false,
    description: "Get clean and fresh for the day!"
  },
  {
    id: 4,
    title: "Put on Uniform",
    emoji: "👕",
    timeRange: "7:25 - 7:35 AM",
    completed: false,
    description: "Dress up nicely for school!"
  },
  {
    id: 5,
    title: "Have Breakfast",
    emoji: "🍳",
    timeRange: "7:35 - 7:50 AM",
    completed: false,
    description: "Eat a healthy breakfast to fuel your day!"
  },
  {
    id: 6,
    title: "Go to School",
    emoji: "🎒",
    timeRange: "8:00 AM",
    completed: false,
    description: "Time to learn and have fun at school!"
  }
];