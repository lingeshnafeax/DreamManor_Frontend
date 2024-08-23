import { ReactNode } from "react";

const BackgroundImageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid min-h-screen w-full justify-center px-8 font-lato md:grid-cols-3 md:px-0 lg:mt-0">
      <div className="col-span-3 mt-20 flex flex-col justify-center gap-y-6 lg:col-span-2 lg:pr-12">
        {children}
      </div>
      <div>
        <img
          src="/src/assets/backgroundImage.jpeg"
          className="hidden min-h-full lg:block"
          alt="background-logos"
        />
      </div>
    </div>
  );
};

export default BackgroundImageLayout;
