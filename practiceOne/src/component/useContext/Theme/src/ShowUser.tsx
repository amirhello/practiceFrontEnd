import { useContext } from "react";

import { ThemeContext } from "./Context";

function ShowUser() {
  const context = useContext(ThemeContext);
  const ChangeTheme = () => {
    context?.getTheme();
    console.log(context?.theme);
  };
  return (
    <div className="">
      <button
        onClick={ChangeTheme}
        className=" hover:bg-red-500  bg-green-300 p-1 "
      >
        click to change theme site
      </button>
    </div>
  );
}

export default ShowUser;
