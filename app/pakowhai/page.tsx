'use client'

import * as React from 'react';

import Link from "next/link"


import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';





export default function Pakowhai() {

  return (
    <div>
      <Navbar />

      <div className=" pt-[120px] min-h-screen flex-col items-center justify-between p-10 bg-[#354545]">
        <Navbar />


      <div className="text-2xl uppercase  text-gray-400 p-10">
        Pakowhai area
      </div>


      


        <Link href="/pakowhai/depth" className="hover:text-slate-400 mx-1 p-10 ">DEPTH MAP </Link>
       



      </div>




      <Footer />

    </div>
  );
}