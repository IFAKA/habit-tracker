import useHabit from "./useHabit";
import { useEffect, useState } from "react";

const useStreak = () => {
  const { allHabitsCompleted } = useHabit();

  const [streakDays, setStreakDays] = useState(0);

  const incrementStreakDays = () => {
    setStreakDays(streakDays + 1);
  };

  useEffect(() => {
    if (allHabitsCompleted) {
      incrementStreakDays();
    }
  }, [allHabitsCompleted]);

  return {
    streakDays,
  };
};

export default useStreak;
