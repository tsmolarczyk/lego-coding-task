import { createContext } from "react";

const ActiveIdContext = createContext({
  activeId: null,
  setActiveId: () => {}
});

export default ActiveIdContext;
