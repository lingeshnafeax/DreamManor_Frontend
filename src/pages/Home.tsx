import Achievements from "../features/Home/Achievements";
import HomeSearch from "../features/Home/HomeSearch";
import BackgroundImageLayout from "../layouts/BackgroundImage/BackgroundImageLayout";

const Home = () => {
  return (
    <BackgroundImageLayout>
      <div className="flex flex-col gap-y-6 lg:gap-y-6">
        <h1 className="text-3xl font-bold lg:text-5xl">
          Find your Dream House @Affordable Price
        </h1>
        <p>
          Discover your dream home with our comprehensive real estate platform,
          offering a seamless search experience for properties. Connect with
          trusted agents, explore detailed listings, and make informed
          decisions. Whether buying, selling, or renting, we make your real
          estate journey effortless.
        </p>
      </div>
      <HomeSearch />
      <div className="flex justify-between">
        <Achievements number="16+" description="Years of Experience" />
        <Achievements number="200+" description="Retailers" />
        <Achievements number="1230+" description="Houses rented" />
      </div>
    </BackgroundImageLayout>
  );
};

export default Home;
