import useHabitsStore from "../store/useHabitsStore";

const HabitList = () => {
  const { habitList, handleDelete, handleHabitComplete, handleEdit } =
    useHabitsStore();
  return (
    <ul className="mb-5 overflow-y-auto border-2 border-gray-100 h-52 shadow-m">
      {habitList.map((habit) => (
        <li key={habit.id} className="flex justify-between hover:bg-sky-50">
          <div
            className={`${habit.done && "line-through"} cursor-pointer`}
            onClick={() => handleHabitComplete(habit.id)}
          >
            {habit.value}
          </div>
          <div>
            <button
              onClick={() => handleDelete(habit.id)}
              className="p-1 text-white bg-red-600 rounded-lg hover:bg-red-400"
            >
              delete
            </button>

            <button
              onClick={() => handleEdit(habit.id)}
              className="p-1 text-white rounded-lg bg-sky-700 hover:bg-sky-500"
            >
              Edit
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default HabitList;
