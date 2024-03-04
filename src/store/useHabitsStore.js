// Import necessary functions
import { v4 } from "uuid";
import { create } from "zustand";

import {
  getHabitList,
  getStreakDays,
  persistList,
  persistStreakDays,
} from "../utils/localStorage";

// Create a Zustand store named "useHabitsStore"
const useHabitsStore = create((set, get) => ({
  newHabit: "",
  habitList: getHabitList(),

  handleChange: (e) => set(() => ({ newHabit: e.target.value })),

  handleSubmit: (e) => {
    e.preventDefault();

    if (get().newHabit !== "") {
      set((state) => {
        const newHabit = {
          id: v4(),
          value: state.newHabit,
          done: false,
          isEditing: false,
        };

        const newHabitList = [...state.habitList, newHabit];

        persistList(newHabitList);

        return { newHabit: "", habitList: newHabitList };
      });
    }
  },
  handleDelete: (id) =>
    set((state) => {
      const newHabitList = state.habitList.filter((habit) => habit.id !== id);

      persistList(newHabitList);

      return { habitList: newHabitList };
    }),

  handleEdit: (id) =>
    set((state) => {
      const habitListEdit = state.habitList.map((habit) =>
        habit.id === id ? { ...habit, isEditing: !habit.isEditing } : habit
      );
      persistList(habitListEdit);

      return { habitList: habitListEdit };
    }),

  handleHabitComplete: (id) =>
    set((state) => {
      const newHabitList = state.habitList.map((habit) =>
        habit.id === id ? { ...habit, done: !habit.done } : habit
      );

      persistList(newHabitList);

      return { habitList: newHabitList };
    }),

  streakDays: getStreakDays(),

  increaseStreak: () =>
    set((state) => {
      const newStreakDays = state.streakDays + 1;

      persistStreakDays(newStreakDays);

      return { streakDays: newStreakDays };
    }),

  decreaseStreak: () =>
    set((state) => {
      const newStreakDays = state.streakDays - 1;

      persistStreakDays(newStreakDays);

      return { streakDays: newStreakDays };
    }),
}));

export default useHabitsStore;
