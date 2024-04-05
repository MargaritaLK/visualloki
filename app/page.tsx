import * as React from 'react';
import Link from 'next/link'

import { Navbar } from '@/components/navbar';


export default function Home() {

  
  return (

    <div>


      <Navbar />

      <div className=" pt-[120px] min-h-screen flex-col items-center justify-between p-20 bg-[#354545]">
      {/* <div className="pt-[100px] md:pt-[180px] z-20  flex-col items-center bg-[#354545] "> */}

        <div>
          <div className="flex text-[#f12053] text-4xl tracking-wider text-transform:uppercase"> NELSON  - flow</div>
          <div className="flex text-[#AAAFAF]  tracking-wider text-transform:uppercase py-5 ">visual loki </div>
        </div>

      </div>

    </div>
  );
}




