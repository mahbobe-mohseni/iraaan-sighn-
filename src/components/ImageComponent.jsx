import React from "react";
import { BannerPicture } from "../images";
import Partners from "./Partners";

const ImageComponent = () => {
  return (
    <section
      style={{ backgroundImage: `url(${BannerPicture})` }}
      className="relative w-full bg-cover bg-center h-[416px] pt-[94px]" 
    > 
      <div className="w-[607px] break-words mr-[200px] sm:hideden">
        <p className="font-bold text-white text-4xl leading-[54px] mb-2 hidden sm:block">
          از هرکجا به آسانی اسناد را به اشتراک بگذارید تا امضا شوند...
        </p>

        <button className=" bg-white w-max py-2 px-6 text-myblue font-bold rounded text-14">
          ورود به پنل مدیریت اسناد
        </button>
      </div>
      <div className="absolute -bottom-[168px] m-auto w-full"> 
        <Partners />
      </div>
    </section>
  );
};

export default ImageComponent;
