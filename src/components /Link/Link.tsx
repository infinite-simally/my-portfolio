import "./Link.css";

const Link = ({ children, href, className }: any) => {
  return (
    <a href={href} className={className} onClick={(e) => e.preventDefault()}>
      {children}
    </a>
  );
};

export default Link;
