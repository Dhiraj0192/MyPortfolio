// next image

import Image from "next/image";
import topLeftImg from "@/assets/images/top-left-img.png";
import Spline from '@splinetool/react-spline/next';

const TopLeftImg = () => {
  return (
    <>
      <div className="fixed left-0 top-0  w-[400px] xl:w-[300px] opacity-80 bg-transparent -z-10">
        <Image src={topLeftImg} width={200} height={300} alt="" className="text-gray-900"></Image>
        
      </div>
    </>
  );
};

export default TopLeftImg;
