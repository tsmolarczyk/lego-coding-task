import { useContext } from "react";
import ChoosedMinifigContext from "./ChoosedMinifigContext";

const useChoosedMinifig = () => {
  const context = useContext(ChoosedMinifigContext);
  if (!context) {
    throw new Error(
      "useChoosedMinifig must be used within a ChoosedMinifigProvider"
    );
  }
  return context;
};

export default useChoosedMinifig;
