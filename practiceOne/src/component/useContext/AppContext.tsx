import { useRef, useState } from "react";
import { CurrentUserContextType, CurrentUserContext } from "./src/LevelContext";
import MyComponent from "./src/MyComponent";
const AppContext = () => {
  let nameRef = useRef<HTMLInputElement>(null);
  let usernameRef = useRef<HTMLInputElement>(null);
  const [user, setUser] = useState<CurrentUserContextType>({
    name: "John Doe",
    username: "30",
    updateUser: () => {},
  });

  function setting(name: string | any, username: string | any) {
    setUser({ name, username, updateUser: user.updateUser });
  }

  const handelClick = () => {
    let name = nameRef.current?.value;
    let username = usernameRef.current?.value;

    setting(name, username);
  };

  return (
    <CurrentUserContext.Provider value={user}>
      <form>
        <input
          className="mt-2 border-2 border-red-400 text-center  "
          type="text"
          placeholder="name"
          ref={nameRef}
        />
        <input
          className="mt-2 border-2 border-green-400 ml-2 text-center"
          type="text"
          placeholder="username"
          ref={usernameRef}
        />
      </form>
      <button onClick={handelClick}>click to change name</button>
      <MyComponent></MyComponent>
    </CurrentUserContext.Provider>
  );
};

export default AppContext;
