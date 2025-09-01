import HeartAssemble from "./HeartAssemble";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <HeartAssemble />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center p-6">
        <h1 className="text-4xl md:text-6xl font-bold text-[#DFFFE0]">
          Welcome to the one whom you waiting for.
        </h1>
        <p className="mt-3 text-lg md:text-2xl text-[#FADADD]">
          Because love deserves clarity.
        </p>
      </div>
    </div>
  );
}


