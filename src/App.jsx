import React from "react";
import { useState,useEffect } from "react";
import SIcon from "./assets/icons/SIcon";
import WIcon from "./assets/icons/WIcon";
import AIcon from "./assets/icons/AIcon";
import RIcon from "./assets/icons/RIcon";
import Background from "./assets/icons/Background";
import Logoyellow from "./assets/icons/Logoyellow";
import TeamContainer from "./components/team";
import Nouri from "./assets/icons/Noura.jpg";
import Raghad from "./assets/icons/Raghad.jpg";
import Farah from "./assets/icons/Farah.jpg";
import Shatha from "./assets/icons/Shatha.jpg";
import Lujain from "./assets/icons/Lujain.jpg";
import Maha from "./assets/icons/Maha.JPG";
import SiwarVid from "./assets/icons/SiwarVid.mp4";
import AirplaneIcon from "./assets/icons/AirplaneIcon";
import "@fontsource/cairo";
import "./index.css";
function App() {

const [width, setWidth]   = useState(window.innerWidth);
// const [height, setHeight] = useState(window.innerHeight);
const updateDimensions = () => {
    setWidth(window.innerWidth);
    // setHeight(window.innerHeight);
}
useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
}, [])

// const render_background = ()=> {
// if(width >= 1000) {
//   return <Background/>
// } else {
//   return <></>
// }
// }


  return (
    <div style={{ width: "100%", height: "100%" }}>
      {/* {render_background()} */}
      <Background/>
  
      <div
        style={{
          position: "absolute",
          zIndex: 10,
          top: 0,
          right: 0,
        }}
      >
        <div class="text-container"
          style={{
            marginTop: 10,
            marginRight: 80,
            width: 450,
            display: "flex",
            flexDirection: "row-reverse",
            
          }}
        >
          <a 
            style={{
              fontSize: 18,
              color: "white",
              marginRight: 50,
              fontFamily: "cairo",
            }}
            href={"#about"}
          >
            من نحن؟
          </a>

          <a
            style={{
              fontSize: 18,
              color: "white",
              marginRight: 50,
              fontFamily: "cairo",
            }}
            href={"#try"}
          >
            التجربة
          </a>
          <a
            style={{
              fontSize: 18,
              color: "white",
              marginRight: 50,
              fontFamily: "cairo",
            }}
            href={"#about"}
          >
            الميزات
          </a>
          <a
            style={{
              fontSize: 18,
              color: "white",
              marginRight: 50,
              fontFamily: "cairo",
            }}
            href={"#team"}
          >
            الفريق
          </a>
        </div>

        <div className = "main_text"
          style={{
            marginTop: 400,
            // marginRight: 150,
            alignItems: "center",
            // flexWrap:'wrap'
          }}
        >
          <p
            style={{
              fontSize: 18,
              textAlign: "center",
              color: "white",
              fontFamily: "cairo",
            }}
            id={"try"}
          >
            لعبة تأخذك في جولات وتحديات مختلفة من <br />
            المستقبل وتساعدك لتتعلم حماية خصوصية
            <br /> في الانترنت
          </p>
          <button
            style={{
              width: 150,
              height: 50,
              marginLeft: 120,
              background: "#4BBD9B",
              color: "white",
              borderColor: "#4BBD9B",
              borderRadius: 12,
              fontSize: 20,
              boxShadow: "-2px 1px 20px rgba(0, 0, 0, 0.25)",
              fontFamily: "cairo",
            }}
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSfFiMYqDMF-FGddcYrwz7ouuWFONuy11LqyKEFaFeBzDwKK3Q/viewform",
                "_blank",
                "noopener, noreferrer"
              )
            }
          >
            اطلب تجربة
          </button>
        </div>
      </div>
      <div style={{ width: "100%", height: "100" }} id={"about"}>
        <p
          style={{
            textAlign: "center",
            fontSize: 40,
            fontWeight: "bolder",
            fontFamily: "cairo",
          }}
        >
          نعلم الاطفال الخصوصية
        </p>
        <p style={{ textAlign: "center", fontSize: 20, fontFamily: "cairo" }}>
          هدفنا في لعبة سوار أن نعلم الاطفال كيف يتعاملون مع خصوصية بياناتهم
          ويحفظونها
          <br />
          وذلك ضمن لعبة مصممة لتحقق الفائدة والمتعة في آن واحد
        </p>
      </div>

      {/* componant 2  */}
      <div
        style={{
          width: "full",
          marginTop: 100,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, 300px)",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            flexDirection: "row-reverse",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <RIcon />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginRight: 30,
            }}
          >
            <h1 style={{ textAlign: "end", fontFamily: "cairo" }}>راشد</h1>
            <h5 style={{ textAlign: "end", marginTop: 0, fontFamily: "cairo" }}>
              في اتخاذ القرارات <br /> المتعلقة بخصوصيتي
            </h5>
          </div>
        </div>
        <div
          style={{
            flexDirection: "row-reverse",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <AIcon />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginRight: 30,
            }}
          >
            <h1 style={{ textAlign: "end", fontFamily: "cairo" }}>أحترم</h1>
            <h5 style={{ textAlign: "end", marginTop: 0, fontFamily: "cairo" }}>
              خصوصية الاخرين في <br />
              عالم الانترنت
            </h5>
          </div>
        </div>
        <div
          style={{
            flexDirection: "row-reverse",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <WIcon />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginRight: 30,
            }}
          >
            <h1 style={{ textAlign: "end", fontFamily: "cairo" }}>واعِ</h1>
            <h5 style={{ textAlign: "end", marginTop: 0, fontFamily: "cairo" }}>
              بأهمية خصوصية في <br />
              سعالم الانترنت
            </h5>
          </div>
        </div>
        <div
          style={{
            flexDirection: "row-reverse",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <SIcon />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginRight: 30,
            }}
          >
            <h1 style={{ textAlign: "end", fontFamily: "cairo" }}>سريع</h1>
            <h5 style={{ textAlign: "end", marginTop: 0, fontFamily: "cairo" }}>
              في تلقي المعلومات
              <br /> والاستفادة منها
            </h5>
          </div>
        </div>
      </div>

      {/* componant 3 */}
      <div
        style={{
          width: "100%",
          flexDirection: "row-reverse",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: 50,
          gap: 10,
        }}
      >
        <div style={{ flex: 1, marginTop: 160 }}>
          <h1 style={{ textAlign: "center", fontFamily: "cairo" }}>الخصوصية</h1>
          <h2
            style={{ textAlign: "center", marginTop: -20, fontFamily: "cairo" }}
          >
            في عالم الانترنت
          </h2>
          <h5
            style={{ textAlign: "center", marginTop: -10, fontFamily: "cairo" , marginBottom:50}}
          >
            كل شيء تفعله على جهازك اليوم مثل البحث عن طريقة عمل أكله معينه
            <br />
            أو اللعب يعتبر بيانات شخصية تستفيد منها الشركات و تمثل أرباح
            للمجرمين
            <br />
            لذلك يجب توعية الاطفال عن ماهي الخصوصية في عالم الانترنت وكيف
            يحافظون
            <br />
            على خصوصيتهم
          </h5>
        </div>

        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: 400,
              height: 200,
              background: "white",
              marginTop: 20,
              borderRadius: 6,
              borderWidth: 8,
              boxShadow: " -60px 59px 321px -29px rgba(247,149,110,0.75)",
            }}
          ></div>
          <div style={{ position: "absolute", zIndex: 10, marginTop: -20 }}>
            <AirplaneIcon />
          </div>
        </div>
      </div>
      <button className="button-main"
        style={{
          width: 250,
          height: 80,
          marginLeft: 70,
          background: "#4BBD9B",
          color: "white",
          borderColor: "#4BBD9B",
          borderRadius: 12,
          fontSize: 20,
          boxShadow: "-2px 1px 20px #4BBD9B",
          fontFamily: "cairo",
          marginTop: 30,
        }}
      >
        تعلم في بيئة ممتعة
      </button>
      <div style={{marginBottom:50}}></div>

      {/* componant 4*/}
      <div
        style={{
          width: "full",
          flexDirection: "row-reverse",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          justifyItems: "center",
          marginTop: 0,
          flexWrap: "wrap",
          marginTop:200
        }}
      >
        <div
          style={{
            marginBottom:150,
            width: 700,
            flexDirection: "center",
            display: "flex",
            justifyContent: 'space-between',
            borderColor: "#4BBD9B",
            borderRadius: 12,
            boxShadow: "1px 10px 235px -36px #4BBD9B",
          }}
        >
          <video autoPlay={true} controls={true} width="100%">
            <source src={SiwarVid} type="video/mp4" />
          </video>
        </div>
        <div
          style={{
           
            flexDirection: "column",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 130,
          }}
        >
          <Logoyellow />
          <div
            style={{
              width: "60%",
            }}
          >
            <h5
              style={{
                textAlign: "center",
                fontFamily: "cairo",
              }}
            >
              لعبة تفاعلية تتكون من 3 مراحل في كل مرحلة يتعلم الطفل طريقة للحفاظ
              على خصوصيته في عالم الانترنت، في بيئة مليئة بالتحدي والمرح، و تكون
              اللعبة في إطار مستقبلي.
            </h5>
          </div>
        </div>
      </div>
      {/* componant 5*/}
      <div>
        <h1
          style={{
            textAlign: "center",
            marginTop: 150,
            width: "auto",
            height: "auto",
            fontFamily: "cairo",
          }}
        >
          فريق العمل
        </h1>

        <div
          style={{
            width: "100%",
            height: "auto",
            padding: 20,
            paddingBottom: 60,
            textAlign: "center",
            boxSizing: "border-box",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, 200px)",
            justifyContent: "center",
            gap: 50,
          }}
          id={"team"}
        >
          <TeamContainer
            img={Nouri}
            name={"نوره غندوره"}
            title={"مهندسة برمجيات"}
            desc={
              "تعمل نوره كمطورة مواقع في شركة محور البداية، ركزت نوره خلال فترة دراستها على تطوير مهاراتها البرمجية (المواقع، التطبيقات)"
            }
          />

          <TeamContainer
            img={Lujain}
            name={"لجين الصحفي"}
            title={"مهندسة برمجيات"}
            desc={
              "تدربت لجين لدى الخطوط السعودية، وتعلمت خلال رحلتها الجامعية أهم المهارات لإدارة المشاريع البرمجية"
            }
          />

          <TeamContainer
            img={Shatha}
            name={"شذا الزهراني"}
            title={"مهندسة برمجيات"}
            desc={
              "تدربت شذا لدى شركة الاساليب الذكية، وتعلمت خلال رحلتها الجامعية أهم المهارات لإدارة المشاريع البرمجية"
            }
          />

          <TeamContainer
            img={Farah}
            name={"فرح العمري"}
            title={"مهندسة برمجيات"}
            desc={
              "تدربت فرح في مستشفى الملك عبدالعزيز الجامعي، و تعلمت خلال رحلتها الجامعية مهارات البرمجة وتتميز بخبرتها في مجال التصميم و تجربة المستخدم"
            }
          />

          <TeamContainer
            img={Raghad}
            name={"رغد الحربي"}
            title={"مهندسة برمجيات"}
            desc={
              "تعمل رغد كمديرة منتج في شركة تراكيب، وركزت خلال فترة دراستها على تعلم تجربة المستخدم وإدارة المنتجات، والبرمجة، و تأسيس الشركات"
            }
          />

          <TeamContainer
            img={Maha}
            name={"د.مها الجهني"}
            title={"مشرفة المشروع"}
            desc={
              "استاذ مساعد في قسم هندسة البرمجيات، ونائب المشرف على مركز التحول الرقمي بجامعة جدة"
            }
          />
        </div>

        <div
          style={{
            height: 200,
            boxShadow: "-2px 1px 20px rgba(0, 0, 0, 0.25)",
            flexDirection: "row-reverse",
            display: "flex",
            padding: 20,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h4
              style={{
                marginTop: 20,
                textAlign: "right",
                color: "#36B5B0",
                fontFamily: "cairo",
              }}
            >
              {" "}
              من نحن؟
            </h4>
            <h4
              style={{
                marginTop: 0,
                textAlign: "right",
                color: "#36B5B0",
                fontFamily: "cairo",
              }}
            >
              {" "}
              مميزاتنا
            </h4>
            <h4
              style={{
                marginTop: 0,
                textAlign: "right",
                color: "#36B5B0",
                fontFamily: "cairo",
              }}
            >
              {" "}
              فيديو
            </h4>
            <h4
              style={{
                marginTop: 0,
                textAlign: "right",
                color: "#36B5B0",
                fontFamily: "cairo",
              }}
            >
              {" "}
              فريق العمل
            </h4>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginRight: 100,
            }}
          >
            <h4
              style={{
                marginTop: 20,
                textAlign: "right",
                color: "#36B5B0",
                fontFamily: "cairo",
              }}
            >
              {" "}
              مجتمعنا
            </h4>
            <h4
              style={{
                marginTop: 0,
                textAlign: "right",
                color: "#36B5B0",
                fontFamily: "cairo",
              }}
            >
              {" "}
              السياسة
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;