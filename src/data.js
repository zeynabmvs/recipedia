export const footerNavigation = {
  connect: [
    {
      name: "Twitter",
      href: "#",
    },
    {
      name: "Github",
      href: "#",
    },
    {
      name: "LinkedIn",
      href: "#",
    },
  ],

  Categories: [
    { name: "Explore recipes", href: "/recipes" },
    { name: "Favorites", href: "/favorites" },
    { name: "Recipe of the day", href: "#" },
    { name: "Venetian Duck Ragu", href: "/recipe/52838" },
    { name: "Cream Cheese Tart", href: "/recipe/52779" },
  ],
};

export const testimonialData = [
  {
    img: "/avatars/image-amyrobson.png",
    content:
      "I've discovered a treasure trove of meatless recipes that have made my meals.",
    rating: 4,
    username: "amyrobson",
    name: "Amy Robson",
  },
  {
    img: "/avatars/image-juliusomo.png",
    content: "The recipes here are not only delicious but also easy to follow",
    rating: 5,
    username: "juliosomo",
    name: "Julio Somo",
  },
];

export const CATEGORY_LIST_API =
  "https://www.themealdb.com/api/json/v1/1/list.php?c=list";
export const AREA_LIST_API =
  "https://www.themealdb.com/api/json/v1/1/list.php?a=list";
export const CATEGORIES_DETAILS_API =
  "https://www.themealdb.com/api/json/v1/1/categories.php";
export const RECIPE_DETAIL_API =
  "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
export const RECIPES_BY_CATEGORY_API =
  "https://www.themealdb.com/api/json/v1/1/filter.php?c=";
export const RECIPES_BY_AREA_API =
  "https://www.themealdb.com/api/json/v1/1/filter.php?a=";
export const RECIPES_BY_QUERY_API =
  "https://www.themealdb.com/api/json/v1/1/search.php?s=";

export const INGREDIENTS_LIST_API =
  "https://www.themealdb.com/api/json/v1/1/list.php?i=list";
export const FILTER_BY_INGREDIENT_API =
  "https://www.themealdb.com/api/json/v1/1/filter.php?i=";
  
export const AUTHOR_URL = "https://github.com/zeynabmvs";

export const DEFAULT_FILTER = { type: "category", value: "chicken" };
export const DEFAULT_PER_PAGE = 8;
