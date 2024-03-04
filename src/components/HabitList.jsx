import useHabitsStore from "../store/useHabitsStore";

const HabitList = () => {
  const { habitList, handleDelete, handleHabitComplete, handleEdit } =
    useHabitsStore();
  return (
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
            onClick={() => handleEdit(habit.id)}
            className="bg-sky-700 rounded-lg text-white p-1 hover:scale-105"
          >
            Edit
          </button>
        </li>
      ))}
    </ul>
  );
};

export default HabitList;
