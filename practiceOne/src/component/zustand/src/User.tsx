// import ZustandTest from "./ZustandTest";
import { useZustand } from "./zustand";
import ButtenClick from "./ButtenClick";
import InputName from "./InputName";

function User() {
  return (
    <div>
      <p> Name: {useZustand((state) => state.name)}</p>
      <p> Age: {useZustand((state) => state.age)}</p>
      <ButtenClick></ButtenClick>
      <InputName></InputName>
    </div>
  );
}

export default User;
