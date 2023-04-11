import icon from "assets/img/paymaster-logo.svg";
import logo from "assets/img/paymaster-logo.svg";

import { Web3OnboardProvider } from "@web3-onboard/react";
import { init } from "@web3-onboard/react";
import injectedModule from "@web3-onboard/injected-wallets";
import walletConnectModule from "@web3-onboard/walletconnect";
import coinbaseModule from "@web3-onboard/coinbase";
import argentModule from "@web3-onboard/argent";
import { PropsWithChildren } from "react";

const argent = argentModule(undefined);
const injected = injectedModule();
const coinbase = coinbaseModule();
const walletConnect = walletConnectModule({
  projectId: "41a6cd3849f68c343764b1d875029c86",
  version: 2,
});

const wallets = [argent, injected, coinbase, walletConnect];

const chains = [
  {
    id: "0x118",
    token: "ETH",
    label: "zkSync Era goerli",
    rpcUrl: "https://testnet.era.zksync.dev",
  },
];

const options = init({
  connect: {
    autoConnectLastWallet: true,
    showSidebar: false,
  },
  wallets,
  chains,
  appMetadata: {
    name: "Paymasters.io",
    icon: "/favicon-32x32.png",
    logo: "/favicon-32x32.png",
    description:
      "EIP4337 paymaster management solution; enabling a web3 economy powered by gasless applications",
    recommendedInjectedWallets: [
      { name: "argent", url: "https://argent.xyz" },
      { name: "Coinbase", url: "https://wallet.coinbase.com/" },
      { name: "MetaMask", url: "https://metamask.io" },
    ],
  },
  accountCenter: {
    desktop: {
      position: "topRight",
      enabled: false,
    },
    mobile: {
      position: "topRight",
      enabled: false,
    },
  },
  theme: "dark",
});

const WalletConnectProvider = ({ children }: PropsWithChildren) => {
  return (
    <Web3OnboardProvider web3Onboard={options}>{children}</Web3OnboardProvider>
  );
};


export default WalletConnectProvider;