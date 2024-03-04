const HABIT_LIST_KEY = "habit-list";
const STREAK_DAYS_KEY = "streak-days";

export const persistList = (value) =>
  localStorage.setItem(HABIT_LIST_KEY, JSON.stringify(value));
export const getHabitList = () =>
  JSON.parse(localStorage.getItem(HABIT_LIST_KEY)) ?? [];

export const persistStreakDays = (value) =>
  localStorage.setItem(STREAK_DAYS_KEY, JSON.stringify(value));
export const getStreakDays = () =>
  JSON.parse(localStorage.getItem(STREAK_DAYS_KEY)) ?? 0;
