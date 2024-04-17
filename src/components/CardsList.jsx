import { ThreeDots } from "react-loader-spinner";
import Card from "./Card";
import Error from "./Error";

function CardsList({ list, error = "", loading = false }) {
    console.log(list)
  
    if (loading || !list) {
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

  if (error && error !=="") {
    return <Error message={error} />;
  }

  return Array.isArray(list) && list.length > 0 ? (
    <div className="grid grid-cols-4 gap-6">
      {list.map((item, index) => {
        return <Card key={index} recipe={item}></Card>;
      })}
    </div>
  ) : (
    <p className="text-center py-10">Nothing Here...</p>
  );
}

export default CardsList;
