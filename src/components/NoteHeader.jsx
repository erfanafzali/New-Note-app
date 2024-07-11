function NoteHeader({ onSort, sortBy, addNote }) {
  return (
    <div className="w-full px-4">
      <div className="w-full bg-blue-300 py-3 md:py-6 flex justify-around items-center rounded-lg">
        <h1 className="font-bold text-base md:text-xl text-blue-700">
          My Note ( {addNote.length} )
        </h1>
        <div className="">
          <SortList sortBy={sortBy} onSort={onSort} />
        </div>
      </div>
    </div>
  );
}

function SortList({ sortBy, onSort }) {
  return (
    <select
      value={sortBy}
      onChange={onSort}
      className=" py-2 px-2 md:text-base text-sm md:px-5 rounded-lg bg-blue-600 font-bold text-white"
    >
      <option value="completed">Sort Based on Completed</option>
      <option value="earliest">Sort Based on Earliest</option>
      <option value="latest">Sort Based on Latest</option>
    </select>
  );
}

export default NoteHeader;
