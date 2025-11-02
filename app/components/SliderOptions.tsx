import Image from "next/image";
import React from "react";
interface Props {
  icon: string;
  title: string;
  description: string;
}
const SliderOptions = ({ icon, title, description }: Props) => {
  return (
    <div className="w-[282px] h-[226px] bg-white rounded-lg  flex flex-col items-center justify-center p-4 border border-[#E3E3E3]">
      <Image
        className="mt-2 mb-4"
        src={icon}
        alt={title}
        width={56}
        height={56}
      />
      <h3 className="text-[12px] font-bold mb-2"> {title} </h3>
      <p className="text-[#303030] text-[12px] text-center"> {description} </p>
    </div>
  );
};

export default SliderOptions;
