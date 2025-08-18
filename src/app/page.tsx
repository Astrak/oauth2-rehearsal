import LoginButton from "./LoginButton";

export default function Home() {
  return (
    <div>
      <header className="absolute top-0 w-[calc(100%-3rem)] m-6 box-border flex items-end justify-end p-6 border-1 border-amber-950 z-10 bg-[hsla(23,91%,15%,0.3)] backdrop-blur-md rounded-2xl ">
        <LoginButton />
      </header>
      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-6 pb-20 gap-16 sm:p-20">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          Main
        </main>
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center text-amber-950">
          Next15 demo app with next-auth for web3
        </footer>
      </div>
    </div>
  );
}
