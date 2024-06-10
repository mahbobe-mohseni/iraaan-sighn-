import React from "react";
import { pishkhan } from "../images";
const Pishkhan = () => {
  return (
    <>
      <div className="parent-tag bg-white px-24 mt-[250px]">
        <div className="first-child flex gap-12 items-center justify-center container m-auto">
          <img src={pishkhan} alt="" />
          
          <div className="text-box ">
            <div className="title text-[32px] w-[544px] h-12 text-3xl font-bold ml-14 "> 
              ایران‌ساین، سامانه جامع امضای دیجیتال
            </div>
            <div className=" text-mygray mt-3 text-18 ">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              مطالعه بیشتر...
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pishkhan;
