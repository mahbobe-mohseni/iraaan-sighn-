import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* Left Section */}
          <div className="flex flex-col items-center md:items-center  mb-6 md:mb-0">
          <div className="flex flex-col items-center md:items-end">
            <div className="mb-4 text-center md:text-right">
              <p className="font-bold flex items-center justify-center md:justify-end">
                <FaPhoneAlt className="ml-2" /> شماره تماس
              </p>
              <p>+98 123 456 789</p>
              <p>شنبه تا چهارشنبه ساعت 8:00 الی 17:00</p>
            </div>
            <div className="mb-4 text-center md:text-right">
              <p className="font-bold flex items-center justify-center md:justify-end">
                <FaEnvelope className="ml-2" /> ایمیل
              </p>
              <p>info@iran-sign.ir</p>
            </div>
            <div className="mb-4 text-center md:text-right">
              <p className="font-bold flex items-center justify-center md:justify-end">
                <FaMapMarkerAlt className="ml-2" /> آدرس
              </p>
              <p>تهران، خیابان آزادی، بین خیابان نواب و اسکندری، پلاک 170، واحد 34</p>
            </div>
          </div>
          <div className='grid grid-cols-2 gap-2 '>
          <ul className="text-center md:text-left space-y-1">
            <p className="text-center md:text-left font-bold mb-2">با ایران‌سلیمان</p>
              <li>تماس با ما</li>
              <li>قوانین و مقررات</li>
              <li>پرسش متداول</li>
              <li>سوالات متداول</li>
            </ul>
          </div>
          
            <div className="flex space-x-4 mt-4">
              <FaInstagram className="text-white" />
              <FaTwitter className="text-white" />
              <FaFacebook className="text-white" />
            </div>
          </div>

          {/* Right Section */}
         



          <div className="bg-white p-4 rounded-full mb-4">
              <div className="grid grid-cols-2 gap-2">
                <div className="w-8 h-8 bg-blue-600"></div>
                <div className="w-8 h-8 bg-blue-600"></div>
                <div className="w-8 h-8 bg-blue-600"></div>
                <div className="w-8 h-8 bg-blue-600"></div>
              </div>
            </div>
        </div>
        <div className="text-center mt-6">
          <p>تمام حقوق مادی و معنوی این سایت متعلق به ایران‌سلیمان می‌باشد</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;