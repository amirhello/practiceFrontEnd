import { useContext } from "react";
import { CurrentUserContext } from "./LevelContext";

function MyComponent() {
  const m = useContext(CurrentUserContext);

  return (
    <>
      {console.log(m)}
      <p>Name: {m?.name} </p>;<p>username:{m?.username} </p>;
    </>
  );
}

export default MyComponent;
