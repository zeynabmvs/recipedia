import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "components/ui/select";
import useFilters from "src/hooks/useFilters";

const Filters = ({ currentFilter, onFilterChange }) => {
  const { categoriesList, areaList, ingredientList } = useFilters();

  const handleCategoryChange = (newValue) => {
    onFilterChange({ type: "category", value: newValue });
  };

  const handleAreaChange = (newValue) => {
    onFilterChange({ type: "area", value: newValue });
  };

  const handleIngredientChange = (newValue) => {
    onFilterChange({
      type: "ingredient",
      value: newValue.split(" ").join("_"),
    });
  };

  return (
    <div className="mb-6 md:mb-10 flex flex-col md:flex-row justify-start gap-2 lg:gap-4 ">
      <span className="text-body-lg font-medium">Filter based on: </span>
      <div className="flex gap-4">
        <Select onValueChange={(value) => handleCategoryChange(value)}>
          <SelectTrigger className="w-[280px]">
            <SelectValue
              placeholder={
                currentFilter.type === "category"
                  ? currentFilter.value
                  : "Category"
              }
            />
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
            <SelectValue
              placeholder={
                currentFilter.type === "area" ? currentFilter.value : "Area"
              }
            />
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

        <Select onValueChange={(value) => handleIngredientChange(value)}>
          <SelectTrigger className="w-[280px]">
            <SelectValue
              placeholder={
                currentFilter.type === "ingredient"
                  ? currentFilter.value
                  : "Ingredient"
              }
            />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {ingredientList &&
                ingredientList &&
                ingredientList.length > 0 &&
                ingredientList.map((item) => (
                  <SelectItem
                    value={item.strIngredient}
                    key={item.idIngredient}
                  >
                    {item.strIngredient}
                  </SelectItem>
                ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default Filters;
