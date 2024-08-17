import { SearchIcon } from "lucide-react";
import { useState } from "react";
import { cn } from "../../utils/tailwindMerge";

const HomeSearch = () => {
  const [searchType, setSearchType] = useState<"Rent" | "Buy">("Rent");
  return (
    <div className="flex w-full flex-wrap">
      <button
        className={cn("px-8 py-3 transition duration-200 ease-linear", {
          "bg-black text-white": searchType === "Buy",
        })}
        onClick={() => {
          setSearchType("Buy");
        }}
      >
        Buy
      </button>
      <button
        className={cn("px-8 py-3 transition duration-200 ease-linear", {
          "bg-black text-white": searchType === "Rent",
        })}
        onClick={() => {
          setSearchType("Rent");
        }}
      >
        Rent
      </button>
      <div className="grid w-full flex-wrap border border-black sm:grid-cols-4">
        <input
          className="h-full border-none p-3 text-sm text-black placeholder-black outline-none ring-accent"
          type="text"
          placeholder="Location City"
        />
        <input
          className="h-full border-none p-3 text-sm text-black placeholder-black outline-none ring-accent"
          type="number"
          placeholder="Min Price"
        />
        <input
          className="h-full border-none p-3 text-sm text-black placeholder-black outline-none ring-accent"
          type="number"
          placeholder="Max Price"
        />
        <button className="flex w-full items-center justify-center bg-accent transition duration-200 ease-in-out hover:bg-black hover:text-accent p-2">
          <SearchIcon />
        </button>
      </div>
    </div>
  );
};

export default HomeSearch;
