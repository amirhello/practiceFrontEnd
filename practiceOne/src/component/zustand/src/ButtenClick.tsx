import { useZustand } from "./zustand";

function ButtenClick() {
  const incriseAge = useZustand((state) => state.incriseAge);
  const decriseAge = useZustand((state) => state.decriseAge);
  return (
    <div>
      <button onClick={() => incriseAge(1)}>incrise age</button>
      <br />
      <br />
      <button onClick={() => decriseAge(1)}>decrise age</button>
    </div>
  );
}

export default ButtenClick;
