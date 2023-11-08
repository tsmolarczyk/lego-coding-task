import { createContext, Dispatch, SetStateAction } from "react";

export interface Minifig {
  set_num: string;
  name: string;
  num_parts: number;
  set_img_url: string;
  set_url: string;
  last_modified_dt: string;
}

export interface ChoosedMinifigContextType {
  choosedMinifig: Minifig | null;
  setChoosedMinifig: Dispatch<SetStateAction<Minifig | null>>;
}

const ChoosedMinifigContext = createContext<ChoosedMinifigContextType>({
  choosedMinifig: null,
  setChoosedMinifig: () => {}
});

export default ChoosedMinifigContext;
