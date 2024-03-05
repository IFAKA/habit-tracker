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
      const selectedHabit = state.habitList.find((habit) => habit.id === id);
      const habitListEdit = state.habitList.map((habit) =>
        habit.id === id
          ? { ...habit, isEditing: !habit.isEditing }
          : { ...habit, isEditing: !!habit.isEditing }
      );
      persistList(habitListEdit);

      return { habitList: habitListEdit, newHabit: selectedHabit.value };
    }),

  handleCancelEdit: () =>
    set((state) => {
      const newHabitList = state.habitList.map((habit) => ({
        ...habit,
        isEditing: false,
      }));
      persistList(newHabitList);

      return { habitList: newHabitList, newHabit: "" };
    }),

  handleUpdateHabit: () =>
    set((state) => {
      const habitBeingEdited = state.habitList.find(
        (habit) => habit.isEditing === true
      );
      const newHabitList = state.habitList.map((habit) =>
        habit.id === habitBeingEdited.id
          ? { ...habit, value: state.newHabit, isEditing: false }
          : habit
      );

      persistList(newHabitList);

      return { habitList: newHabitList, newHabit: "" };
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
