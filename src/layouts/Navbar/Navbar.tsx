import { Link } from "react-router-dom";
import CustomLinks from "../../components/CustomLinks";
import { userData } from "../../data/dummyData";
import { useAppSelector } from "../../hooks/typedRedux";

const NavBar = () => {
  const token = useAppSelector((state) => state.token.token);
  return (
    <div className="sticky top-0 z-50 flex w-full flex-col">
      <div className="absolute z-50 flex w-full items-center justify-between bg-background p-4">
        <div className="flex font-lato lg:gap-x-6 lg:py-3">
          <Link to={"/"} className="flex items-center gap-x-1">
            <div className="flex h-10 w-10 items-center justify-center lg:h-12 lg:w-12">
              <img
                src="/src/assets/logo.jpg"
                alt="Logo"
                className="aspect-square object-cover"
              />
            </div>
            <span className="font-semibold">Dream Manor</span>
          </Link>
          <div className="hidden items-center md:flex lg:gap-x-6">
            <CustomLinks to="/">Home</CustomLinks>
            <CustomLinks to="/about">About</CustomLinks>
            <CustomLinks to="/contact">Contact</CustomLinks>
            <CustomLinks to="/agents">Agents</CustomLinks>
          </div>
        </div>
        {token ? (
          <div className="flex items-center gap-x-6">
            <div className="hidden overflow-hidden sm:block">
              <img
                src={userData.img}
                className="h-10 w-10 rounded-full object-cover"
                alt=""
              />
            </div>
            <p className="font-bold">{userData.name}</p>

            <Link to={"/profile"}>
              <button className="relative border border-black bg-accent p-2">
                Profile
                <span className="absolute -right-4 -top-4 rounded-full bg-black p-1 px-3 text-white">
                  2
                </span>
              </button>
            </Link>
          </div>
        ) : (
          <div className="z-50 flex items-center gap-3 lg:gap-6">
            <Link to="/signin">
              <button>Sign in</button>
            </Link>
            <Link to="/signup">
              <button className="border border-black bg-accent px-2 py-2 transition duration-200 ease-in-out hover:bg-black hover:text-accent lg:px-3">
                Sign up
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
