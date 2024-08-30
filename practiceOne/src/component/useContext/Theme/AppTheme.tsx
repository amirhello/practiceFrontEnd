import { useState } from "react";
import { ThemeContext } from "./src/Context";
import ShowUser from "./src/ShowUser";

function AppTheme() {
  let [theme, setTheme] = useState("dark");
  const getTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div
      className={`w-full h-24 ${
        theme === "light" ? "bg-slate-100" : "bg-black"
      } `}
    >
      <p className={` ${theme === "light" ? "text-black" : "text-white"} `}>
        salam
      </p>
      <ThemeContext.Provider value={{ theme: theme, getTheme }}>
        <ShowUser />
      </ThemeContext.Provider>
    </div>
  );
}

export default AppTheme;
