import useChoosedMinifig from "../context/useChoosedMinifig";
import Button from "../components/Button";
import { useFormContext } from "../context/FormContext";

const MinifigSummary = ({ minifigParts }) => {
  const { choosedMinifig } = useChoosedMinifig();
  const { onSubmit, isValid } = useFormContext();
  return (
    <div className="bg-white text-black text-center flex flex-col justify-between p-6 my-6 mx-auto rounded-lg shadow-md max-w-full md:max-w-screen-md w-full min-w-[260px] h-full md:mr-4 lg:mr-8 xl:mr-12">
      <div className=" font-bold">
        <h1 className="text-2xl text-left mb-4 ">SUMMARY</h1>
        <div className="font-sans">
          <img
            src={choosedMinifig.set_img_url}
            alt={choosedMinifig.name}
            className=" h-36 mx-auto"
          />
          <p className="text-xs mt-2">{choosedMinifig.name}</p>
          <div className="flex flex-col items-start">
            <p className="text-xs my-6">{`There are ${choosedMinifig.num_parts} parts in this minifig:`}</p>
            {minifigParts?.results.map((part, index) => (
              <div key={index} className="mb-2 flex items-center">
                <img
                  src={part.part.part_img_url}
                  alt={part.part.name}
                  className="w-12 h-12 "
                />
                <div className="flex flex-col text-left ml-3 w-[200px]">
                  <p className="text-xs truncate">{part.part.name}</p>
                  <p className="text-xs text-orange-300">
                    {part.part.part_num}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="pb-6">
        <Button title={"SUMBIT"} onClick={onSubmit} disabled={!isValid} />
      </div>
    </div>
  );
};

export default MinifigSummary;
