import React, { useState } from "react";
import CustomSelect, { Option } from "../CustomSelect";
import { ReactSVG } from "react-svg";

import ETHLogo from "assets/icons/mdi_ethereum.svg";
import zkLogo from "assets/icons/zkSynk.png";
import Link from "next/link";
import Image from "next/image";

const HeaderActions = () => {
  const options: Option[] = [
    {
      label: "zkSynk",
      value: "zk",
      icon: <Image src={zkLogo} width={24} height={24} alt="logo" />,
      // icon: <ReactSVG src={ETHLogo.src} className="react-svg icon sm" />,
    },
    // {
    //   label: "Bitcoin",
    //   value: "btc",
    // },
  ];
  return (
    <div className="header-actions">
      <CustomSelect options={options} onSelect={() => {}} />
      <Link href={"/create-paymaster"}>
        <button className="cta">
          Create <span className="hidden md:inline-block">Paymaster</span>
        </button>
      </Link>
    </div>
  );
};

export default HeaderActions;
