import React from "react";
import Link from "next/link";

//---icons
import WavesIcon from "@mui/icons-material/Waves";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const SideBar = () => {
  return (
    <div className="flex flex-col gap-8">
      <Link href="/">
        <div className="flex text-center items-center gap-2 hover:cursor-pointer rounded-3xl hover:bg-[#5565a8] px-12 transition-all">
          <WavesIcon className="text-white" />
          <p className="text-3xl my-2 text-white">Pools</p>
        </div>
      </Link>
      <Link href="/nfts">
        <div className="flex text-center items-center gap-2 hover:cursor-pointer rounded-3xl hover:bg-[#5565a8] px-12 transition-all">
          <ColorLensIcon className="text-white" />
          <p className="text-3xl my-2 text-white">NFTs</p>
        </div>
      </Link>
      <Link href="/account">
        <div className="flex text-center items-center gap-2 hover:cursor-pointer rounded-3xl hover:bg-[#5565a8] px-12 transition-all">
          <AccountCircleIcon className="text-white" />
          <p className="text-3xl my-2 text-white">Account</p>
        </div>
      </Link>
    </div>
  );
};

export default SideBar;
