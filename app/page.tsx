import * as React from 'react';
import Link from 'next/link'

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';


export default function Home() {

  
  return (

    <div>


      <Navbar />

      <div className=" pt-[120px] min-h-screen flex-col items-center justify-between p-20 bg-[#245b5a]">

        <div className='my-20 w-3/5' >
          <div className="flex text-[#e77148] text-4xl tracking-wider text-transform:uppercase"> RMI Urban Resilience Project  </div>
          <div className="flex text-[#e77148] text-xl tracking-wider text-transform:uppercase py-10"> Component 2 - Coastal resilience investments  </div>
          <div className="flex text-[#AAAFAF]  tracking-wider text-transform:uppercase  ">Welcome to our web app! Please note that the content and functionality are currently being tested for proof of concept, and the data displayed here is not representative of actual project data. </div>
        </div>

    

      </div>

      <Footer />

    </div>
  );
}




