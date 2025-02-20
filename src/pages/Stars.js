import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { ConfigProvider, Button } from "antd";
import eclipseImage from "../assets/images/eclipse.png"; // Use the same placeholder image as the Moon page
import spaceBackgroundMP4 from "../assets/videos/space-background.mp4"; // Import MP4
import spaceBackgroundWEBM from "../assets/videos/space-background.webm"; // Import WEBM
import starsImages from "../assets/images/stars/starsImages"; // Import Stars images

const Stars = () => {
  const { t, i18n } = useTranslation();
  const [activeSection, setActiveSection] = useState(null);
  const [showSectionContent, setShowSectionContent] = useState(false);

  // Reset activeSection when language changes
  useEffect(() => {
    setActiveSection(null);
    setShowSectionContent(false);
  }, [i18n.language]);

  // Get Stars content from translations
  const sections = t("stars.content", { returnObjects: true });

  // Ensure sections is an array
  if (!Array.isArray(sections)) {
    console.error("Expected sections to be an array, but got:", sections);
    return (
      <div style={{ color: "white", textAlign: "center", marginTop: "2rem" }}>
        Error: Content not found. Please check the translation files.
      </div>
    );
  }

  const handleSectionClick = (section) => {
    setActiveSection(section);
    setShowSectionContent(true);
  };

  const handleBackClick = () => {
    setShowSectionContent(false);
    setActiveSection(null);
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#61dafb",
          colorBgContainer: "rgba(0, 0, 0, 0.8)",
          colorText: "white",
          colorBorder: "white",
          colorTextBase: "white",
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
        {/* Background Video */}
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
            zIndex: 0,
          }}
        >
          <source src={spaceBackgroundWEBM} type="video/webm" />
          <source src={spaceBackgroundMP4} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Main Content */}
        {!showSectionContent && (
          <div className="page-content" style={{ position: "relative", zIndex: 1, height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <h1>{t("stars.title")}</h1>
          </div>
        )}

        {/* Section-Specific Content */}
        <AnimatePresence mode="wait">
          {showSectionContent && activeSection && (
            <motion.div
              key={activeSection.key}
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
                id="section-content-container"
                style={{
                  flex: "0 0 50%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "0 0 0 1rem",
                  maxWidth: "100%",
                  overflow: "visible",
                }}
              >
                <div
                  style={{
                    color: "white",
                    fontSize: "1rem",
                    
                    wordWrap: "break-word",
                    maxWidth: "100%",
                  }}
                >
                  <p>{activeSection.paragraph}</p>
                  <ul style={{ paddingLeft: "1.5rem", listStyleType: "disc" }}>
                    {activeSection.bullets.map((bullet, index) => (
                      <li key={index} style={{ marginBottom: "0.5rem" }}>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Left Content Holder: Image */}
              <div
                id="section-image-container"
                style={{
                  flex: "0 0 50%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0 1rem 0 0",
                  maxWidth: "100%",
                  overflow: "visible",
                }}
              >
                <h2 style={{ color: "white", fontSize: "1.5rem", marginBottom: "1rem" }}>
                  {activeSection.label}
                </h2>
                <div style={{ width: "100%", maxWidth: "400px", height: "auto", marginTop: "1rem" }}>
                  <img
                    src={starsImages[activeSection.image]} // Use the imported image
                    alt={activeSection.label}
                    style={{ width: "100%", height: "auto", borderRadius: "10px" }}
                  />
                </div>
              </div>

            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation for Sections (at the bottom) */}
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
          {sections.map((section) => (
            <Button
              key={section.key}
              onClick={() => handleSectionClick(section)}
              type={activeSection?.key === section.key ? "primary" : "default"}
              style={{
                fontSize: "1.1em",
                color: activeSection?.key === section.key ? "#61dafb" : "white",
                borderColor: activeSection?.key === section.key ? "#61dafb" : "white",
                background: activeSection?.key === section.key ? "rgba(97, 218, 251, 0.1)" : "transparent",
                transition: "all 0.3s",
              }}
            >
              {section.label}
            </Button>
          ))}
        </div>

        {/* Back Button (Top Left) */}
        {showSectionContent && (
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
            {t("solarSystem.backButton")}
          </Button>
        )}
      </motion.div>
    </ConfigProvider>
  );
};

export default Stars;
