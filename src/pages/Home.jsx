import { useContext } from "react";
import Card from "../components/Card";
import { GlobalStateContext } from "../contexts/GlobalState";
import CardList from "../components/CardList";
function Home() {
  const { recipes } = useContext(GlobalStateContext);

  return (
    <>
      <h1>Home</h1>
      <CardList recipes={recipes} />
    </>
  );
}

export default Home;
