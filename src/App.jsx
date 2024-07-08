import { useEffect, useState } from "react";
import AddNewNote from "./components/AddNewNote";
import Notes from "./components/Notes";

function App() {
  const [addNote, setAddNote] = useState([]);

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
  }, [addNote]);

  const handleNewNote = (newNote) => {
    setAddNote((prevNote) => [...prevNote, newNote]);
    console.log(addNote);
  };

  return (
    <div className="container mx-auto  flex md:flex-row flex-col justify-center items-center md:items-start   mt-24">
      <AddNewNote handleNewNote={handleNewNote} addNote={addNote} />
      <Notes addNote={addNote} />
    </div>
  );
}

export default App;
