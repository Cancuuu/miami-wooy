import React from "react";

import PoolCard from "./Card";
import Link from "next/link";

//---icons
import WavesIcon from "@mui/icons-material/Waves";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SideBar from "./SideBar";
import Navbar from "./Navbar";

const Layout = (props) => {
  return (
    <div className="container mx-auto min-h-screen">
      <Navbar />
      <main className="flex mt-16 h-full">
        <SideBar />
        {props.children}
      </main>
    </div>
  );
};

export default Layout;
