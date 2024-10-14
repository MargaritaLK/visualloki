import Link from "next/link";

export function Navbar() {
  return (
    <header className={`fixed top-0 w-full z-30 flex h-[100px] p-10 bg-[#0c0c0c]`}>
      <div className="flex flex-col justify-center text-slate-100 mx-1 text-xs sm:text-base">
        <div className="flex flex-row space-x-4">
          <Link href="/" className="hover:text-slate-400">HOME</Link>
          <Link href="/map" className="hover:text-slate-400">MAP</Link>
          {/* <Link href="/about" className="hover:text-slate-400">ABOUT</Link> */}
        </div>
        <div className="text-slate-500 uppercase text-lg mt-2">EXPERIMENTAL</div>
        <div className="text-slate-500 text-sm">
          Please be advised that the data displayed on this web app is not representative of actual project data, as it is in the testing phase for proof of concept purposes.
        </div>
      </div>
    </header>
  );
}
