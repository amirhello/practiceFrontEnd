import { useZustand } from "./zustand";

function InputName() {
  const setName = useZustand((state) => state.setName);

  return (
    <div>
      <input
        className="border border-emerald-400"
        type="text"
        onChange={(e) => setName(e.currentTarget.value)}
      />
    </div>
  );
}

export default InputName;
