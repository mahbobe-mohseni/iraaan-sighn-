import React from 'react'

const Hardware = () => {
  return (
    <>
      <div className="parent-tag bg-white px-24 mt-[250px]">
        <div className="first-child flex gap-12 items-center justify-center container m-auto">
          <img src={pishkhan} alt="" />
          
          <div className="text-box ">
            <div className="title text-[32px] w-[544px] h-12  font-bold ml-14  text-16 md:text-3xl"> 
            محصولات سخت افزاری            </div>
            <div className=" text-mygray mt-3 text-sm md:text-18  ">
            محصولات سخت افزاری این شرکت شامل کارت هوشمند، ماژول امنیتی سخت‌افزاری، توکن می‌باشد، لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و...
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hardware
