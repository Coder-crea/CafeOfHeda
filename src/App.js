import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./screens/Home";
import Menu from "./screens/Menu";
import About from "./screens/About";
import Contact from "./screens/Contact";
import ScrollToTop from "./ScrollTop";
// import BreakfastPage from "./screens/MenuScreens/PagesFood/BreakfastPage";
// import Salads from "./screens/MenuScreens/PagesFood/Salads";
// import Soap from "./screens/MenuScreens/PagesFood/Soup";
// import NationFood from "./screens/MenuScreens/PagesFood/NationFood";
// import HotFood from "./screens/MenuScreens/PagesFood/HotFood";
// import Garnirs from "./screens/MenuScreens/PagesFood/Garnirs";
// import Bottles from "./screens/MenuScreens/PagesFood/Bottles";
// import OtherOptions from "./screens/MenuScreens/PagesFood/OtherOptions";
// import Deserts from "./screens/MenuScreens/PagesFood/Deserts";
import Food from "./screens/MenuScreens/PagesFood/Food";
import Footer from "./screens/Footer";
import ContactForm from "./screens/Contact";
import "./App.css";

const App = () => {
  return (
    <div>
      <div className="container">
        <Navbar />
        <ScrollToTop />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        {/* <Route path="/menu/завтраки" element={<BreakfastPage />} />
        <Route path="/menu/салаты" element={<Salads />} />
        <Route path="/menu/супы" element={<Soap />} />
        <Route path="/menu/национальнаякухня" element={<NationFood />} />
        <Route path="/menu/десерты" element={<Deserts />} />
        <Route path="/menu/вторыеблюда" element={<HotFood />} />
        <Route path="/menu/гарниры" element={<Garnirs />} />
        <Route path="/menu/напитки" element={<Bottles />} />
        <Route path="/menu/дополнительно" element={<OtherOptions />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/menu/:category" element={<Food />} />

        {/* <Route path="/menu/завтраки" element={<BreakFast />} /> */}
        {/* <Route path="/menu/салаты" element={<Salads />} />
        <Route path="/menu/основное" element={<BaseHotFood />} /> */}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
