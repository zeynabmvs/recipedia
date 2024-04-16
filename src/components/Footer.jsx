import { FcLike } from "react-icons/fc";

function Footer() {
  return <footer className="container h-40 flex items-end justify-center">
    <p>Made with <FcLike size={22} style={{display: "inline-block", marginBottom: "5px"}} /> By <a href="https://github.com/zeynabmvs" target="_blank" className="link">Zeynab</a></p>
  </footer>;
}

export default Footer;
