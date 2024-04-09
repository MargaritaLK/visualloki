import Link from "next/link"

export function Footer() {
  return (
<footer className="relative z-20 flex uppercase text-zinc-400 justify-between p-20 h-[100px] text-xs tracking-wider">
{/* <footer className="relative z-20 flex uppercase text-zinc-400 flex-col items-center justify-between p-20 h-[70px] text-xs tracking-wider"> */}


<div className="p-30">
<div>Please be advised that the data displayed on this web app is not representative of actual project data, as it is in the testing phase for proof of concept purposes</div>
  &copy; all rights reserved  &nbsp; &#xB7; &nbsp; - &nbsp; &#xB7; &nbsp;  2024
</div>

</footer>

  )
}


{/* <header className={`fixed top-0 w-full z-30 flex h-[100px] p-10 md:p- bg-[#242424]`}> */}