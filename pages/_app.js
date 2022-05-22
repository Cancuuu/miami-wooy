import "@rainbow-me/rainbowkit/styles.css";

import "../styles/globals.css";

import {
  apiProvider,
  configureChains,
  getDefaultWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";

import { chain, createClient, WagmiProvider } from "wagmi";

const celoChain = {
  id: 42220,
  name: "Celo",
  nativeCurrency: {
    decimals: 18,
    name: "Celo",
    symbol: "CELO",
  },
  rpcUrls: {
    default: "https://forno.celo.org",
  },
  blockExplorers: {
    default: { name: "Celo Explorer", url: "https://explorer.celo.org" },
  },
  testnet: false,
};

const alfajoresCeloChain = {
  id: 44787,
  name: "Celo (Alfajores Testnet)",
  nativeCurrency: {
    decimals: 18,
    name: "Celo",
    symbol: "CELO",
  },
  rpcUrls: {
    default: "https://alfajores-forno.celo-testnet.org",
  },
  blockExplorers: {
    default: {
      name: "Alfajores Explorer",
      url: "https://alfajores-blockscout.celo-testnet.org",
    },
  },
  testnet: true,
};

const { chains, provider } = configureChains(
  [celoChain, alfajoresCeloChain],
  [apiProvider.alchemy(process.env.ALCHEMY_ID), apiProvider.fallback()]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function MyApp({ Component, pageProps }) {
  return (
    <WagmiProvider client={wagmiClient}>
      <RainbowKitProvider showRecentTransactions={true} chains={chains}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiProvider>
  );
}

export default MyApp;
