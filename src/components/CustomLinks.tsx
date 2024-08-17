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
      className={`${className} relative m-2 transform transition-transform duration-700 ease-linear will-change-transform hover:scale-[102%] hover:font-semibold`}
      to={to}
    >
      {children}
    </Link>
  );
};

export default CustomLinks;
