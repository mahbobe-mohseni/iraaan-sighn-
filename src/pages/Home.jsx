import Navbar from "../components/Navbar";
import Header from "../components/Header";
import ImageComponent from "../components/ImageComponent";
import Pishkhan from "../components/Pishkhan";
import FeatureCardWrapper from "../components/FeatureCardWrapper";
import ProductServicesSlider from "../components/ProductServicesSlider";
import ContactForm from "../components/ContactForm";
  import HamburgerMenu from "../components/HamburgerMenu";

const Home = () => {
  return (
    <>
        {/* <div className="md:hidden"> */}
      <HamburgerMenu />
    {/* </div> */}
      <Navbar />
      <Header />
      <ImageComponent />
      <Pishkhan />
      <FeatureCardWrapper />
      <ProductServicesSlider/>
      <ContactForm/>
    </>
  );
};

export default Home;
 
