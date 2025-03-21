import { useEffect, useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [mobileScreen, setMobileScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 500;
      setMobileScreen(isMobile);
    };
    handleResize();
    console.log(mobileScreen);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [mobileScreen]);
  return (
    <div>
      <Header />
      <Main mobileScreen={mobileScreen} />
    </div>
  );
}

export default App;
