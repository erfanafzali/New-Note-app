import MyNote from "../template/MyNote";

function Notes({ addNote, deleteNote, checkNote }) {
  const checkedNote = addNote.filter((note) => note.completed === true);
 
  if(!addNote.length) return  null

  return (
    <div className="w-full overflow-y-auto max-h-[700px] mt-24 md:mt-0 px-4">
      <header className="w-full bg-white py-3 mb-3 rounded-lg flex justify-between px-4 items-center ">
        <div className="flex justify-center items-center gap-x-2">
          <span>All</span>
          <span>{addNote.length}</span>
        </div>
        <div className="flex justify-center items-center gap-x-2">
          <span>Completed</span>
          <span>{checkedNote.length}</span>
        </div>
        <div className="flex justify-center items-center gap-x-2">
          <span>Open</span>
          <span>{addNote.length - checkedNote.length}</span>
        </div>
      </header>
      <div className=" bg-white h-[10000px] rounded-lg flex justify-start items-center flex-col">
        <h1 className="text-blue-600 rounded-lg text-xl sticky top-0 bg-blue-200 w-full text-center md:text-3xl font-bold py-6">
          My Notes
        </h1>
        {addNote.map((note) => (
          <MyNote
            key={note.id}
            note={note}
            deleteNote={deleteNote}
            checkNote={checkNote}
          />
        ))}
      </div>
    </div>
  );
}

export default Notes;
