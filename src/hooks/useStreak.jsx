import useHabit from "./useHabit";
import { useEffect, useState } from "react";

const useStreak = () => {
  const { allHabitsCompleted } = useHabit();

  const [streakDays, setStreakDays] = useState(0);

  useEffect(() => {
    if (allHabitsCompleted) {
      setStreakDays((count) => count + 1);
    }
  }, [allHabitsCompleted]);

  return {
    streakDays,
  };
};

export default useStreak;
