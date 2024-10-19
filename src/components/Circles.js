// next image
import Image from "next/image";

import circlesImages from "@/assets/images/circles.png";
 
const Circles = () => {
  return (
    <div className="fixed left-0 top-0  w-[200px] xl:w-[300px] -z-10 animate-pulse duration-75 -rotate-180">
      <Image
        src={circlesImages}
        width={260}
        height={200}
        className="w-full h-full"
        alt=""
      ></Image>
    </div>
  );
};

export default Circles;
