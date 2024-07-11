import { FaTrash } from "react-icons/fa";

function MyNote({ note, deleteNote, checkNote }) {
  const option = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div className="w-full px-4 mt-4">
      <div className="w-full min-h-32 rounded-lg newShadow flex flex-col justify-center items-center border-4 border-blue-600">
        <div className="w-full border-b flex justify-between px-5 items-center ">
          <div
            className={`flex flex-col justify-center items-start mb-5 ${
              note.completed ? "line-through" : ""
            }`}
          >
            <h2 className="font-bold text-xl">{note.title}</h2>
            <p className="text-lg ">{note.description}</p>
          </div>
          <div className="flex justify-center items-center gap-x-2">
            <input
              type="checkbox"
              onChange={checkNote}
              value={note.id}
              name={note.id}
              id={note.id}
              checked={note.completed}
            />
            <button onClick={() => deleteNote(note.id)} className="">
              <FaTrash />
            </button>
          </div>
        </div>
        <h3 className="font-bold ">
          {new Date(note.createdAt).toLocaleDateString("en-US", option)}
        </h3>
      </div>
    </div>
  );
}

export default MyNote;

// const colorMap = {};
// const selectedColors = {};

// const generateColor = () => {
//   let randomColorString = "#";
//   const arrayOfColorFunctions = "0123456789abcdef";
//   for (let x = 0; x < 6; x++) {
//     let index = Math.floor(Math.random() * 16);
//     let value = arrayOfColorFunctions[index];

//     randomColorString += value;
//   }
//   return randomColorString;
// };

// const newColorFind = (id) => {
//   // If already generated and assigned, return
//   if (colorMap[id]) return colorMap[id];

//   // Generate new random color
//   let newColor;

//   do {
//     newColor = generateColor();
//   } while (selectedColors[newColor]);

//   // Found a new random, unassigned color
//   colorMap[id] = newColor;
//   selectedColors[newColor] = true;

//   // Return next new color
//   return newColor;
// };
