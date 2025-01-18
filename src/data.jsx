export const footerNavigation = {
  connect: [
    {
      name: "Twitter",
      href: "https://twitter.com/justansub",
    },
    {
      name: "Github",
      href: "https://www.youtube.com/@SpeedyBrand-SEO",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/speedy-brand-inc/",
    },
  ],

  Categories: [
    { name: "Beef", href: "#" },
    { name: "Mexican", href: "#" },
    { name: "Healthy", href: "#" },
    { name: "Salads", href: "#" },
  ],
};

export const testimonialData = [
  {
    img: "/avatars/image-amyrobson.png",
    content: "I've discovered a treasure trove of meatless recipes that have made my meals.",
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
  }
]

export const CATEGORY_LIST_API = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list'
export const AREA_LIST_API = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list'
export const CATEGORIES_DETAILS_API = 'https://www.themealdb.com/api/json/v1/1/categories.php'
export const RECIPE_DETAIL_API ='https://www.themealdb.com/api/json/v1/1/lookup.php?i='

export const AUTHOR_URL = 'https://github.com/zeynabmvs'


export const DEFAULT_FILTER = { type: "category", value: "breakfast" };
export const DEFAULT_PER_PAGE = 8