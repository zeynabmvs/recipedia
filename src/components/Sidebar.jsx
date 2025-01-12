import { Link } from "react-router-dom";
import useFetch from "src/hooks/useFetch";

function Sidebar() {
  const {data:categories_list} = useFetch(
    `https://www.themealdb.com/api/json/v1/1/list.php?c=list`
  );
  const {data:areas_list} = useFetch(
    `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
  );

  return (
    <aside className="basis-1/5">
      <h2 className="font-bold text-xl mb-4">Categories</h2>
      <ul>
        {(!categories_list || categories_list.length <=0 ) && "Error fetching categories"}
        {categories_list && categories_list.meals && categories_list.meals.length > 0
          ? categories_list?.meals.map((item, index) => {
              return <li key={index} className="p-1.5"><Link to={`/category/${item?.strCategory}`} className="link">{item?.strCategory}</Link></li>;
            })
          : null}
      </ul>
              <br />
      <h2 className="font-bold text-xl mb-4">Areas</h2>
      <ul>
        {(!areas_list || areas_list.length <=0 ) && "Error fetching areas"}
        {areas_list && areas_list.meals && areas_list.meals.length > 0
          ? areas_list?.meals.map((item, index) => {
              return <li key={index} className="p-1.5"><Link to={`/area/${item?.strArea}`} className="link">{item?.strArea}</Link></li>;
            })
          : null}
      </ul>
    </aside>
  );
}

export default Sidebar;
