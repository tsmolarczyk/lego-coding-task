import { useState, useEffect } from "react";
import ChoosedMinifigContext from "./ChoosedMinifigContext";

const ChoosedMinifigProvider = ({ children }) => {
  const [choosedMinifig, setChoosedMinifig] = useState(() => {
    const savedMinifig = localStorage.getItem("choosedMinifig");
    return savedMinifig ? JSON.parse(savedMinifig) : null;
  });

  useEffect(() => {
    if (choosedMinifig === null) {
      localStorage.removeItem("choosedMinifig");
    } else {
      localStorage.setItem("choosedMinifig", JSON.stringify(choosedMinifig));
    }
  }, [choosedMinifig]);

  return (
    <ChoosedMinifigContext.Provider
      value={{ choosedMinifig, setChoosedMinifig }}
    >
      {children}
    </ChoosedMinifigContext.Provider>
  );
};

export default ChoosedMinifigProvider;
