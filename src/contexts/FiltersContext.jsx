import { createContext, useState } from "react";

export const FiltersContext = createContext(null);

const FiltersProvider = ({ children }) => {
  const [area, setArea] = useState("");
  const [category, setCategory] = useState("");

  return (
    <FiltersContext.Provider
      value={{
        area,
        setArea,
        category,
        setCategory,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};

export default FiltersProvider;
