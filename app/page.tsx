import * as React from 'react';
import Link from 'next/link'

import { Navbar } from '@/components/navbar';


export default function Home() {

  
  return (

    <div>


      <Navbar />

      <div className=" pt-[120px] min-h-screen flex-col items-center justify-between p-20 bg-[#354545]">

        <div>
          <div className="flex text-[#e77148] text-4xl tracking-wider text-transform:uppercase">  </div>
          <div className="flex text-[#AAAFAF]  tracking-wider text-transform:uppercase py-10 ">visual loki test app </div>
        </div>

      </div>

    </div>
  );
}




