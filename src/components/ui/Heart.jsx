import { HiOutlineHeart } from "react-icons/hi";

function Heart({ isFavorite }) {
  return (
    <HiOutlineHeart
      size={36}
      className={
        "stroke-red-500 " +
        (isFavorite ? " fill-red-500" : "fill-none hover:fill-red-500")
      }
    />
  );
}

export default Heart;
