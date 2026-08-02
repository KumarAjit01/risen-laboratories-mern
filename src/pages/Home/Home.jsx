import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/home/Hero";
import AboutSection from "../../components/home/AboutSection";
import WhyChoose from "../../components/home/WhyChoose";
import ProductCategories from "../../components/home/ProductCategories";
import FeaturedProducts from "../../components/home/FeaturedProducts";
import Manufacturing from "../../components/home/Manufacturing";
import QualityStats from "../../components/home/QualityStats";
import Testimonials from "../../components/home/Testimonials";
import BusinessCTA from "../../components/home/BusinessCTA";
import Footer from "../../components/layout/Footer";
import WhatsAppButton from "../../components/common/WhatsAppButton";
import ScrollTop from "../../components/common/ScrollTop";

const Home = () => {
  return (
    <>
     
       <Hero />
      <AboutSection />
      <WhyChoose />
      <ProductCategories />
      <FeaturedProducts />
      <Manufacturing />
      <QualityStats />
      <Testimonials />
      <BusinessCTA />
    </>
  );
};

export default Home;