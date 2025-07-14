import React from "react";
import { useEffect, useState } from "react";
import BannerBlock from "./Baner";
import "./css/home.css";
import CommentSection from "./CommentSection";
import Award from "./Award";
import MenuScroll from "./MenuScreens/MenuScroll";
import Footer from "./Footer";
import Location from "./Location";
import Bio from "./Bio";

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 993);
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 993);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  // сначала меню, потом Award, потом комменты
  return (
    <div>
      <BannerBlock />
      <MenuScroll />
      <Award />
      {/* <Location /> */}
      <CommentSection />
      <Bio />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
