import Image from "next/image";
import React from "react";
import NetWork from "../../public/images/network.png";
const Content = () => {
  return (
    <div className="h-['50%'] text-white mt-36">
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 ">
        <div className="flex flex-col ">
          <h2 className="text-5xl lg:text-6xl lg:ml-32 lg:mt-12 ml-16">About Gamer</h2>
          <h2 className="text-md lg:text-xl lg:ml-32 lg:mt-12 mr-8  mt-3 ml-16 text-justify">
            Launched in May 2021, Gammer is a community driven decentralized
            autonomous organization (DAO). Boasting a large and experienced
            development team, hundreds of community volunteers, and a vast
            fanbase, Gammer has become a leading Web 3.0 solutions provider. We
            are a people's DAO that has been with our community from the very
            start.
            <span className="text-orange-400 text-sm ml-2">more... </span>
          </h2>
        </div>
        <div className="flex justify-center p-20 lg:p-0 -z-0">
          <Image
            alt="HUNTER"
            src={NetWork}
            width={400}
            height={400}
            sizes="100vw"
            className="transform origin-center hover:rotate-180 duration-700"
          />
        </div>
      </div>
    </div>
  );
};

export default Content;
