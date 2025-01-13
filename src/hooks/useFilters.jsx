import { useContext, useEffect, useState } from "react";
import { FiltersContext } from "src/contexts/FiltersContext";
import { CATEGORY_LIST_API, AREA_LIST_API } from "src/data";

function useFilters() {
  const context = useContext(FiltersContext);
  const { setArea, setCategory } = context;
  
  const [categoriesList, setCategoriesList] = useState([]);
  const [areaList, setAreaList] = useState([]);

  useEffect(() => {
    const fetchAreas = async () => {
      const response = await fetch(AREA_LIST_API);
      const data = await response.json();
      setAreaList(data.meals || []);
    };

    const fetchCategories = async () => {
      const response = await fetch(CATEGORY_LIST_API);
      const data = await response.json();
      setCategoriesList(data.meals || []);
    };

    fetchAreas();
    fetchCategories();
  }, []);

  if (!context) {
    throw new Error("useFilters must be used within a FiltersProvider");
  }

  return {
    setArea,
    setCategory,
    categoriesList,
    areaList,
  };
}

export default useFilters;
