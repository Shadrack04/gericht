import { createContext, useContext, useEffect, useMemo, useState } from "react";

const ScreenContext = createContext();

export function ScreenProvider({ children }) {
  const [mobileScreen, setMobileScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 400;
      setMobileScreen(isMobile);
    };
    handleResize();
    console.log(mobileScreen);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [mobileScreen]);

  const value = useMemo(() => {
    return { mobileScreen };
  }, [mobileScreen]);

  return (
    <ScreenContext.Provider value={value}>{children}</ScreenContext.Provider>
  );
}

export function useScreen() {
  const context = useContext(ScreenContext);
  if (!context) throw new Error("Screen context outside of it scope");
  return context;
}
