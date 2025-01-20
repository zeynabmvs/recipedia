import { useContext } from "react";
import { RecipesContext } from "src/contexts/RecipesContext";

function useRecipes() {
  const context = useContext(RecipesContext);

  if (!context) {
    throw new Error("useRecipes must be used within a RecipesProvider");
  }

  return context;
}

export default useRecipes;
