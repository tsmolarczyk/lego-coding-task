import React from "react";

const MinifigSummary = ({ minifig }) => {
  return (
    <div className="max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
      <div className="px-6 py-4">
        <h2 className="text-xl font-semibold text-gray-800">SUMMARY</h2>
        <div className="flex justify-center mt-4">
          <img
            className="w-32 h-32"
            src={minifig.imageUrl}
            alt={minifig.name}
          />
        </div>
        <h3 className="mt-2 text-lg text-center font-semibold text-gray-800">
          {minifig.name}
        </h3>
        <p className="mt-1 text-center text-gray-600">
          There are {minifig.parts.length} parts in this minifig:
        </p>
        <ul className="mt-4">
          {minifig.parts.map(part => (
            <li key={part.id} className="text-sm text-gray-700">
              {part.name}{" "}
              <span className="text-gray-500">({part.partNumber})</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center pb-4">
        <button className="px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue">
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default MinifigSummary;
