import { useEffect, useState } from "react";

const CombineLego = () => {
  const API_KEY = "key 75b805e57df61a1d8d61104835211b31";
  const HARRY_POTTER_THEME_ID = 246;
  const perPage = 100;
  const [minifigs, setMinifigs] = useState([]);

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
    for (let i = 0; i < 3; i++) {
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
      randomMinifigs.push(data.results[randomIndex]);
    }
    return randomMinifigs;
  };

  getCount().then(count => {
    getRandomMinifigs(count).then(minifigs => {
      console.log(minifigs);
    });
  });

  useEffect(() => {
    getCount().then(count => {
      getRandomMinifigs(count).then(minifigs => {
        setMinifigs(minifigs);
      });
    });
  }, []);

  return (
    <div>
      {minifigs.map(minifig => (
        <div key={minifig.set_num}>
          <img src={minifig.set_img_url} alt={minifig.name} />
          <p>{minifig.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CombineLego;
