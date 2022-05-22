import Image from "next/image";
import React from "react";
import Link from "next/link";

const Card = ({
  image,
  title,
  desc,
  buttonlabel,
  path,
  foundationName,
  donatedAmount,
}) => {
  return (
    <div className="flex flex-col justify-between rounded-2xl bg-[#292f55] shadow-lg hover:shadow-2xl hover:bg-[#253082] hover:cursor-pointer transition-all">
      <img src={image} alt="" className="rounded-xl h-64" />
      <div className="px-8 py-4 flex flex-col justify-center items-center h-full">
        <h2 className="text-2xl text-white font-bold">{title}</h2>

        <hr className="m-4 w-full" />
        <div className="flex flex-col justify-center gap-3">
          <p className="text-teal-300">
            Address: <span className="text-white">0xa4fs...615232</span>
          </p>
          <p className="text-teal-300">
            {foundationName} address:{" "}
            <span className="text-white">0xa4fs...615232</span>
          </p>
          <p className="text-teal-300">
            Date: <span className="text-white">05/08/2002</span>
          </p>
        </div>
        <p className="mt-8 text-white font-semibold">
          Amount donated: <span className="text-teal-300">{donatedAmount}</span>
        </p>
        {path ? (
          <Link href={path}>
            <button className="mt-4 lg:px-16 px-8 py-2 bg-teal-500 rounded-3xl hover:shadow-2xl hover:bg-teal-300 transition-all">
              {buttonlabel}
            </button>
          </Link>
        ) : (
          <button className="mt-4 lg:px-16 px-8 py-2 bg-teal-500 rounded-3xl hover:shadow-2xl hover:bg-teal-300 transition-all">
            {buttonlabel}
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
