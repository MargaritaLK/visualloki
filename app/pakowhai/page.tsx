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



        <Link href="/pakowhai/depth" className="hover:text-slate-400 px-2 mx-1 "> depth </Link>
       



      </div>




      <Footer />

    </div>
  );
}