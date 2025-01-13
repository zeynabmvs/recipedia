import useFetch from "src/hooks/useFetch";
import { GlobalStateContext } from "src/contexts/GlobalState";
import { useContext } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "components/ui/select";

const Filters = () => {
  const { data: categories_list } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/list.php?c=list`
  );
  const { data: areas_list } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
  );

  const { setCategory, setArea } = useContext(GlobalStateContext);

  const handleCategoryChange = (newCategory) => {
    // console.log(newCategory);
    setCategory(newCategory);
  };

  const handleAreaChange = (newArea) => {
    // console.log(newArea)
    setArea(newArea);
  };

  return (
    <div className="mb-6 md:mb-10 flex justify-start gap-6 md:gap-8">
      <span className="text-body-lg font-medium">Filter based on: </span>

      <Select onValueChange={(value) => handleCategoryChange(value)}>
        <SelectTrigger className="w-[280px]">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {categories_list &&
              categories_list.meals &&
              categories_list.meals.length > 0 &&
              categories_list.meals.map((category, index) => (
                <SelectItem
                  value={category.strCategory}
                  key={category.strCategory}
                >
                  {category.strCategory}
                </SelectItem>
              ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select onValueChange={(value) => handleAreaChange(value)}>
        <SelectTrigger className="w-[280px]">
          <SelectValue placeholder="Area" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {areas_list &&
              areas_list.meals &&
              areas_list.meals.length > 0 &&
              areas_list.meals.map((area, index) => (
                <SelectItem value={area.strArea} key={area.strArea}>
                  {area.strArea}
                </SelectItem>
              ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Filters;
