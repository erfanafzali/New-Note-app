import MyNote from "../template/MyNote";

function Notes({ addNote }) {
  return (
    <div className="w-full overflow-y-auto max-h-[700px] mt-24 md:mt-0 px-4">
      <div className=" bg-white h-[10000px] rounded-lg flex justify-start items-center flex-col">
        <h1 className="text-blue-600 rounded-lg text-xl sticky top-0 bg-blue-200 w-full text-center md:text-3xl font-bold py-6">
          My Notes
        </h1>
        {addNote.map((note) => (
          <MyNote key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
}

export default Notes;
