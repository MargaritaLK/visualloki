import Link from "next/link"

export function Navbar() {
  return (

    <header className={`fixed top-0 w-full z-30 flex h-[100px] p-10 md:p- bg-[#242424]`}>

      <div className="flex flex-row text-slate-100 mx-1 text-xs sm:text-base">
        <Link href="/" className="hover:text-slate-400 px-2 mx-1 "> HOME </Link>
        <Link href="/sitelocations" className="hover:text-slate-400 px-2 mx-1 "> SITE LOCATIONS </Link>
        <Link href="/about" className="hover:text-slate-400 px-2 mx-1 "> ABOUT </Link>
      </div>

    </header>

  )
}