import { useState } from "react";

function AddNewNote({ handleNewNote, addNote }) {
  const option = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description) return null;

    const newNote = {
      title,
      description,
      id: Date.now(),
      createdAt: new Date().toLocaleDateString("en-US", option),
      completed: false,
    };

    handleNewNote(newNote);
    setTitle("");
    setDescription("");
  };

  return (
    <div className=" w-full ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-y-4 px-4"
      >
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full md:w-3/4 py-2 px-4 rounded-lg border-none outline-none shadow"
          placeholder="Enter the title ..."
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full md:w-3/4 py-2 px-4 rounded-lg border-none outline-none shadow"
          placeholder="Enter the description ..."
        />
        {!title || !description ? (
          <button
            disabled={true}
            className="w-full md:w-3/4 cursor-not-allowed bg-rose-500 py-2 px-4 rounded-lg font-bold text-lg  transition-all duration-300 text-white"
          >
            please write something ...
          </button>
        ) : (
          <button
            type="submit"
            className="w-full md:w-3/4 bg-blue-500 py-2 px-4 rounded-lg font-bold text-lg hover:bg-blue-600 transition-all duration-300 text-white"
          >
            Submit Form
          </button>
        )}
      </form>
    </div>
  );
}

export default AddNewNote;
