import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Home.css"; // Optional: For custom styling
import Brand from "../assets/logo/brand.png"; // Import the SVG logo
import spaceBackgroundMP4 from "../assets/videos/space-background.mp4";
import spaceBackgroundWEBM from "../assets/videos/space-background.webm";
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source src={spaceBackgroundWEBM} type="video/webm" />
        <source src={spaceBackgroundMP4} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Rest of your existing content */}
      <div style={{ 
        position: "relative",
        zIndex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        justifyContent: "center"
      }}>
        {/* Add the SVG logo */}
        <img
          src={Brand}
          alt="Rocket Logo"
          style={{ height: "300px", marginBottom: "1rem" }}
        />
        <h1>{t('home.welcome')}</h1>
        <p>{t('home.description')}</p>
        <Link to="/solar-system">
          <button
            style={{
              color: "white",
              borderColor: "white",
              background: "transparent",
              padding: "10px 20px",
              fontSize: "1rem",
              fontFamily: "inherit",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              border: "1px solid",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "white";
              e.target.style.color = "black";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "white";
            }}
          >
            {t('home.explore')}
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default Home; 