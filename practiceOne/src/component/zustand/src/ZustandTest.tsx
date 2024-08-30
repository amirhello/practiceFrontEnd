import { create } from "zustand";

interface bearStoretype {
  bears: number;
  increasePopulation: (num: number) => void;
  removeAllBears: () => void;
  updateBears: (num: number) => void;
}

const useStore = create<bearStoretype>((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears) => set({ bears: newBears }),
}));

function ZustandTest() {
  function BearCounter() {
    const bears = useStore((state) => state.bears);
    return <h1>{bears} around here...</h1>;
  }

  function Controls() {
    const increasePopulation = useStore((state) => state.increasePopulation);

    return <button onClick={() => increasePopulation(1)}>one up</button>;
  }

  return (
    <div>
      <BearCounter />
      <Controls></Controls>
    </div>
  );
}

export default ZustandTest;
