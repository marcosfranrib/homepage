import { useState } from "react";
import Header from "./Header";
import MainBody from "./MainBody";
import Footer from "./Footer";

export default function HomePage() {
  const [blackScreen, setBlackScreen] = useState(false);
  return (
    <>
      <div className={blackScreen === true ? "black-screen" : ""}></div>
      <div className="container">
        <div className="home">
          <Header blackScreen={blackScreen} setBlackScreen={setBlackScreen}/>
          <MainBody />
          <Footer />
        </div>
      </div>
    </>
  );
}
