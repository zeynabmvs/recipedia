import { useEffect, useState } from "react";
import {
  CATEGORY_LIST_API,
  AREA_LIST_API,
  INGREDIENTS_LIST_API,
} from "src/data";
import axios from "axios";

function useFilters() {
  const [categoriesList, setCategoriesList] = useState([]);
  const [areaList, setAreaList] = useState([]);
  // const [ingredientList, setIngredientList] = useState([]);

  useEffect(() => {
    // Create an AbortController instance
    const controller = new AbortController();

    // console.log('fetching filter data')

    const fetchAreas = async () => {
      try {
        const response = await axios.get(AREA_LIST_API, {
          signal: controller.signal, // Pass signal to Axios
        });
        setAreaList(response.data.meals || []);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Fetch areas request canceled:", error.message);
        } else {
          console.error("Error fetching areas:", error.message);
        }
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await axios.get(CATEGORY_LIST_API, {
          signal: controller.signal,
        });
        setCategoriesList(response.data.meals || []);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Fetch categories request canceled:", error.message);
        } else {
          console.error("Error fetching categories:", error.message);
        }
      }
    };

    // const fetchIngredients = async () => {
    //   try {
    //     const response = await axios.get(INGREDIENTS_LIST_API, {
    //       signal: controller.signal,
    //     });
    //     setIngredientList(response.data.meals || []);
    //   } catch (error) {
    //     if (axios.isCancel(error)) {
    //       console.log("Fetch ingredients request canceled:", error.message);
    //     } else {
    //       console.error("Error fetching ingredients:", error.message);
    //     }
    //   }
    // };

    // Call the fetch functions
    fetchAreas();
    fetchCategories();
    // fetchIngredients();

    // Cleanup function to cancel requests on component unmount
    return () => {
      controller.abort(); // Abort any ongoing Axios requests
    };
  }, []);

  return {
    categoriesList,
    areaList,
    // ingredientList,
  };
}

export default useFilters;
