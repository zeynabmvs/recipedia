import Card from "components/common/Card";
import Error from "components/common/Error";
import Loading from "components/ui/Loading";

function CardsList({ list, error = "", loading = false}) {

  if (loading) {
    return <Loading />;
  }
  if (error && error !== "") {
    return <Error message={error} />;
  }

  return Array.isArray(list) && list.length > 0 ? (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
        {list.map((item, index) => {
          return <Card key={index} recipe={item}></Card>;
        })}
      </div>
  ) : (
    <p className="text-center py-10">Nothing Found...</p>
  );
}

export default CardsList;
