import TicTacToe from "./components/TicTacToe";

function App() {
  return (
    <>
      <main className="h-[100dvh] flex justify-center items-center">
        <TicTacToe />
        <div className="absolute bottom-3 font-robotomono text-[12px] text-center [text-shadow:_0_2px_5px_rgb(0_0_0_/_20%)]">
          <span>
            TicTacToe with{" "}
            <a
              href="https://react.dev/"
              target="_blank"
              className="text-[#087EA4]">
              React
            </a>{" "}
            &{" "}
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              className="text-[#0EA5E9]">
              TailwindCSS
            </a>{" "}
            by{" "}
            <a href="https://github.com/Schyro" target="_blank">
              Schyro
            </a>
          </span>
        </div>
      </main>
    </>
  );
}

export default App;
