import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ConfigProvider, Tabs, Button } from "antd"; // Import Button
import spaceBackgroundMP4 from "../assets/videos/space-background.mp4"; // Import MP4
import spaceBackgroundWEBM from "../assets/videos/space-background.webm"; // Import WEBM
//planets
import mercuryVideoWEBM from "../assets/videos/planets/mercury.webm"; // Import Mercury WEBM
import marsWebM from "../assets/videos/planets/mars.webm"; // Import Mars video
import jupiterWebM from "../assets/videos/planets/jupiter.webm"; // Import Jupiter video
import venusWebM from "../assets/videos/planets/venus.webm"
import neptuneWebM from "../assets/videos/planets/neptune.webm"
import earthWebM from "../assets/videos/planets/earth.webm"
import uranusWebM from "../assets/videos/planets/uranus.webm"
import saturnWebM from "../assets/videos/planets/saturn.webm"

import { InfoCircleOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next"; // Import useTranslation

const SolarSystem = () => {
  const [activePlanet, setActivePlanet] = useState(null);
  const [showPlanetContent, setShowPlanetContent] = useState(false);
  const [activeTab, setActiveTab] = useState("1"); // State for active tab
  const { t, i18n } = useTranslation(); // Use the translation hook and i18n

  // Reset activePlanet when language changes
  useEffect(() => {
    setActivePlanet(null);
    setShowPlanetContent(false);
  }, [i18n.language]); // Listen for language changes

  // Get planet data from translations
  const planets = [
    {
      name: t("planets.mercury.name"),
      content: t("planets.mercury.content", { returnObjects: true }),
      video: mercuryVideoWEBM,
      scale: 0.4,
    },
    {
      name: t("planets.venus.name"),
      content: t("planets.venus.content", { returnObjects: true }),
      video: venusWebM,
      scale: 0.95,
    },
    {
      name: t("planets.earth.name"),
      content: t("planets.earth.content", { returnObjects: true }),
      video: earthWebM,
      scale: 1,
    },
    {
      name: t("planets.mars.name"),
      content: t("planets.mars.content", { returnObjects: true }),
      video: marsWebM,
      scale: 0.5,
    },
    {
      name: t("planets.jupiter.name"),
      content: t("planets.jupiter.content", { returnObjects: true }),
      video: jupiterWebM,
      scale: 1.1,
    },
    {
      name: t("planets.saturn.name"),
      content: t("planets.saturn.content", { returnObjects: true }),
      video: saturnWebM,
      scale: 1.5,
    },
    {
      name: t("planets.uranus.name"),
      content: t("planets.uranus.content", { returnObjects: true }),
      video: uranusWebM,
      scale: 1.3,
    },
    {
      name: t("planets.neptune.name"),
      content: t("planets.neptune.content", { returnObjects: true }),
      video: neptuneWebM,
      scale: 1.2,
    },
  ];

  const handlePlanetClick = (planet) => {
    setActivePlanet(planet);
    setShowPlanetContent(true);
  };

  const handleBackClick = () => {
    setShowPlanetContent(false);
    setActivePlanet(null);
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#61dafb", // Light blue for primary color
          colorBgContainer: "rgba(0, 0, 0, 0.8)", // Dark background for containers
          colorText: "white", // White text
          colorBorder: "white", // White borders
          colorTextBase: "white", // Base text color
        },
        components: {
          Tabs: {
            itemSelectedColor: "#61dafb", // Light blue for selected tab
            inkBarColor: "transparent", // Transparent ink bar
          },
        },
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        style={{ position: "relative", width: "100vw", height: "100vh", overflow: "hidden" }}
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

        {/* Back Button (Top Left) */}
        {showPlanetContent && (
          <Button
            type="default"
            style={{
              position: "absolute",
              top: "7rem",
              left: "1rem",
              zIndex: 20,
              color: "white",
              borderColor: "white",
              background: "transparent",
              transition: "all 0.3s",
            }}
            onClick={handleBackClick}
            onMouseEnter={(e) => {
              e.target.style.background = "white";
              e.target.style.color = "black";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "transparent";
              e.target.style.color = "white";
            }}
          >
             {t("solarSystem.backButton")} {/* Use translated back button text */}
          </Button>
        )}

        {/* Main Content */}
        {!showPlanetContent && (
          <div className="page-content" style={{ position: "relative", zIndex: 1, height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <h1>{t("solarSystem.title")}</h1>
            <p>{t("solarSystem.description")}</p>
          </div>
        )}

        {/* Planet-Specific Content */}
        <AnimatePresence mode="wait">
          {showPlanetContent && activePlanet && (
            <motion.div
              key={activePlanet.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              style={{
                position: "relative",
                zIndex: 1,
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                padding: "0 2rem",
              }}
            >
              

              {/* Right Content Holder: Text */}
              <div
                id="planet-content-container"
                style={{
                  flex: "0 0 50%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  paddingLeft: "1rem",
                  maxWidth: "100%",
                  overflow: "visible",
                }}
              >
                {/* Custom Buttons for Info Sections */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "flex-start",
                    gap: "8px",
                    marginBottom: "1rem",
                  }}
                >
                  {activePlanet.content.map((tab) => (
                     <button
                     key={tab.key}
                     style={{
                       color: activeTab === tab.key ? "#61dafb" : "white",
                       borderColor: activeTab === tab.key ? "#61dafb" : "white",
                       background: activeTab === tab.key ? "rgba(97, 218, 251, 0.1)" : "transparent",
                       padding: "10px 20px",
                       fontSize: "1rem",
                       fontFamily: "inherit",
                       borderRadius: "5px",
                       cursor: "pointer",
                       transition: "all 0.3s ease",
                       border: "1px solid",
                     }}
                     onClick={() => setActiveTab(tab.key)}
                     onMouseEnter={(e) => {
                       e.target.style.background = "white";
                       e.target.style.color = "black";
                     }}
                     onMouseLeave={(e) => {
                       e.target.style.background = activeTab === tab.key ? "rgba(97, 218, 251, 0.1)" : "transparent";
                       e.target.style.color = activeTab === tab.key ? "#61dafb" : "white";
                     }}
                   >
                     {tab.label}
                   </button>
                  ))}
                </div>

                {/* Display Selected Content */}
                {activePlanet.content.map((tab) => (
                  <div
                    key={tab.key}
                    style={{
                      display: activeTab === tab.key ? "block" : "none",
                      color: "white",
                      fontSize: "1rem",
                      textAlign: "right",
                      wordWrap: "break-word",
                      maxWidth: "100%",
                    }}
                  >
                    {tab.text}
                  </div>
                ))}
              </div>

              {/* Left Content Holder: Planet Name and Video */}
              <div
                id="planet-video-container"
                style={{
                  flex: "0 0 50%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingRight: "1rem",
                  maxWidth: "100%",
                  overflow: "visible",
                }}
              >
                <h2 style={{ color: "white", fontSize: "1.5rem", marginBottom: "1rem" }}>
                  {activePlanet.name}
                </h2>
                <div style={{ width: "100%", maxWidth: "400px", height: "auto", marginTop: "1rem" }}>
                  <video
                    autoPlay
                    loop
                    muted
                    style={{ 
                      width: "100%", 
                      height: "auto", 
                      objectFit: "cover",
                      transform: `scale(${activePlanet.scale})`
                    }}
                  >
                    <source src={activePlanet.video} type="video/webm" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Second Navigation for Planets (at the bottom) */}
        <div
          style={{
            position: "absolute",
            bottom: "1rem",
            left: 0,
            right: 0,
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            justifyContent: "center",
            zIndex: 2,
          }}
        >
          {planets.map((planet) => (
            <Button
              key={planet.name}
              onClick={() => handlePlanetClick(planet)}
              type={activePlanet?.name === planet.name ? "primary" : "default"}
              style={{
                fontSize:"1.1em",
                color: activePlanet?.name === planet.name ? "#61dafb" : "white",
                borderColor: activePlanet?.name === planet.name ? "#61dafb" : "white",
                background: activePlanet?.name === planet.name ? "rgba(97, 218, 251, 0.1)" : "transparent",
                transition: "all 0.3s",
              }}
            >
              {planet.name}
            </Button>
          ))}
        </div>
      </motion.div>
    </ConfigProvider>
  );
};

export default SolarSystem;