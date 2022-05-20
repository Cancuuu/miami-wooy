import React from "react";

const PoolCard = () => {
  return (
    <div className="rounded-2xl bg-[#292f55]">
      <img src="bored.jpg" className="rounded-2xl" />
      <div className="px-8 py-4 flex flex-col justify-center items-center">
        <h2 className="text-xl text-white">
          Go to the worldcup final and help house
        </h2>
        <hr className="m-2" />
        <button className="mt-2 lg:px-16 px-8 py-2 bg-teal-500 rounded-3xl">
          Enter Pool
        </button>
      </div>
    </div>
  );
};

export default PoolCard;
