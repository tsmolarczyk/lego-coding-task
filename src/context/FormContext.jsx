import { createContext, useContext, useState } from "react";

const FormContext = createContext();

export const useFormContext = () => useContext(FormContext);

export const FormProvider = ({ children }) => {
  const [onSubmit, setOnSubmit] = useState(() => data => {});

  return (
    <FormContext.Provider value={{ onSubmit, setOnSubmit }}>
      {children}
    </FormContext.Provider>
  );
};
