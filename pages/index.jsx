import { ConnectButton } from "@rainbow-me/rainbowkit";
import PoolCard from "../components/PoolCard";
import Link from "next/link";

//---icons
import WavesIcon from "@mui/icons-material/Waves";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function Home() {
  return (
    <div className="container mx-auto min-h-screen">
      <nav className="py-8 px-4 flex justify-between">
        <h1 className="font-fira text-4xl text-white">Wooy</h1>
        <ConnectButton />
      </nav>
      <main className="flex mt-16 h-full">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col justify-center gap-8">
            <Link href="/">
              <div className="flex items-center gap-2 hover:cursor-pointer rounded-3xl hover:bg-[#5565a8] px-12 transition-all">
                <WavesIcon className="text-white" />
                <p className="text-3xl my-2 text-white">Pools</p>
              </div>
            </Link>
            <Link href="/">
              <div className="flex items-center gap-2 hover:cursor-pointer rounded-3xl hover:bg-[#5565a8] px-12 transition-all">
                <ColorLensIcon className="text-white" />
                <p className="text-3xl my-2 text-white">NFTs</p>
              </div>
            </Link>
            <Link href="/">
              <div className="flex items-center gap-2 hover:cursor-pointer rounded-3xl hover:bg-[#5565a8] px-12 transition-all">
                <AccountCircleIcon className="text-white" />
                <p className="text-3xl my-2 text-white">Account</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="px-12">
          <h1 className="text-4xl text-white">Active Pools</h1>
          <div className="w-full grid grid-cols-3 gap-7 mt-16">
            <PoolCard />
            <PoolCard />
            <PoolCard />
          </div>
        </div>
      </main>
    </div>
  );
}
