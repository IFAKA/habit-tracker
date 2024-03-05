import EditForm from "./components/EditForm";
import HabitList from "./components/HabitList";
import StreakCounter from "./components/StreakCounter";
import SubmitForm from "./components/SubmitForm";
import useHabitsStore from "./store/useHabitsStore";

const App = () => {
  const { habitList } = useHabitsStore();

  const isEditing = habitList.some((habit) => habit.isEditing);

  return (
    <div className="p-3.5">
      <h1 className="text-xl font-bold text-center">Habit Tracker</h1>
      <StreakCounter />
      <h2>Habits to complete</h2>
      <HabitList />
      {isEditing ? <EditForm /> : <SubmitForm />}
    </div>
  );
};

export default App;
