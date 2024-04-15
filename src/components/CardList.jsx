import Card from "./Card";

function CardList({ recipes }) {
  return recipes && recipes.length > 0 ? (
    <div className="recipes-list grid grid-cols-4 gap-6">
      {recipes.map((item, index) => {
        return <Card key={index} recipe={item}></Card>;
      })}
    </div>
  ) : (
    <p className="text-center py-10">Nothing found, try search</p>
  );
}

export default CardList;
