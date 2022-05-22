import React from "react";
import Layout from "../../components/Layout";

import { useRouter } from "next/router";
import { ethers } from "ethers";

export const NFTCard = () => {
  const nftContract = new web3.eth.Contract(contract.abi, contractAddress);

  const router = useRouter();

  const { id } = router.query;

  const nftAddresses = {
    1: {
      poolAddress: "0x0A9BA873f546855Af26e27Fd49036359E133fEB7",
    },
    2: {
      poolAddress: "",
    },
    3: {
      poolAddress: "",
    },
  };

  console.log(id);

  const mintNFT = async (poolAddress) => {
    const tx = {
      to: contractAddress,
      gas: 500000,
      data: nftContract.methods.safeMint(poolAddress).encodeABI(),
    };

    // const signedTx = await ethers.signTransaction(tx, PRIVATE_KEY);
    // const sendedTx = await ethers.sendSignedTransaction(
    //   signedTx.rawTransaction
    // );

    console.log(sendedTx);
  };

  return (
    <div className="flex flex-col justify-between rounded-2xl bg-[#343a6c] shadow-lg hover:shadow-2xl hover:bg-[#253082] hover:cursor-pointer transition-all">
      <div className="flex justify-center items-center m-8">
        {id ? (
          <img src={`/nft${id}.png`} alt="" className="h-64 w-64" />
        ) : (
          <img src={`/nft1.png`} alt="" className="h-64 w-64" />
        )}
      </div>
      <div className="px-8 py-4 flex flex-col justify-center items-center">
        <h2 className="text-3xl text-white">
          We are happy to have you on our community!
        </h2>
        <hr className="m-2" />
        <p className="text-teal-500 text-2xl">Please claim your PoD</p>
        <button
          onClick={() => mintNFT(nftAddresses[id].poolAddress)}
          className="mt-16 lg:px-16 px-8 py-2 bg-teal-500 rounded-3xl hover:shadow-2xl hover:bg-teal-300 transition-all"
        >
          Mint on Celo
        </button>
        <p className="mt-8 text-white text-xl">
          This PoD is minted on Celo Network!
        </p>
      </div>
    </div>
  );
};

const id = () => {
  return (
    <Layout>
      <div className="flex justify-center items-center w-full">
        <NFTCard />
      </div>
    </Layout>
  );
};

export default id;
