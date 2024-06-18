import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import ProductPish from "../components/ProductPish";
import MainSelectBox from "../components/MainSelectBox";
 import ContactForm from "../components/ContactForm";
 import Footer from "../components/Footer";

const Products = () => {
  return (
    <>
        <Navbar />
        <Header />
<ProductPish/>
<MainSelectBox/>
    <ContactForm/>
<Footer/>
  </>
  );
};

export default Products;
