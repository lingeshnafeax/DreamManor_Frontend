import { Link } from "react-router-dom";

const CustomLinks = ({
  children,
  className = "",
  to,
}: {
  children: React.ReactNode;
  className?: string;
  to: string;
}) => {
  return (
    <Link
      className={`${className} relative will-change-transform transform transition-transform duration-700 ease-linear hover:scale-[102%] hover:font-semibold m-2`}
      to={to}
    >
      {children}
    </Link>
  );
};

export default CustomLinks;
