import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import WhatsAppButton from "../components/common/WhatsAppButton";
import ScrollTop from "../components/common/ScrollTop";

const MainLayout = () => {
  return (
    <>
      <Navbar />

      <main className="pt-8">
        <Outlet />
      </main>

      <Footer />

      {/* Floating Buttons */}
      <ScrollTop />
      <WhatsAppButton />
    </>
  );
};

export default MainLayout;