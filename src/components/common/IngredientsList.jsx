const IngredientsList = ({ list }) => {
  return (
    <div>
      {list?.map((item) => {
        return <div key={item?.idIngredient}> {item?.strIngredient}</div>;
      })}
      <div></div>
    </div>
  );
};

export default IngredientsList;
