import { useEffect, useState } from "react";
import {
  CATEGORY_LIST_API,
  AREA_LIST_API,
  INGREDIENTS_LIST_API,
} from "src/data";

function useFilters() {
  const [categoriesList, setCategoriesList] = useState([]);
  const [areaList, setAreaList] = useState([]);
  const [ingredientList, setIngredientList] = useState([]);

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
    const fetchIngredients = async () => {
      const response = await fetch(INGREDIENTS_LIST_API);
      const data = await response.json();
      setIngredientList(data.meals || []);
    };

    fetchAreas();
    fetchCategories();
    fetchIngredients();
  }, []);

  return {
    categoriesList,
    areaList,
    ingredientList,
  };
}

export default useFilters;
