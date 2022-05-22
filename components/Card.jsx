import Image from "next/image";
import React from "react";
import Link from "next/link";

const Card = ({ image, title, desc, buttonlabel, path }) => {
  return (
    <div className="flex flex-col justify-between rounded-2xl bg-[#292f55] shadow-lg hover:shadow-2xl hover:bg-[#253082] hover:cursor-pointer transition-all">
      <img src={image} alt="" className="rounded-xl h-64" />
      <div className="px-8 py-4 flex flex-col justify-center items-center">
        <h2 className="text-xl text-white">{title}</h2>
        <hr className="m-2" />
        <p className="text-white">{desc}</p>
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
