import { createContext } from "react";

const ChoosedMinifigContext = createContext({
  choosedMinifig: null,
  setChoosedMinifig: () => {}
});

export default ChoosedMinifigContext;
