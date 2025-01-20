import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "components/ui/select";
import useFilters from "src/hooks/useFilters";
import { useContext } from "react";
import { GlobalStateContext } from "src/contexts/GlobalState";

const Filters = () => {
  const { categoriesList, areaList } = useFilters();
    const {setRecipesFilter} = useContext(GlobalStateContext)

  const handleCategoryChange = (newValue) => {
    setRecipesFilter({type: 'category', value: newValue})
  };

  const handleAreaChange = (newValue) => {
    setRecipesFilter({type: 'area', value: newValue})
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
            {categoriesList &&
              categoriesList &&
              categoriesList.length > 0 &&
              categoriesList.map((category) => (
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
            {areaList &&
              areaList &&
              areaList.length > 0 &&
              areaList.map((area) => (
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
