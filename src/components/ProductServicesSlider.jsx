import React from "react";
// import { Swiper, SwiperSlide } from 'swiper/react';
import { p1, p2, p3, p4 } from "../images";
// import 'swiper/swiper-bundle.min.css';
// import 'swiper/swiper.min.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const ProductServicesSlider = () => {
  const services = [
    {
      icon: p1,
      title: "   محصولات سخت افزاری  ",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
      buttonText: "مشاهده بیشتر",
    },
    {
      icon: p2,
      title: "تولید و توسعه نرم‌افزار",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
      buttonText: "مشاهده بیشتر",
    },
    {
      icon: p3,
      title: "ابزارکار توسعه نرم‌افزار",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
      buttonText: "مشاهده بیشتر",
    },
    {
      icon: p4,
      title: "خدمات و سرویس‌ها",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
      buttonText: "مشاهده بیشتر",
    },
    {
      icon: p4,
      title: "خدمات و سرویس‌ها",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
      buttonText: "مشاهده بیشتر",
    },
    {
      icon: p4,
      title: "خدمات و سرویس‌ها",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
      buttonText: "مشاهده بیشتر",
    },
  ];

  return (
    <>
      <h2 className="text-center text-2xl mb-8 mt-6">
        محصولات و سرویس‌های ایران‌ساین
      </h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        grabCursor={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          992: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
      >
        {services.map((service, index) => (
          <SwiperSlide key={index} className="">
            <div className="p-4 bg-white rounded-2xl border shadow-lg  my-6 ">
              <div className="flex items-center justify-start mb-4">
                <span className="text-4xl">
                  <img src={service.icon} className="w-20 h-20" alt="" />
                </span>
              </div>
              <h3 className=" text-20 font-semibold mb-2 text-black">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 ">{service.description}</p>
              <div className="text-left">
                <button className="bg-blue-500 text-white py-2 px-4 rounded">
                  {service.buttonText}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ProductServicesSlider;
