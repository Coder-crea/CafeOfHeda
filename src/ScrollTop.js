import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; // Убедитесь, что вы установили react-icons
import "./scrollStyle.css";
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 600) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          style={styles.scrollButton}
          className="bt"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

const styles = {
  scrollButton: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    backgroundColor: "#73dff0",
    color: "#fff",
    border: "none",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
    transition: "all 0.3s ease",
    zIndex: "3",
  },
};

export default ScrollToTop;
