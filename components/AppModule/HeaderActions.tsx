import React, { useState } from "react";
import CustomSelect, { Option } from "../CustomSelect";
import { ReactSVG } from "react-svg";

import ETHLogo from "assets/icons/mdi_ethereum.svg";
import Link from "next/link";

const HeaderActions = () => {
  const options: Option[] = [
    {
      label: "Etherum",
      value: "eth",
      icon: <ReactSVG src={ETHLogo.src} className="react-svg icon sm" />,
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
