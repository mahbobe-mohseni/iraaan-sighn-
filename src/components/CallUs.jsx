import React from 'react'
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import { mail,tell,loc} from '../images'
import  { useState } from "react";
 
 

const CallUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    noContact: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };
  return (
    <>
       <Navbar />
       <Header />
  
    <div className=' grid  grid-cols-2 gap-4 mr-28'>
     <div className=" col-span-1 mt-32">
     <div className='text-18 text-myblue' >
        <h4>تماس با ما</h4>
        <h1 className="text-2xl mb-4 text-black">
        از طریق راه‌های ارتباطی زیر با ما در ارتباط باشید. 
      </h1>
      <p className="  mb-8 text-mygray">
      در صورتی که پاسخ به سوال خود را در قسمت پرسش‌های متداول یافت نکردید توسط یکی از راه‌های زیر یا تکمیل فرم روبرو با ما ارتباط بگیرید.      </p>
        
       </div>
          
      <div className=' inline-table'>
      <img src={tell} className='w-20 h-20' alt="" />
           <span className=' text-14'>شماره تماس</span>
          <p className=" text-2xl">+98 123 456 789</p>
      </div>
  <div>
  <img src={loc} alt="" />  
             <span className=' text-14'>آدرس ایمیل</span>
        
          <p className="text-2xl"> info@iran-sign.ir</p>
  </div>
       
       <div>
       <img src={loc} alt="" /> <span className=' text-14'>آدرس دفتر</span>
      
      <p className="text-2xl mb-9">
        تهران، خیابان آزادی، بین خیابان نواب و اسکندری، پلاک 170، واحد 34
      </p>
       </div>

        </div>
        <div class="col-span-1 mt-28 mr-28"> 

        <form
        onSubmit={handleSubmit}
        className=" bg-white p-6 rounded-3xl shadow-2xl w-full max-w-md"
      >
        <div className="mb-6">
          <p className="mb-3 text-black">
            در صورت تمایل، اطلاعات خود را وارد کنید تا با شما تماس بگیریم.
          </p>
          <label className="block mb-2 text-mygray" htmlFor="name">
            نام و نام خانوادگی
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-2 rounded-lg bg-white border border-complementary-100 py-3"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-mygray" htmlFor="phone">
            شماره تماس
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-2 rounded-lg bg-white border border-complementary-100 py-3"
          />
        </div>

        <div className="mb-4 flex items-center bg-complementary-50 p-4 rounded-lg">
          <input
            className="ml-2"
            type="checkbox"
            id="noContact"
            name="noContact"
            checked={formData.noContact}
            onChange={handleChange}
          />
          <label htmlFor="noContact"> من ربات نیستم </label>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className=" w-32 p-2 bg-blue-600 rounded-lg text-white"
          >
            ثبت اطلاعات
          </button>
        </div>
      </form>

        </div>
        </div>

<Footer/>
      
    </>
  )
}

export default CallUs


// import React from 'react';

// const Card = () => {
//   return (
//     <div className="max-w-xs mx-auto bg-white shadow-md rounded-lg overflow-hidden">
//       <img className="w-full" src="https://via.placeholder.com/300" alt="Placeholder" />
//       <div className="p-4">
//         <h2 className="text-xl font-bold text-gray-800">Title</h2>
//         <p className="mt-2 text-sm text-gray-600">Description</p>
//       </div>
//       <div className="flex justify-between items-center p-4 bg-gray-100">
//         <p className="text-sm font-medium text-gray-700">$19.99</p>
//         <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">Add to Cart</button>
//       </div>
//     </div>
//   );
// };

// export default Card;