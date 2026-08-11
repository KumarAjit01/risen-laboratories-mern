import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layout/MainLayout";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Products from "./pages/Products/Products";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";
import Gallery from "./pages/Gallery/Gallery";
import Career from "./pages/Career/Career";

import ScrollToTop from "./components/common/ScrollToTop";

function App() {
  return (
    <BrowserRouter>

      {/* Route change par page top par jayega */}
      <ScrollToTop />

      <Routes>

        <Route element={<MainLayout />}>

          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/products" element={<Products />} />

          <Route path="/services" element={<Services />} />

          <Route path="/gallery" element={<Gallery />} />

          <Route path="/career" element={<Career />} />

          <Route path="/contact" element={<Contact />} />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;