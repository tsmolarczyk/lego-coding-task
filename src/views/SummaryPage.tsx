import React, { useEffect, useState } from "react";
import Form from "../components/Form";
import useChoosedMinifig from "../context/useChoosedMinifig";
import MinifigSummary from "../components/MinifigSummary";
import { FormProvider } from "../context/FormContext";

const API_KEY = "key 75b805e57df61a1d8d61104835211b31";

interface Part {
  part_num: string;
  name: string;
  part_img_url: string;
}

interface PartsApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Part[];
}

const SummaryPage = () => {
  const { choosedMinifig } = useChoosedMinifig();
  const [minifigParts, setMinifigParts] = useState<PartsApiResponse>({
    results: []
  });

  useEffect(() => {
    if (choosedMinifig?.set_num) {
      getParts().then(data => setMinifigParts(data));
    }
  }, [choosedMinifig]);

  const getParts = async (): Promise<PartsApiResponse> => {
    const response = await fetch(
      `https://rebrickable.com/api/v3/lego/minifigs/${choosedMinifig?.set_num}/parts/`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: API_KEY
        }
      }
    );
    return response.json();
  };

  return (
    <FormProvider>
      <div className="flex flex-col md:flex-row bg-lego-pattern bg-cover bg-center bg-no-repeat min-h-screen w-full justify-center items-center h-auto pb-4">
        <div className="md:flex-grow">
          <Form />
        </div>
        <div className="md:flex-none md:w-1/3 xl:w-1/4 p-4 mx-auto">
          <MinifigSummary minifigParts={minifigParts} />
        </div>
      </div>
    </FormProvider>
  );
};

export default SummaryPage;
