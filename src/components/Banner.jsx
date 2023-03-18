import { AiOutlineWeibo, AiOutlineAlipay, AiOutlineGitlab} from "react-icons/ai";
import { ConnectButton } from '@rainbow-me/rainbowkit';


const Banner = ({Title, subTitleOne,subTitleTwo,subTitleThree, explore, create}) => {
  return (
      <div className="flex flex-col justify-center items-center lg:h-screen h-['50%'] sm:h-['60%'] ">
        {/* <div className="absolute top-0 left-0 right-0 bottom-0 bg-slate-500/70 z[-4]"/> */}
        <h1 className="text-5xl md:text-6xl lg:text-8xl text-white mb-4 ease-in duration-700 text-center mt-32">{Title}</h1>

        <div className="lg:w-1/2 ">
            <h4 className="text-2xl lg:text-4xl md:text-2xl sm:text-2xl text-white text-center m-2">{subTitleOne}</h4>
            <h4 className="text-2xl lg:text-4xl md:text-2xl sm:text-2xl text-white text-center m-2">{subTitleTwo}</h4>
            <h4 className="text-2xl lg:text-4xl md:text-2xl sm:text-2xl text-white text-center m-2">{subTitleThree}</h4>
        </div>
        <div className="block md:hidden lg:hidden mt-10"><ConnectButton/> </div>

        <div className="flex justify-center items-center mt-20 text-white">
          <AiOutlineWeibo size={130} className="hidden sm:block"/>
          <AiOutlineGitlab size={200} className="mr-36 ml-36"/>
          <AiOutlineAlipay size={130} className="hidden sm:block"/>
         
        </div>

        <div className="flex mt-12">
        <button className="px-8 py-3 border cursor-pointer text-white mr-3 hover:bg-indigo-50 hover:text-black ease-in duration-300">{explore}</button> 
        <button className="px-9 py-3 border text-white ml-3 hover:bg-indigo-50 hover:text-black ease-in duration-300">{create}</button>
        </div>


      </div>
  );
};

export default Banner;
