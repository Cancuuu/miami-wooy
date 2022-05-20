export default function Home() {
  return (
    <div className="container mx-auto">
      <nav className="py-8 px-4 flex justify-between">
        <h1 className="font-fira text-4xl text-white">Wooy</h1>
        <div className="">
          <button className="p-2 w-full text-black bg-slate-200 rounded-md">
            Connect Wallet
          </button>
        </div>
      </nav>
      <main className="py-8 flex w-full">
        <div className="flex flex-col justify-center">
          <p className="text-3xl my-2 p-2 text-white">Pools</p>
          <p className="text-3xl my-2 p-2 text-white">NFT's</p>
          <p className="text-3xl my-2 p-2 text-white">Account</p>
        </div>
        <div className="flex justify-center items-center">
          <h1>Hello world</h1>
        </div>
      </main>
    </div>
  );
}
