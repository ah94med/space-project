import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ConfigProvider, Button } from "antd";
import { useTranslation } from "react-i18next";
import eclipseImage from "../assets/images/eclipse.png"; // Placeholder image
import spaceBackgroundMP4 from "../assets/videos/space-background.mp4"; // Import MP4
import spaceBackgroundWEBM from "../assets/videos/space-background.webm"; // Import WEBM
import moonOrbitVideo from "../assets/images/moon/moon-spin.webm"; // Import Moon orbit video
import moonImages from "../assets/images/moon/moonImages"; // Import Moon phase images

const Moon = () => {
  const { t } = useTranslation();
  const content = t("moon.content", { returnObjects: true }) || []; // Ensure content is an array

  // State to track active section and tab
  const [activeSection, setActiveSection] = useState(null);
  const [activeTab, setActiveTab] = useState(null); // New state for active tab within a section

  // Handle section click (for bottom buttons)
  const handleSectionClick = (section) => {
    setActiveSection(section);
    setActiveTab(section.sections?.[0] || null); // Set the first tab as active by default
  };

  // Handle tab click (for moon phase buttons)
  const handleTabClick = (tab) => {
    setActiveTab(tab);
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
        {!activeSection && (
          <div className="page-content" style={{ position: "relative", zIndex: 1, height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <h1>{t("moon.name")}</h1>
          </div>
        )}

        {/* Section-Specific Content */}
        <AnimatePresence mode="wait">
          {activeSection && (
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
                  paddingLeft: "1rem",
                  maxWidth: "100%",
                  overflow: "visible",
                }}
              >
                {/* Custom Buttons for Info Sections */}
                {activeSection.sections && (
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "flex-start",
                      gap: "8px",
                      marginBottom: "1rem",
                    }}
                  >
                    {activeSection.sections.map((tab) => (
                      <button
                        key={tab.key}
                        style={{
                          color: activeTab?.key === tab.key ? "#61dafb" : "white",
                          borderColor: activeTab?.key === tab.key ? "#61dafb" : "white",
                          background: activeTab?.key === tab.key ? "rgba(97, 218, 251, 0.1)" : "transparent",
                          padding: "10px 20px",
                          fontSize: "1rem",
                          fontFamily: "inherit",
                          borderRadius: "5px",
                          cursor: "pointer",
                          transition: "all 0.3s ease",
                          border: "1px solid",
                        }}
                        onClick={() => handleTabClick(tab)}
                        onMouseEnter={(e) => {
                          e.target.style.background = "white";
                          e.target.style.color = "black";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = activeTab?.key === tab.key ? "rgba(97, 218, 251, 0.1)" : "transparent";
                          e.target.style.color = activeTab?.key === tab.key ? "#61dafb" : "white";
                        }}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                )}

                {/* Display Selected Content */}
                {activeTab && (
                  <div
                    style={{
                      color: "white",
                      fontSize: "1rem",
                      wordWrap: "break-word",
                      maxWidth: "100%",
                    }}
                  >
                    {activeTab.text}
                  </div>
                )}
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
                  paddingRight: "1rem",
                  maxWidth: "100%",
                  overflow: "visible",
                }}
              >
                <h2 style={{ color: "white", fontSize: "1.5rem", marginBottom: "1rem" }}>
                  {activeSection.label}
                </h2>
                <div style={{ width: "100%", maxWidth: "600px", height: "auto", marginTop: "1rem" }}>
                  {/* Moon Orbit Video */}
                  {activeSection?.key === "1" && (
                    <video
                      autoPlay
                      loop
                      muted
                      style={{ width: "100%", height: "auto", borderRadius: "10px" }}
                    >
                      <source src={moonOrbitVideo} type="video/webm" />
                      Your browser does not support the video tag.
                    </video>
                  )}

                  {/* Moon Phases or Eclipse Image */}
                  {activeTab?.image && (
                    <>
                      {console.log("activeTab.image:", activeTab.image)}
                      {console.log("moonImages[activeTab.image]:", moonImages[activeTab.image])}
                      <img
                        src={moonImages[activeTab.image]}
                        alt={activeTab.label}
                        style={{ width: "100%", height: "auto", borderRadius: "10px" }}
                      />
                    </>
                  )}
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
          {content.map((section) => (
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
      </motion.div>
    </ConfigProvider>
  );
};

export default Moon;