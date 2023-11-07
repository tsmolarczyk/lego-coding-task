import { useContext } from "react";
import ActiveIdContext from "./ActiveIdContext";

const useActiveId = () => {
  const context = useContext(ActiveIdContext);
  if (!context) {
    throw new Error("useActiveId must be used within a ActiveIdProvider");
  }
  return context;
};

export default useActiveId;
