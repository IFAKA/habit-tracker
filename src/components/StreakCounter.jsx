import useHabitsStore from "../store/useHabitsStore";

const StreakCounter = () => {
  const { streakDays, allHabitCompleted } = useHabitsStore();
  return (
    <>
      <span className="font-semibold">Days of streak: {streakDays} </span>
      {allHabitCompleted && <p>!Felicidades Completaste Todos Tus Habitos!</p>}
    </>
  );
};

export default StreakCounter;
