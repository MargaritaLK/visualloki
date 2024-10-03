import Link from "next/link"

export function Navbar() {
  return (

    <header className={`fixed top-0 w-full z-30 flex h-[100px] p-10 md:p- bg-[#0c0c0c]`}>

      <div className="flex flex-row text-slate-100 mx-1 text-xs sm:text-base">
        <Link href="/" className="hover:text-slate-400 px-2 mx-1 "> HOME </Link>
        <Link href="/map" className="hover:text-slate-400 px-2 mx-1 "> MAP (test) </Link>
        {/* <Link href="/about" className="hover:text-slate-400 px-2 mx-1 "> ABOUT </Link> */}
        <div className="text-slate-500">Please be advised that the data displayed on this web app is not representative of actual project data, as it is in the testing phase for proof of concept purposes.</div>
      </div>

    </header>

  )
}