import HabitList from "./components/HabitList";
import StreakCounter from "./components/StreakCounter";
import SubmitForm from "./components/SubmitForm";

const App = () => {
  return (
    <div className="p-3.5">
      <h1 className="text-xl text-center font-bold">Habit Tracker</h1>
      <StreakCounter />
      <h2>Habits to complete</h2>
      <HabitList />
      <SubmitForm />
    </div>
  );
};

export default App;
