import Form from "../components/Form";
import useActiveId from "../context/useActiveId";
const API_KEY = "key 75b805e57df61a1d8d61104835211b31";

const SummaryPage = () => {
  const { activeId } = useActiveId();

  const getParts = async () => {
    const response = await fetch(
      `https://rebrickable.com/api/v3/lego/minifigs/${activeId}/parts/`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: API_KEY
        }
      }
    );
    const data = await response.json();
    console.log("data", data);
    return data;
  };

  return (
    <div className="flex bg-lego-pattern bg-cover h-screen w-full">
      <div className="w-2/3">
        <Form />
      </div>
      <div className="w-1/3 bg-yellow">{activeId}</div>
      <button onClick={getParts}>GET PARTS</button>
    </div>
  );
};

export default SummaryPage;
