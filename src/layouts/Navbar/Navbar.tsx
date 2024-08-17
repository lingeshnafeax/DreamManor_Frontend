import CustomLinks from "../../components/Navbar/CustomLinks";

const NavBar = () => {
  return (
    <div className="sticky top-0 flex w-full flex-col">
      <div className="absolute flex w-full items-center rounded-lg justify-between bg-background px-4 py-2">
        <div className="flex font-lato lg:gap-x-6 lg:py-3">
          <div className="flex items-center gap-x-1">
            <div className="flex h-10 w-10 items-center justify-center lg:h-12 lg:w-12">
              <img
                src="/src/assets/logo.jpg"
                alt="Logo"
                className="aspect-square object-cover"
              />
            </div>
            <span className="font-semibold">OurEstate</span>
          </div>
          <div className="hidden items-center md:flex lg:gap-x-6">
            <CustomLinks to="/">Home</CustomLinks>
            <CustomLinks to="/about">About</CustomLinks>
            <CustomLinks to="/contact">Contact</CustomLinks>
            <CustomLinks to="/agents">Agents</CustomLinks>
          </div>
        </div>
        <div className="flex items-center gap-3 lg:gap-6">
          <button>Sign in</button>
          <button className="border border-black bg-accent px-2 py-2 transition duration-200 ease-in-out hover:bg-black hover:text-accent lg:px-3">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
