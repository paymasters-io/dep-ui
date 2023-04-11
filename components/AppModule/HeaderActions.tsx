import React, { useState } from "react";
import CustomSelect, { Option } from "../CustomSelect";
import { ReactSVG } from "react-svg";

import ETHLogo from "assets/icons/mdi_ethereum.svg";
import zkLogo from "assets/icons/zkSynk.png";
import logoIMG from "assets/img/paymaster-logo.svg";

import Link from "next/link";
import Image from "next/image";
// import useApiCall from "hooks/useApiCalls";
import useApiCall from "hooks/useApiCalls";

const HeaderActions = () => {
  const options: Option[] = [
    {
      label: "zkSync",
      value: "zk",
      icon: <Image src={zkLogo} width={24} height={24} alt="logo" />,
      // icon: <ReactSVG src={ETHLogo.src} className="react-svg icon sm" />,
    },
    // {
    //   label: "Bitcoin",
    //   value: "btc",
    // },
  ];

  const { wallet, signIn, signOut, getAuthSession } = useApiCall();

  return (
    <nav className="header-actions">
      <ul>
        <li>
          <CustomSelect options={options} onSelect={() => {}} />
        </li>

        {wallet ? (
          <>
            <li>
              <Link href={"/dashboard"}>
                <button className="cta alt">Dashboard</button>
              </Link>
            </li>
            <li>
              <Link href={"/create-paymaster"}>
                <button className="cta">
                  Create{" "}
                  <span className="hidden md:inline-block">Paymaster</span>
                </button>
              </Link>
            </li>
          </>
        ) : (
          <li>
            <button
              onClick={signIn}
              className="cta alt grad !bg-paymasters-dark/20"
            >
              <Image
                src={logoIMG}
                width={28}
                height={28}
                alt="logo"
                className="icon"
              />
              <span className="text">Smart Connect</span>
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default HeaderActions;
