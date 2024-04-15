import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function Sidebar() {
  const {data, error, pending} = useFetch(
    `https://www.themealdb.com/api/json/v1/1/list.php?c=list`
  );

  return (
    <aside className="basis-1/5">
      <h2 className="font-bold text-xl mb-4">Categories</h2>
      <ul>
        {error && "Error fetching categories"}
        {data && data.meals && data.meals.length > 0
          ? data?.meals.map((item, index) => {
              return <li key={index}><Link to={`/category/${item?.strCategory}`}>{item?.strCategory}</Link></li>;
            })
          : null}
      </ul>
    </aside>
  );
}

export default Sidebar;
