import React, { useState } from "react";
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

const SolarSystem = () => {
  const [activePlanet, setActivePlanet] = useState(null);
  const [showPlanetContent, setShowPlanetContent] = useState(false);
  const [activeTab, setActiveTab] = useState("1"); // State for active tab

  const planets = [
    {
      name: "عطارد",
      content: [
        {
          key: "1",
          label: (
            <span>
              <InfoCircleOutlined style={{ marginRight: "8px", marginLeft: "8px" }} />
              الموقع والحجم
            </span>
          ),
          text: (
            <ul>
              <li>عطارد هو أقرب كواكب المجموعة الشمسية إلى الشمس وأصغرها حجماً.</li>
              <li>يبلغ قطره 4878 كم.</li>
            </ul>
          ),
        },
        {
          key: "2",
          label: (
            <span>
              <InfoCircleOutlined style={{ marginRight: "8px", marginLeft: "8px" }} />
              الدوران والمدار
            </span>
          ),
          text: (
            <ul>
              <li>يدور حول نفسه في 59 يوماً (طول اليوم على عطارد).</li>
              <li>يستغرق 88 يوماً للدوران حول الشمس (طول السنة على عطارد).</li>
            </ul>
          ),
        },
        {
          key: "3",
          label: (
            <span>
              <InfoCircleOutlined style={{ marginRight: "8px", marginLeft: "8px" }} />
              السطح والتضاريس
            </span>
          ),
          text: (
            <ul>
              <li>يشبه سطح عطارد سطح القمر، حيث يحتوي على العديد من الفوهات النيزكية.</li>
              <li>هذه الفوهات نتجت عن اصطدام النيازك بالكوكب.</li>
            </ul>
          ),
        },
        {
          key: "4",
          label: (
            <span>
              <InfoCircleOutlined style={{ marginRight: "8px", marginLeft: "8px" }} />
              الغلاف و الحرارة
            </span>
          ),
          text: (
            <ul>
              <li>لا يمتلك عطارد غلافاً جوياً يحميه.</li>
              <li>نتيجة لذلك، هناك فرق كبير في درجات الحرارة بين الليل والنهار.</li>
            </ul>
          ),
        },
      ],
      video: mercuryVideoWEBM,
      scale: 0.4, // Mercury is about 0.38 times Earth's size
    },
    {
      name: "الزهرة",
      content: [
        {
          key: "1",
          label: (
            <span>
              <InfoCircleOutlined style={{ marginRight: "8px", marginLeft: "8px" }} />
              الشبه بالأرض
            </span>
          ),
          text: (
            <ul>
              <li>يُعتبر أقرب كواكب الأرض من حيث الحجم والكتلة، ويُطلق عليه أحيانًا "أخت الأرض".</li>
            </ul>
          ),
        },
        {
          key: "2",
          label: (
            <span>
              <InfoCircleOutlined style={{ marginRight: "8px", marginLeft: "8px" }} />
              السطوع والغلاف الجوي
            </span>
          ),
          text: (
            <ul>
              <li>أكثر الأجرام السماوية إشراقًا في الليل بفضل انعكاسيته العالية، رغم أنه محاط بغلاف جوي كثيف من السحب الدائمة يحجب رؤية سطحه.</li>
            </ul>
          ),
        },
        {
          key: "3",
          label: (
            <span>
              <InfoCircleOutlined style={{ marginRight: "8px", marginLeft: "8px" }} />
              الدوران والحركة
            </span>
          ),
          text: (
            <ul>
              <li>يمر بدورة أطوار مشابهة للقمر، وله حركة تراجعية (يدور ببطء من الشرق إلى الغرب؛ دورة كاملة تستغرق 243 يوماً).</li>
            </ul>
          ),
        },
        {
          key: "4",
          label: (
            <span>
              <InfoCircleOutlined style={{ marginRight: "8px", marginLeft: "8px" }} />
              التركيب والغلاف الجوي
            </span>
          ),
          text: (
            <ul>
              <li>غلافه الجوي يتكوّن من 96% ثاني أكسيد الكربون و3.5% نيتروجين، مما يؤدي إلى ظاهرة البيت الزجاجي ودرجات حرارة تصل إلى 464 درجة مئوية.</li>
            </ul>
          ),
        },
        {
          key: "5",
          label: (
            <span>
              <InfoCircleOutlined style={{ marginRight: "8px", marginLeft: "8px" }} />
              السطح
            </span>
          ),
          text: (
            <ul>
              <li>يغلب عليه السهول المستوية ذات الأصل البركاني مع وجود مرتفعات ووديان تشكل حوالي 27% من سطحه.</li>
            </ul>
          ),
        },
      ],
      video: venusWebM,
      scale: 0.95, // Venus is about 0.95 times Earth's size
    },
    {
      name: "الأرض",
      content: [
        {
          key: "1",
          label: (
            <span>
              <InfoCircleOutlined style={{ marginRight: "8px", marginLeft: "8px" }} />
              التركيب والغلاف الجوي
            </span>
          ),
          text: (
            <ul>
              <li>تتكون الأرض من ثلاث طبقات رئيسية: القشرة، الوشاح، واللب.</li>
              <li>يحتوي الغلاف الجوي على النيتروجين والأكسجين، مما يجعلها صالحة للحياة.</li>
            </ul>
          ),
        },
        {
          key: "2",
          label: (
            <span>
              <InfoCircleOutlined style={{ marginRight: "8px", marginLeft: "8px" }} />
              الظواهر الطبيعية
            </span>
          ),
          text: (
            <ul>
              <li>تتميز الأرض بالبراكين والزلازل نتيجة حركة الصفائح التكتونية.</li>
              <li>تحتوي على أنهار وبحيرات ومحيطات تغطي حوالي 71% من سطحها.</li>
            </ul>
          ),
        },
        {
          key: "3",
          label: (
            <span>
              <InfoCircleOutlined style={{ marginRight: "8px", marginLeft: "8px" }} />
              الحياة على الأرض
            </span>
          ),
          text: (
            <ul>
              <li>الأرض هي الكوكب الوحيد المعروف بوجود حياة عليه.</li>
              <li>تتنوع أشكال الحياة من الكائنات الدقيقة إلى البشر.</li>
            </ul>
          ),
        },
        {
          key: "4",
          label: (
            <span>
              <InfoCircleOutlined style={{ marginRight: "8px", marginLeft: "8px" }} />
              المناخ والطقس
            </span>
          ),
          text: (
            <ul>
              <li>يختلف المناخ من منطقة إلى أخرى، من المناطق الاستوائية إلى القطبية.</li>
              <li>تتأثر أنماط الطقس بدوران الأرض وموقعها بالنسبة للشمس.</li>
            </ul>
          ),
        },
      ],
      video: earthWebM,
      scale: 1, // Earth is the reference
    },
    {
      name: "المريخ",
      content: [
        {
          key: "1",
          label: (
            <span>
              <InfoCircleOutlined style={{ marginRight: "8px", marginLeft: "8px" }} />
              المظهر واللون
            </span>
          ),
          text: (
            <ul>
              <li>لونه الأحمر ناتج عن أكسيد الحديد في تربته.</li>
            </ul>
          ),
        },
        {
          key: "2",
          label: (
            <span>
              <InfoCircleOutlined style={{ marginRight: "8px", marginLeft: "8px" }} />
              الخصائص الفيزيائية
            </span>
          ),
          text: (
            <ul>
              <li>أقل كثافة بين الكواكب الأرضية؛ حجمه أكبر من عطارد وأصغر من الزهرة.</li>
            </ul>
          ),
        },
        {
          key: "3",
          label: (
            <span>
              <InfoCircleOutlined style={{ marginRight: "8px", marginLeft: "8px" }} />
              سطح وتضاريس
            </span>
          ),
          text: (
            <ul>
              <li>يحتوي على صحارى واسعة ذات كثبان متحركة بفعل الرياح، وأخاديد جافة (تشير إلى جريان الماء في الماضي)، وقبعات ثلجية عند الأقطاب، مع رواسب بركانية.</li>
              <li>يحتضن أعلى قمة جبلية في المجموعة الشمسية (جبل أولمبوس بارتفاع 25 كم) وصدع يمتد لنحو 5000 كم.</li>
            </ul>
          ),
        },
        {
          key: "4",
          label: (
            <span>
              <InfoCircleOutlined style={{ marginRight: "8px", marginLeft: "8px" }} />
              الغلاف الجوي
            </span>
          ),
          text: (
            <ul>
              <li>رقيق يعتمد أساساً على ثاني أكسيد الكربون، مما سمح برؤية سطحه، كما أن انخفاض ضغطه حالياً يمنع وجود الماء السائل على السطح رغم الأدلة على وجود مياه جوفية محتملة في الماضي.</li>
            </ul>
          ),
        },
      ],
      video: marsWebM,
      scale: 0.53, // Mars is about 0.53 times Earth's size
    },
    {
      name: "المشتري",
      content: [
        {
          key: "1",
          label: (
            <span>
              <InfoCircleOutlined style={{ marginRight: "8px", marginLeft: "8px" }} />
              الحجم والدوران
            </span>
          ),
          text: (
            <ul>
              <li>أكبر كواكب المجموعة الشمسية من حيث الحجم والكتلة، ويدور بسرعة (دورة كاملة كل 10 ساعات تقريباً) مما يؤدي إلى انتفاخ ملحوظ عند الاستواء.</li>
            </ul>
          ),
        },
        {
          key: "2",
          label: (
            <span>
              <InfoCircleOutlined style={{ marginRight: "8px", marginLeft: "8px" }} />
              التركيب والغلاف الجوي
            </span>
          ),
          text: (
            <ul>
              <li>غلاف جوي سميك يتكوّن أساساً من الهيدروجين والهليوم، مع وجود بخار ماء، ميثان وأمونيا، ويظهر من خلاله توزيع على شكل أحزمة فاتحة وداكنة.</li>
            </ul>
          ),
        },
        {
          key: "3",
          label: (
            <span>
              <InfoCircleOutlined style={{ marginRight: "8px", marginLeft: "8px" }} />
              الظواهر البارزة
            </span>
          ),
          text: (
            <ul>
              <li>وجود بقعة حمراء كبيرة (إعصار هائل ثابت منذ القرن السابع عشر).</li>
            </ul>
          ),
        },
        {
          key: "4",
          label: (
            <span>
              <InfoCircleOutlined style={{ marginRight: "8px", marginLeft: "8px" }} />
              البنية الداخلية والمجالات المغناطيسية
            </span>
          ),
          text: (
            <ul>
              <li>تحت سطحه توجد طبقات من الهيدروجين السائل والمعدني مع لب صخري، بالإضافة إلى مجال مغناطيسي قوي وظواهر مثل الشفق القطبي.</li>
            </ul>
          ),
        },
        {
          key: "5",
          label: (
            <span>
              <InfoCircleOutlined style={{ marginRight: "8px", marginLeft: "8px" }} />
              الأقمار والحلقات
            </span>
          ),
          text: (
            <ul>
              <li>لديه العديد من الأقمار، أبرزها أقمار جاليليو (آيو، أوروبا، جانيميد، كاليستو)، وحلقات غير بارزة مثل تلك الخاصة بالمشتري.</li>
            </ul>
          ),
        },
      ],
      video: jupiterWebM,
      scale: 1.5, // Jupiter is 11 times Earth's size, but we cap at 1.5
    },
    {
      name: "زحل",
      content: [
        {
          key: "1",
          label: (
            <span>
              <InfoCircleOutlined style={{ marginRight: "8px", marginLeft: "8px" }} />
              الخصائص الفيزيائية
            </span>
          ),
          text: (
            <ul>
              <li>ثاني أكبر كوكب في المجموعة، وأقل كثافة من الماء بحيث يمكن أن يطفو عليه.</li>
            </ul>
          ),
        },
        {
          key: "2",
          label: (
            <span>
              <InfoCircleOutlined style={{ marginRight: "8px", marginLeft: "8px" }} />
              الغلاف الجوي والتدوير
            </span>
          ),
          text: (
            <ul>
              <li>يشبه المشتري في تكوينه الداخلي، لكن مع اختلاف في سماكة طبقة الهيدروجين المعدني؛ دورانه السريع يؤدي إلى تشوه واضح عند الاستواء.</li>
            </ul>
          ),
        },
        {
          key: "3",
          label: (
            <span>
              <InfoCircleOutlined style={{ marginRight: "8px", marginLeft: "8px" }} />
              الحلقات
            </span>
          ),
          text: (
            <ul>
              <li>يتميز بحلقات رائعة مكونة من جزيئات ثلجية وصخرية تتفاوت في الحجم وتظهر فجوات (مثل فجوة كاسيني) نتيجة تأثيرات جاذبية الأقمار والمشتري.</li>
            </ul>
          ),
        },
        {
          key: "4",
          label: (
            <span>
              <InfoCircleOutlined style={{ marginRight: "8px", marginLeft: "8px" }} />
              الإشعاع الحراري
            </span>
          ),
          text: (
            <ul>
              <li>يصدر طاقة حرارية تزيد على ما يستقبله من الشمس بمعدل 1.8 مرة.</li>
            </ul>
          ),
        },
        {
          key: "5",
          label: (
            <span>
              <InfoCircleOutlined style={{ marginRight: "8px", marginLeft: "8px" }} />
              الأقمار
            </span>
          ),
          text: (
            <ul>
              <li>يمتلك عدداً كبيراً من الأقمار، أبرزها تيتان الذي يمتلك غلافاً جواياً كثيفاً من النيتروجين ويحتمل وجود محيطات من الميثان والإيثان.</li>
            </ul>
          ),
        },
      ],
      video: saturnWebM,
      scale: 1.5, // Saturn is 9 times Earth's size, but we cap at 1.5
    },
    {
      name: "أورانوس",
      content: [
        {
          key: "1",
          label: (
            <span>
              <InfoCircleOutlined style={{ marginRight: "8px", marginLeft: "8px" }} />
              الاكتشاف واللون
            </span>
          ),
          text: (
            <ul>
              <li>أول كوكب يُكتشف باستخدام التلسكوب (1781)، يتميز بلونه الأزرق الناتج عن امتصاص الميثان للضوء الأحمر.</li>
            </ul>
          ),
        },
        {
          key: "2",
          label: (
            <span>
              <InfoCircleOutlined style={{ marginRight: "8px", marginLeft: "8px" }} />
              التركيب والغلاف الجوي
            </span>
          ),
          text: (
            <ul>
              <li>يمتلك غلافاً جويًا سميكًا يتكوّن أساساً من الهيدروجين والهليوم مع وجود الميثان، مما يعطيه انعكاسية جيدة.</li>
            </ul>
          ),
        },
        {
          key: "3",
          label: (
            <span>
              <InfoCircleOutlined style={{ marginRight: "8px", marginLeft: "8px" }} />
              البنية الداخلية
            </span>
          ),
          text: (
            <ul>
              <li>سطحه عبارة عن هيدروجين سائل، وتحت سطحه طبقة من الثلج، وفي المركز لب صخري محتمل.</li>
            </ul>
          ),
        },
        {
          key: "4",
          label: (
            <span>
              <InfoCircleOutlined style={{ marginRight: "8px", marginLeft: "8px" }} />
              الحلقات والأقمار
            </span>
          ),
          text: (
            <ul>
              <li>لديه حلقات غير متميزة وعدد من الأقمار الصغيرة.</li>
            </ul>
          ),
        },
      ],
      video: uranusWebM,
      scale: 1.3, // Uranus is 4 times Earth's size, but we use 1.3
    },
    {
      name: "نبتون",
      content: [
        {
          key: "1",
          label: (
            <span>
              <InfoCircleOutlined style={{ marginRight: "8px", marginLeft: "8px" }} />
              الاكتشاف والخصائص
            </span>
          ),
          text: (
            <ul>
              <li>تم تحديد موقعه حسابياً ثم رصده في عام 1846، ويشبه أورانوس في التركيب واللون الأزرق.</li>
            </ul>
          ),
        },
        {
          key: "2",
          label: (
            <span>
              <InfoCircleOutlined style={{ marginRight: "8px", marginLeft: "8px" }} />
              الظواهر الجوية
            </span>
          ),
          text: (
            <ul>
              <li>يحتوي على ظواهر عاصفة مثل البقع الزرقاء اللامعة وبقع داكنة نتيجة تحركات الهواء داخل الغلاف الجوي.</li>
            </ul>
          ),
        },
        {
          key: "3",
          label: (
            <span>
              <InfoCircleOutlined style={{ marginRight: "8px", marginLeft: "8px" }} />
              الأقمار والحلقات
            </span>
          ),
          text: (
            <ul>
              <li>لديه عدة أقمار أهمها تريتون، الذي يمتلك غلافاً جواياً رقيقاً وظواهر جيولوجية، وحلقات غير بارزة.</li>
            </ul>
          ),
        },
      ],
      video: neptuneWebM,
      scale: 1.2, // Neptune is 3.9 times Earth's size, but we use 1.2
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
          fontFamily: "Noto Kufi Arabic, sans-serif", // Use Noto Kufi Arabic
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
            رجوع
          </Button>
        )}

        {/* Main Content */}
        {!showPlanetContent && (
          <div className="page-content" style={{ position: "relative", zIndex: 1, height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <h1>النظام الشمسي</h1>
            <p>اكتشفوا الكواكب والأجرام السماوية في نظامنا الشمسي.</p>
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
                     {tab.label.props.children[1]}
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