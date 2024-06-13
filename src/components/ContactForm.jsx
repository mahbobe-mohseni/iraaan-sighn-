import React, { useState } from 'react';
import { LowerBackGround } from "../images";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    noContact: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div
    style={{ backgroundImage: `url(${LowerBackGround})` }}
    className="flex flex-col items-center justify-center min-h-screen bg-white text-black">
      <h1 className="text-2xl mb-4 text-black">چطور مسیر برای شما هموارتر می‌کنیم؟</h1>
      <p className="text-center mb-8 text-mygray">
        برگزاری جلسه با شما توضیح کامل از خدمات و سرویس‌های این مجموعه به شما ارائه می‌دهیم. سپس نیازمندی‌های شما را بررسی کرده و بهترین راه‌حل را به شما پیشنهاد می‌دهیم.
      </p>
      <form onSubmit={handleSubmit} className=" bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="mb-4">
        <p className='mb-3 text-mygray'>در صورت تمایل، اطلاعات خود را وارد کنید تا با شما تماس بگیریم.</p>
          <label className="block mb-2 text-mygray" htmlFor="name">نام و نام خانوادگی</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 rounded bg-slate-300 text-white"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-mygray" htmlFor="phone">شماره تماس</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 rounded bg-slate-300 text-white"
          />
        </div>
      
        <div className="mb-4 flex items-center bg-mygray p-2">
          <input
            type="checkbox"
            id="noContact"
            name="noContact"
            checked={formData.noContact}
            onChange={handleChange}
          />
          <label htmlFor="noContact">  من ربات نیستم  </label>
        </div>
        <button type="submit" className=" w-32 p-2 bg-blue-600 rounded text-white">ثبت اطلاعات</button>
      </form>
    </div>
  );
};

export default ContactForm;