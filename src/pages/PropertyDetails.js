import React from "react";
import { housesData } from "../data";
import { useParams } from "react-router-dom";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import { Link } from "react-router-dom";

const PropertyDetails = () => {
  const { id } = useParams();
  const house = housesData.find((house) => {
    return house.id === parseInt(id);
  });

  return (
    <section>
      <div className="container mx-auto min-h-[800px] mb-14">
        <div
          className="flex flex-col lg:flex-row
        lg:items-center lg:justify-between"
        >
          <div className="text-2xl font-semibold">
            <h2>{house.name}</h2>
            <h3 className="text-lg mb-4">{house.address}</h3>
          </div>
          <div className="mb-4 lg:mb-0 flex gap-x-2 text-sm">
            <div className="bg-green-500 text-white px-3 rounded-full">
              {house.type}
            </div>
            <div className="bg-violet-500 text-white px-3 rounded-full">
              {house.country}
            </div>
          </div>
          <div
            className="text-3xl font-semibold 
          text-violet-600"
          >
            $ {house.price}
          </div>
        </div>
        <div
          className="flex flex-col items-start
        gap-8 lg:flex-row"
        >
          <div className="max-w-[768px]">
            <div className="mb-8">
              <img src={house.imageLg} />
            </div>
            <div className="flex gap-x-6 text-violet-700 mb-6">
              <div className="flex gap-x-2 ite">
                <BiBed className="text-2xl" />
                <div>{house.bedrooms}</div>
              </div>
              <div className="flex gap-x-2 ite">
                <BiBath className="text-2xl" />
                <div>{house.bathrooms}</div>
              </div>
              <div className="flex gap-x-2 ite">
                <BiArea className="text-2xl" />
                <div>{house.surface}</div>
              </div>
            </div>
            <div>{house.description}</div>
          </div>
          <div
            className="flex-1 bg-white w-full
          mb-8 border-2 border-gray-300 rounded-lg px-6 py-8"
          >
            <div className=" flex items-center gap-x-4 mb-8">
              <div className="p-1 border border-gray-300 rounded-full">
                <img src={house.agent.image} />
              </div>
              <div className="font-bold text-lg">{house.agent.name}</div>
              <Link to="" className="text-violet-700 text-sm">
                View Listings
              </Link>
            </div>
            <form className="flex flex-col gap-y-4">
              <input
                className="border-2 border-gray-300 focus:border-violet-700
                 outline-none rounded w-full px-4 h-14 text-sm mt-4 mb-4"
                type="text"
                placeholder="Name*"
              />
              <input
                className="border-2 border-gray-300 focus:border-violet-700
                 outline-none rounded w-full px-4 h-14 text-sm mb-4"
                type="text"
                placeholder="Email*"
              />
              <input
                className="border-2 border-gray-300 focus:border-violet-700
                 outline-none rounded w-full px-4 h-14 text-sm mb-4"
                type="text"
                placeholder="Phone*"
              />
              <textarea
                className="border-2 border-gray-300 focus:border-violet-700
              outline-none resize-none rounded w-full p-4 h-32 text-sm
               text-gray-700"
                placeholder="Message*"
              ></textarea>
              <div className="flex gap-x-2 mt-4">
                <button
                  className="bg-violet-700 hover:bg-violet-800
                text-white rounded p-4  w-full transition"
                >
                  Send message
                </button>
                <button
                  className="border-2
                 border-violet-700 
                 text-violet-700
                 hover:border-violet-900 
                 hover:text-violet-900
                 rounded p-4  w-full transition"
                >
                  Call
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
