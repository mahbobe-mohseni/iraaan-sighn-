import React from "react";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-8 px-32">
      <div className="flex items-center justify-between lg:flex-row flex-col lg:gap-0 gap-6">
        <div className="contact-box">
          <div className="flex gap-2 mb-6">
            <FaPhoneAlt /> <span>شماره تماس</span>
          </div>
          <p className="text-12">+98 123 456 789</p>
          <p className="text-12">شنبه تا چهارشنبه ساعت 8:00 الی 17:00</p>
          <div className="flex gap-2 my-6">
            <FaMapMarkerAlt /> <span>آدرس</span>
          </div>
          <p className="text-12">
            تهران، خیابان آزادی، بین خیابان نواب و اسکندری، پلاک 170، واحد 34
          </p>
        </div>
        <div className="links-box">
          <p className="font-bold mb-6">با ایران ساین</p>
          <div className="text-12 flex flex-col gap-4">
            <Link to="/">تماس با ما</Link>
            <Link to="/">قوانین و مقررات</Link>
            <Link to="/">پرسش متداول</Link>
            <Link to="/">سوالات متداول</Link>
          </div>
        </div>
        <div className="license-box">
          <div className="grid grid-cols-2 gap-2">
            <div className="w-16 h-16 bg-white rounded-lg"></div>
            <div className="w-16 h-16 bg-white rounded-lg"></div>
            <div className="w-16 h-16 bg-white rounded-lg"></div>
            <div className="w-16 h-16 bg-white rounded-lg"></div>
          </div>
        </div>
      </div>
      <div className="social-box flex items-center justify-center my-6">
        <div className="flex gap-6 w-max">
          <FaInstagram className="text-white" />
          <FaTwitter className="text-white" />
          <FaLinkedin className="text-white" />
        </div>
      </div>
      <div className="copyright-box text-center text-12">
        <p>تمام حقوق مادی و معنوی این سایت متعلق به ایران ساین می‌باشد</p>
      </div>
    </footer>
  );
};

export default Footer;
