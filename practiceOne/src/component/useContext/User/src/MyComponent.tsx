import { useContext } from "react";
import { CurrentUserContext } from "./LevelContext";

function MyComponent() {
  const context = useContext(CurrentUserContext);
  const setting = () => {
    console.log(" heelleo");
    context?.updateUser("mamad", "aliking");
    console.log(context);
  };

  return (
    <>
      {console.log(context)}
      <p>Name: {context?.name} </p>
      <p>username:{context?.username} </p>

      <button onClick={setting}> click me </button>
    </>
  );
}

export default MyComponent;
