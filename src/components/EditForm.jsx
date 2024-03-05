import useHabitsStore from "../store/useHabitsStore";

const EditForm = () => {
  const {
    handleSubmit,
    newHabit,
    handleChange,
    handleCancelEdit,
    handleUpdateHabit,
  } = useHabitsStore();

  return (
    <form onSubmit={handleSubmit}>
      <label>Update your habits</label>
      <input
        type="text"
        value={newHabit}
        onChange={handleChange}
        className="w-full px-3 py-2 leading-tight text-gray-700 border shadow-md appearance-none rounded-xl focus:outline-none focus:shadow-outline"
      />
      <button
        onClick={handleUpdateHabit}
        type="submit"
        className="p-1 mt-2 text-white rounded-lg bg-sky-700 hover:scale-105"
      >
        Update
      </button>
      <button
        onClick={handleCancelEdit}
        type="submit"
        className="p-1 mt-2 text-white bg-red-700 rounded-lg hover:scale-105"
      >
        Cancel
      </button>
    </form>
  );
};

export default EditForm;
