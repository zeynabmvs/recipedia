import { useContext } from "react";
import CardList from "../components/CardList";
import { GlobalStateContext } from "../contexts/GlobalState";

function Home() {
  const { recipes, loading, error } = useContext(GlobalStateContext);

  return (
    <>
      <h1>Home</h1>
      <CardList recipes={recipes} loading={loading} error={error} />
    </>
  );
}

export default Home;
