import { useEffect, useState } from "react";
import Form from "../components/Form";
import useChoosedMinifig from "../context/useChoosedMinifig";
import MinifigSummary from "../components/MinifigSummary";
import { FormProvider } from "../context/FormContext";

const API_KEY = "key 75b805e57df61a1d8d61104835211b31";

const SummaryPage = () => {
  const { choosedMinifig } = useChoosedMinifig();
  const [minifigParts, setMinifigParts] = useState();

  useEffect(() => {
    if (choosedMinifig?.set_num) {
      getParts().then(parts => {
        setMinifigParts(parts);
      });
    }
  }, [choosedMinifig]);

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

  return (
    <FormProvider>
      <div className="flex flex-col md:flex-row bg-lego-pattern bg-cover min-h-screen w-full">
        <div className="md:flex-grow">
          <Form />
        </div>
        <div className="md:flex-none md:w-1/3 xl:w-1/4 p-4 mx-auto mr-12">
          <MinifigSummary minifigParts={minifigParts} />
        </div>
      </div>
    </FormProvider>
  );
};

export default SummaryPage;
