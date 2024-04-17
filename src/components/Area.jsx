import { useParams } from "react-router-dom";
import CardsList from "./CardsList";
import { useContext, useEffect } from "react";
import { GlobalStateContext } from "../contexts/GlobalState";

function Area() {
  const { name } = useParams();
  const {setArea, recipes, loading, error} = useContext(GlobalStateContext)

  useEffect(()=>{
    setArea(name)
  }, [name])

  return (
    <>
      <h1 className="mb-6">Search based on area: {name}</h1>
      <CardsList list={recipes} loading={loading} error={error} />
    </>
  );
}

export default Area;
