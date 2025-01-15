const Container = ({ children, className, Element="div" }) => {
  return <Element className={`z-container ${className}`}>{children}</Element>;
};

export default Container;
