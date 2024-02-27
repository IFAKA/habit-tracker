import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const useHabit = () => {
  const [newHabit, setNewHabit] = useState("");
  const [habitList, setHabitList] = useState([]);
  const [allHabitCompleted, setAllHabitCompleted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newHabit !== "") {
      setHabitList([
        ...habitList,
        { id: uuidv4(), value: newHabit, done: false },
      ]);
      setNewHabit("");
    }
  };

  const handleDelete = (id) => {
    const deleteTodoList = habitList.filter((habit) => habit.id !== id);

    setHabitList(deleteTodoList);
  };

  const handleHabitComplete = (id) => {
    const newHabitList = habitList.map((habit) =>
      habit.id === id ? { ...habit, done: !habit.done } : habit
    );
    setHabitList(newHabitList);

    const allCompleted = newHabitList.every((habit) => habit.done);
    setAllHabitCompleted(allCompleted);
  };

  return {
    newHabit,
    habitList,
    handleDelete,
    handleSubmit,
    handleHabitComplete,
    setNewHabit,
    allHabitCompleted,
  };
};
export default useHabit;
