import { useEffect, useState } from "react";
import Form from "../components/Form";
import useChoosedMinifig from "../context/useChoosedMinifig";
import MinifigSummary from "../components/MinifigSummary";
const API_KEY = "key 75b805e57df61a1d8d61104835211b31";

const SummaryPage = () => {
  const { choosedMinifig } = useChoosedMinifig();
  const [minifigParts, setMinifigParts] = useState();

  useEffect(() => {
    if (choosedMinifig?.set_num) {
      getParts().then(parts => {
        setMinifigParts(parts);
        console.log(parts);
      });
    }
  }, []);

  const getParts = async () => {
    const response = await fetch(
      `https://rebrickable.com/api/v3/lego/minifigs/${choosedMinifig.set_num}/parts/`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: API_KEY
        }
      }
    );
    const data = await response.json();
    return data;
  };
  console.log(minifigParts?.results);
  return (
    <div className="flex bg-lego-pattern bg-cover h-screen w-full">
      <div className="w-2/3">
        <Form />
      </div>
      <MinifigSummary minifigParts={minifigParts} />
    </div>
  );
};

export default SummaryPage;
