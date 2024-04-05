

import * as React from 'react';
import Link from 'next/link'


export default function Home() {

  
  return (

    <div className=" min-h-screen flex-col items-center justify-between p-10 bg-[#354545]">

      <div>
      <div className="flex text-[#f12053] text-4xl tracking-wider text-transform:uppercase"> NELSON  - flow</div>
      <div className="flex text-[#AAAFAF]  tracking-wider text-transform:uppercase py-5 ">visual loki </div>
      </div>

      <div>
      <Link href="/flowmap">flow path map</Link>
      </div>

    </div>
  );
}


