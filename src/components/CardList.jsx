import { ThreeDots } from "react-loader-spinner";
import Error from "../components/Error";
import Card from "./Card";

function CardList({ recipes, loading=false, error="" }) {
  console.log(recipes)
  
  if (loading) {
    return (
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass="justify-center items-center p-20"
      />
    );
  }

  if (error) {
    return <Error />;
  }

  return recipes && recipes.length > 0 ? (
    <div className="recipes-list grid grid-cols-4 gap-6">
      {recipes.map((item, index) => {
        return <Card key={index} recipe={item}></Card>;
      })}
    </div>
  ) : (
    <p className="text-center py-10">Nothing Here...</p>
  );
}

export default CardList;
