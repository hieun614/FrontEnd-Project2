import React, { useContext } from "react";
import CountryDropdown from "./CountryDropdown";
import PropertyDropdown from "./PropertyDropdown";
import PriceRangeDropdown from "./PriceRangeDropdown";
import { RiSearch2Line } from "react-icons/ri";
import { HouseContext } from "./HouseContext";

const Search = () => {
  const { handleClick } = useContext(HouseContext);

  return (
    <div
      className="px-[30px] py-6 max-w-[1170px]
    mx-auto flex flex-col lg:flex-row justify-between
    gap-4 lb:gap-x-3 relative lg:-top-4 lg:shadow-1
    bg-white mt-10 rounded-lg"
    >
      <CountryDropdown />
      <PropertyDropdown />
      <PriceRangeDropdown />
      <button
        onClick={() => handleClick()}
        className="bg-violet-700
      hover:bg-violet-800 transition w-full lg:max-w-[160px] h-15
      rounded-lg flex justify-center items-center text-white text-lg"
      >
        <RiSearch2Line />
      </button>
    </div>
  );
};

export default Search;
