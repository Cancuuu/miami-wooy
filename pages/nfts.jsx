import React from "react";
import Layout from "../components/layout";
import Card from "../components/Card";

const nfts = () => {
  return (
    <Layout>
      <div className="flex flex-col justify-center gap-8 mx-12 mb-12">
        <div className="shadow-2xl p-8 rounded-2xl w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          <p className="text-2xl text-white">
            We created the Proof of Donation NFTs taking the first step on the
            road to add transparency in donations. We record the full cycle of
            the payment from user to use in the PoDs metadata.
          </p>
          <p className="mt-8 text-2xl text-white">
            You can also collect our PoDs and have future benefits and badges
            from the campaigns you help fund!
          </p>
        </div>
        <div className="shadow-2xl p-8 rounded-2xl w-1/2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          <p className="text-white text-2xl flex">
            - You have generated in donations:{" "}
            <span className="ml-4 text-3xl text-teal-300 font-bold">$1450</span>
          </p>
          <hr className="my-4  text-white" />
          <p className="text-white text-2xl flex">
            - Total donations made with Wooy:{" "}
            <span className="ml-4 text-3xl text-teal-300 font-bold">$1450</span>
          </p>
        </div>
        <div className="grid grid-cols-3 gap-7">
          <Card
            image="/donation1.png"
            title={"Win a ticket"}
            desc={"This will be the best prize of the world"}
            buttonlabel={"Claim PoD"}
          />
          <Card
            image="/donation2.png"
            title={"Win a ticket"}
            desc={"This will be the best prize of the world"}
            buttonlabel={"Claim PoD"}
          />
          <Card
            image="/donation3.png"
            title={"Win a ticket"}
            desc={"This will be the best prize of the world"}
            buttonlabel={"Claim PoD"}
          />
        </div>
      </div>
    </Layout>
  );
};

export default nfts;
