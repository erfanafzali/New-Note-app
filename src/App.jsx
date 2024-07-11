import { useEffect, useState } from "react";
import AddNewNote from "./components/AddNewNote";
import Notes from "./components/Notes";
import NoteHeader from "./components/NoteHeader";

function App() {
  const [addNote, setAddNote] = useState([]);
  const [sortBy, setSortBy] = useState("latest");

  useEffect(() => {
    const handleContextmenu = (e) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextmenu);
    return function cleanup() {
      document.removeEventListener("contextmenu", handleContextmenu);
    };
  }, []);

  useEffect(() => {
    console.log(addNote);
  }, [addNote, sortBy]);

  const handleNewNote = (newNote) => {
    setAddNote((prevNote) => [...prevNote, newNote]);
    console.log(addNote);
  };

  const handleCheck = (e) => {
    const noteId = Number(e.target.value);
    setAddNote((prevNote) =>
      prevNote.map((note) =>
        note.id === noteId ? { ...note, completed: !note.completed } : note
      )
    );
  };

  const handleDeleteNote = (id) => {
    setAddNote((prevNote) => prevNote.filter((note) => note.id !== id));
  };

  // sort my notes

  let sortedNotes = addNote;
  if (sortBy === "earliest")
    sortedNotes = [...addNote].sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    );

  if (sortBy === "latest")
    sortedNotes = [...addNote].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );

  if (sortBy === "completed")
    sortedNotes = [...addNote].sort(
      (a, b) => Number(a.completed) - Number(b.completed)
    );

  return (
    <div className="container mx-auto mt-10">
      <NoteHeader
        sortBy={sortBy}
        onSort={(e) => setSortBy(e.target.value)}
        addNote={addNote}
      />
      <div className="w-full  flex md:flex-row flex-col justify-center items-center md:items-start   mt-24">
        <AddNewNote handleNewNote={handleNewNote} addNote={addNote} />
        <Notes
          addNote={sortedNotes}
          deleteNote={handleDeleteNote}
          checkNote={handleCheck}
        />
      </div>
    </div>
  );
}

export default App;
