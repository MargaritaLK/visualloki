import * as React from 'react';
import Link from 'next/link'

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';


export default function Home() {

  
  return (

    <div>


      <Navbar />

      <div className=" pt-[120px] min-h-screen flex-col items-center justify-between p-20 bg-[#354545]">

        <div className='my-20 w-3/5' >
          <div className="flex text-[#e77148] text-4xl tracking-wider text-transform:uppercase">  </div>
          <div className="flex text-[#AAAFAF]  tracking-wider text-transform:uppercase py-10 ">test- only for workshop. </div>
        </div>

      </div>

      <Footer />

    </div>
  );
}




