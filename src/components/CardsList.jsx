import { ThreeDots } from "react-loader-spinner";
import Card from "./Card";
import Error from "./Error";
import Pagination from "./Pagination";

function CardsList({ list, error = "", loading = false, resultsLength=0 }) {
  console.log(list);

  if (loading) {
    return (
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#E8751A"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass="justify-center items-center p-20"
      />
    );
  }
  console.log(error);
  if (error && error !== "") {
    return <Error message={error} />;
  }
  console.log("******", list)
  return Array.isArray(list) && list.length > 0 ? (
    <> 
    {resultsLength ? <h3>Found {resultsLength} results</h3> : null}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-9">
        {list.map((item, index) => {
          return <Card key={index} recipe={item}></Card>;
        })}
      </div>
    </>
  ) : (
    <p className="text-center py-10">Nothing Found...</p>
  );
}

export default CardsList;
