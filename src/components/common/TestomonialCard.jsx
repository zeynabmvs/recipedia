import StarRating from "components/ui/StarRating";

const TestomonialCard = ({ testomonial, className = {} }) => {
  return (
    <div
      id={`testimonial-${testomonial.username}`}
      className={` ${className} flex flex-col justify-center items-center rounded-lg p-2 w-[210px] shadow-card-1 absolute bg-white`}
    >
      <div className="bg-gray-100 p-4 pb-2 rounded-xl w-full font-light mb-2">
        <StarRating rate={testomonial.rating} className="mb-2" />
        <p className="text-body-sm">{testomonial.content}</p>
      </div>
      <div className="flex felx-col gap-2 items-center self-start my-2">
        <img src={testomonial.img} alt="" className="h-8 w-8 rounded-full " />
        <span className="">{testomonial.name}</span>
      </div>
    </div>
  );
};

export default TestomonialCard;
