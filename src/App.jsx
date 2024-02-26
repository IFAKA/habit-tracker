import useHabit from "./hooks/useHabit";
import useStreak from "./hooks/useStreak";

const App = () => {
  const { allHabitCompleted, streakDays } = useStreak();
  const {
    habitList,
    setNewHabit,
    handleDelete,
    handleHabitComplete,
    handleSubmit,
    newHabit,
  } = useHabit();

  return (
    <div className="p-10">
      <h1 className="text-xl text-center font-bold">Habit Tracker</h1>

      <span className="font-semibold">Streak of {streakDays} day/s</span>
      {allHabitCompleted && <p>!Felicidades Completaste Todos Tus Habitos!</p>}

      <div>
        <div>
          <h2>Habits to complete</h2>

          <ul className="h-52 mb-5 border-2 border-gray-100 shadow-m overflow-y-auto">
            {habitList.map((habit) => (
              <li key={habit.id}>
                <div
                  className={`${habit.done && "line-through"} cursor-pointer`}
                  onClick={() => handleHabitComplete(habit.id)}
                >
                  {habit.value}
                </div>
                <button
                  onClick={() => handleDelete(habit.id)}
                  className="bg-red-600 rounded-lg text-white p-1 hover:scale-105"
                >
                  delete
                </button>

                <button
                  onClick={() => handleEdit(e)}
                  className="bg-sky-700 rounded-lg text-white p-1 hover:scale-105"
                >
                  Edit
                </button>
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={handleSubmit}>
          <label>Add your habits</label>
          <input
            type="text"
            value={newHabit}
            onChange={(e) => setNewHabit(e.target.value)}
            className="shadow-md appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <button
            type="submit"
            className="bg-sky-700 mt-2 rounded-lg text-white p-1 hover:scale-105"
          >
            Add Habit
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
