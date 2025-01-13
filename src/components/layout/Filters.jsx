import useFetch from "src/hooks/useFetch";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "components/ui/select";
import { CATEGORY_LIST_API, AREA_LIST_API } from "src/data";
import useFilters from "src/hooks/useFilters";

const Filters = () => {
  // const { data: categories_list } = useFetch(CATEGORY_LIST_API);
  // const { data: areas_list } = useFetch(AREA_LIST_API);
  const { setCategory, setArea, categoriesList, areaList } = useFilters();

  return (
    <div className="mb-6 md:mb-10 flex justify-start gap-6 md:gap-8">
      <span className="text-body-lg font-medium">Filter based on: </span>

      <Select onValueChange={(value) => setCategory(value)}>
        <SelectTrigger className="w-[280px]">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {categoriesList &&
              categoriesList &&
              categoriesList.length > 0 &&
              categoriesList.map((category, index) => (
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

      <Select onValueChange={(value) => setArea(value)}>
        <SelectTrigger className="w-[280px]">
          <SelectValue placeholder="Area" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {areaList &&
              areaList &&
              areaList.length > 0 &&
              areaList.map((area, index) => (
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
