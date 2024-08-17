import Achievements from "../components/Home/Achievements";
import HomeSearch from "../components/Home/HomeSearch";

const Home = () => {
  return (
    <div className="grid min-h-screen w-full justify-center px-8 font-lato md:grid-cols-3 md:px-0 lg:mt-0">
      <div className="col-span-3 mt-16 flex flex-col justify-center gap-y-6 lg:col-span-2 lg:pr-12">
        <div className="flex flex-col gap-y-6 lg:gap-y-6">
          <h1 className="text-3xl font-bold lg:text-5xl">
            Find your Dream House @Affordable Price
          </h1>
          <p>
            Discover your dream home with our comprehensive real estate
            platform, offering a seamless search experience for properties.
            Connect with trusted agents, explore detailed listings, and make
            informed decisions. Whether buying, selling, or renting, we make
            your real estate journey effortless.
          </p>
        </div>
        <HomeSearch />
        <div className="flex justify-between">
          <Achievements number="16+" description="Years of Experience" />
          <Achievements number="200+" description="Retailers" />
          <Achievements number="1230+" description="Houses rented" />
        </div>
      </div>
      <div>
        <img
          src="/src/assets/backgroundImage.jpeg"
          className="hidden min-h-full rounded-md lg:block"
          alt="background-logos"
        />
      </div>
    </div>
  );
};

export default Home;
