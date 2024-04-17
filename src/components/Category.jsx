import { useParams } from "react-router-dom";
import CardsList from "../components/CardsList";
import { useContext, useEffect } from "react";
import { GlobalStateContext } from "../contexts/GlobalState";

function Category() {
  const { name } = useParams();
  const {setCategory, recipes, loading, error} = useContext(GlobalStateContext)

  useEffect(()=>{
    setCategory(name)
  }, [name])

  return (
    <>
      <h1 className="mb-6">Search based on category: {name}</h1>
      <CardsList list={recipes} loading={loading} error={error} />
    </>
  );
}

export default Category;
