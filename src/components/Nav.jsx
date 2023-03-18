import Link from "next/link";
import React, {useEffect, useState} from "react";
import { appName } from "@/const";
import { AiOutlineMenu, AiOutlineCloseCircle} from "react-icons/ai";
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Nav = () => {
  const [nav,setNav] = useState(false);
  const [navBorder, setNavBorder] = useState(false);

  const navHandler = () =>{
    setNav(!nav)
  }

  useEffect(()=>{
    const changeNaveBorder = () =>{
      if(window.scrollY >=90){
        setNavBorder(true)
      }else{
          setNavBorder(false)
      }
    }
    window.addEventListener('scroll',changeNaveBorder);
  },[])
  return (
    <>
      <div className="fixed w-full ease-in duration-300 z-50">
        <div className={navBorder? "w-full mr-auto flex justify-between items-center bg-black ease-in duration-300 text-white":
         "max-w-full mr-auto flex justify-between items-center text-white"}>
          <div>
            <Link href="/">
              <h2 className="text-2xl z-[2] font-bold pl-5">{appName}</h2>
            </Link>
          </div>
          <div className="hidden sm:flex">
            <ul className="flex">
              <li className="p-4">
                <Link href="/">Feature</Link>
              </li>
              <li className="p-4">
                <Link href="/">Pricing</Link>
              </li>
              <li className="p-4">
                <Link href="/">NFT Market</Link>
              </li>
              <li className="p-4">
                <Link href="/">Partner</Link>
              </li>
            </ul>
            <div className="px-6 m-2 rounded-md border-0 text-black mr-3 hover:shadow-gray-50 ease-in duration-300">
            <ConnectButton/>
            </div>
            {/* <button className="px-6 m-2 rounded-md bg-orange-400 border-0 text-black mr-3 hover:shadow-gray-50 ease-in duration-300">Connect wallet</button>  */}
          </div>
          <div className="sm:hidden block z-10 m-5" onClick={navHandler}>
            {nav?<AiOutlineCloseCircle size={30}/>:<AiOutlineMenu size={30} /> }
          </div>
          {/* Mobile Menu view  */}

          <div className={nav?"sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bannerBg   bg-fixed bg-center bg-cover ease-in duration-300": "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bannerBg ease-in duration-300 -z-30"}>
            <ul className="justify-start items-center text">
              <li className="p-4 text-4xl hover:text-gray-500">
                <Link href="/">Featuresad</Link> 
              </li>
              <li className="p-4 text-4xl hover:text-gray-500">
                <Link href="/">Pricing</Link>
              </li>
              <li className="p-4 text-4xl hover:text-gray-500">
                <Link href="/">NFT Market</Link>
              </li>
              <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="#partner">Partner</Link>
              </li>
            </ul>

          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
