import { useEffect, useState } from "react";
import { CATEGORY_LIST_API, AREA_LIST_API } from "src/data";

function useFilters() {
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

  return {
    categoriesList,
    areaList,
  };
}

export default useFilters;
