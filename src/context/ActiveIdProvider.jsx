import { useState, useEffect } from "react";
import ActiveIdContext from "./ActiveIdContext";

const ActiveIdProvider = ({ children }) => {
  const [activeId, setActiveId] = useState(() => {
    return localStorage.getItem("activeId");
  });

  useEffect(() => {
    if (activeId === null) {
      localStorage.removeItem("activeId");
    } else {
      localStorage.setItem("activeId", activeId);
    }
  }, [activeId]);

  return (
    <ActiveIdContext.Provider value={{ activeId, setActiveId }}>
      {children}
    </ActiveIdContext.Provider>
  );
};

export default ActiveIdProvider;
