import React from "react";
import {
  trust,
  vezarat,
  sanat,
  haf,
  hasin,
  farabom,
  rahsa,
  fanavaran,
} from "../images";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Partners = () => {
  const logos = [trust, vezarat, sanat, haf, hasin, farabom, rahsa, fanavaran];
  return (
    <section className="flex items-center justify-center z-10 ">
      <div className="container bg-white rounded-xl p-6 shadow-lg ">
        <h2 className="text-center text-2xl font-bold mb-6">همکاران ما</h2>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          grabCursor={true}
          breakpoints={{
            320: {
              // mobile
              slidesPerView: 2,
              spaceBetween: 10,
            },
            640: {
              // tablety
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              /// desktop
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1024: {
              // big desktop
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
        >
          {logos.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="w-[114px] h-[114px] flex items-center justify-center">
                <img src={slide} alt={`Partner ${index}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Partners;
