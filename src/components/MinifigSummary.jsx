import React from "react";
import useChoosedMinifig from "../context/useChoosedMinifig";

const MinifigSummary = ({ minifigParts }) => {
  const { choosedMinifig } = useChoosedMinifig();

  return (
    <div className="bg-blue-900 text-white text-center p-6 rounded-lg shadow-md max-w-sm mx-auto">
      <h1 className="text-xl font-bold mb-4">SUMMARY</h1>
      <img
        src={choosedMinifig.set_img_url}
        alt={choosedMinifig.name}
        className="mx-auto"
      />
      <p className="font-semibold text-lg">{choosedMinifig.name}</p>
      <p className="text-sm mb-4">{`There are ${choosedMinifig.num_parts} parts in this minifig:`}</p>
      <div>
        {minifigParts?.results.map((part, index) => (
          <div key={index} className="mb-2">
            <img
              src={part.part.part_img_url}
              alt={part.part.name}
              className="w-20 h-20 mx-auto"
            />
            <p className="text-xs">{part.part.name}</p>
            <p className="text-xs">{part.part.part_num}</p>
          </div>
        ))}
      </div>
      <button className="mt-4 bg-green-500 text-white font-bold py-2 px-4 rounded-full hover:bg-green-700">
        SUBMIT
      </button>
    </div>
  );
};

export default MinifigSummary;
