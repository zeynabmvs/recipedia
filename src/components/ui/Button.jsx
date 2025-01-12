import { Link } from "react-router-dom";

const ShineButton = ({ label, to, onClick }) => {
  const Element = to ? Link : "button"; // Use `Link` if `to` is provided, otherwise use `button`.

  return (
    <Element
      to={to}
      onClick={onClick}
      className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-primary text-btn px-3 md:px-4 lg:px-6 py-2 md:py-3 lg:py-4 font-normal
       text-white transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
    >
      <span className="">{label}</span>
      <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
        <div className="relative h-full w-8 bg-white/20" />
      </div>
    </Element>
  );
};

export default ShineButton;