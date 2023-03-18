import React from "react";
import CoinOne from "../../public/images/coindesk.93c81022.png";
import CoinTwo from "../../public/images/coin.7625c92e.png";
import CoinThree from "../../public/images/bitcoin.90686d5f.png";
import CoinFour from "../../public/images/crypto.7fd39bf4.png";
import CoinFive from "../../public/images/nulltx.bb64765b.png";
import CoinSix from "../../public/images/bscnes.6ee1f18e.png";

import Image from "next/image";

const Partner = () => {
  return (
    <div id="partner" className="text-white mt-14 lg:mt-40 " >
      <div className="">
        <h2  className="text-5xl lg:text-6xl mb-8 flex flex-col justify-center items-center">
          Our New Partner
        </h2>
        <div className="grid lg:grid-cols-3 lg:mt-14">
          <div className="flex justify-center items-center mt-2">
            <Image src={CoinOne} alt="Coin" width={250} height={60} className="hover:opacity-50 ease-in duration-300" />
          </div>
          <div className="flex justify-center items-center mt-10">
            <Image src={CoinTwo} alt="Coin" width={250} height={60} className="hover:opacity-50 ease-in duration-300" />
          </div>
          <div className="flex justify-center items-center mt-10">
            <Image src={CoinThree} alt="Coin" width={250} height={60} className="hover:opacity-50 ease-in duration-300" />
          </div>
        </div>
        <div className="grid lg:grid-cols-3 lg:mt-12">
          <div className="flex justify-center items-center mt-10">
            <Image src={CoinFour} alt="Coin" width={250} height={60} className="hover:opacity-50 ease-in duration-300"/>
          </div>
          <div className="flex justify-center items-center mt-10">
            <Image src={CoinFive} alt="Coin" width={160} height={60} className="hover:opacity-50 ease-in duration-300"/>
          </div>
          <div className="flex justify-center items-center mt-10">
            <Image src={CoinSix} alt="Coin" width={120} height={60} className="hover:opacity-50 ease-in duration-300"/>
          </div>
        </div>
      </div>
      <div className="star"></div>

    </div>
  );
};

export default Partner;
