import useHabit from "./useHabit";
import { useCallback, useEffect, useState } from "react";

const useStreak = () => {
  const { allHabitsCompleted } = useHabit();

  const [streakDays, setStreakDays] = useState(0);

  const increaseStreak = useCallback(() => {
    const newStreakDays = streakDays + 1;

    setStreakDays(newStreakDays);
  }, [streakDays]);

  const decreaseStreak = useCallback(() => {
    const decreaseStreakDays = streakDays - 1;
    setStreakDays(decreaseStreakDays);
  }, [streakDays]);

  useEffect(() => {
    if (allHabitsCompleted) {
      increaseStreak();
    } else {
      decreaseStreak();
    }
  }, [allHabitsCompleted, increaseStreak, decreaseStreak]);

  return {
    streakDays,
  };
};

export default useStreak;
