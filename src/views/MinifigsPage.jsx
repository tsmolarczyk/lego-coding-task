import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import MinifigCard from "../components/MinifigCard";
import useActiveId from "../context/useActiveId";

const MinifigsPage = () => {
  const API_KEY = "key 75b805e57df61a1d8d61104835211b31";
  const HARRY_POTTER_THEME_ID = 246;
  const perPage = 100;
  const navigate = useNavigate();
  const [minifigs, setMinifigs] = useState([]);
  const { activeId, setActiveId } = useActiveId();

  const getCount = async () => {
    const response = await fetch(
      `https://rebrickable.com/api/v3/lego/minifigs/?in_theme_id=${HARRY_POTTER_THEME_ID}&page_size=1`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: API_KEY
        }
      }
    );
    const data = await response.json();
    return data.count;
  };

  const getRandomPageNumber = totalCount => {
    const totalPages = Math.ceil(totalCount / perPage);
    return Math.floor(Math.random() * totalPages) + 1;
  };

  const getRandomMinifigs = async count => {
    const randomMinifigs = [];
    while (randomMinifigs.length < 3) {
      const randomPage = getRandomPageNumber(count);
      const response = await fetch(
        `https://rebrickable.com/api/v3/lego/minifigs/?in_theme_id=${HARRY_POTTER_THEME_ID}&page=${randomPage}&page_size=${perPage}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: API_KEY
          }
        }
      );
      const data = await response.json();
      const randomIndex = Math.floor(Math.random() * data.results.length);
      const candidateMinifig = data.results[randomIndex];

      if (candidateMinifig.set_img_url) {
        randomMinifigs.push(candidateMinifig);
      }
    }
    return randomMinifigs;
  };

  const handleButtonClick = () => {
    navigate("/summary");
  };

  const handleActive = id => {
    console.log(id);
    setActiveId(id);
  };

  useEffect(() => {
    console.log("Updated activeId:", activeId);
  }, [activeId]);

  useEffect(() => {
    getCount().then(count => {
      getRandomMinifigs(count).then(minifigs => {
        setMinifigs(minifigs);
      });
    });
  }, []);

  console.log(activeId);
  return (
    <div className=" bg-black h-full w-full flex items-center justify-center flex-col">
      <div className="flex justify-center items-center ">
        {minifigs.map(minifig => (
          <MinifigCard
            key={minifig.set_num}
            imgUrl={minifig.set_img_url}
            alt={minifig.name}
            name={minifig.name}
            onClick={() => handleActive(minifig.set_num)}
            isActive={activeId === minifig.set_num}
          />
        ))}
      </div>
      <Button
        onClick={handleButtonClick}
        title={"LETS GO!"}
        isDisabled={activeId === null}
      />
    </div>
  );
};

export default MinifigsPage;
