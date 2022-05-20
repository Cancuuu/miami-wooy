import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Navbar = () => {
  return (
    <nav className="py-8 px-4 flex justify-between">
      <h1 className="font-fira text-4xl text-white">Wooy</h1>
      <ConnectButton />
    </nav>
  );
};

export default Navbar;
