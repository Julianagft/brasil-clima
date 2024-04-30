'use client'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react'; 

export default function Home({children}) {
  const router = useRouter(); 
  
  // useEffect(() => {
  //   router.push('/homePage'); 
  // }, []);

  return (
    <main className="w-screen h-full flex justify-center bg-black">
    <div className="flex mt-8 bg-white w-2/3 h-4/5 rounded-2xl overflow-hidden transition-width transition-height duration-300 ease-linear md:flex-row-reverse lg:flex-row lg:w-5/6 ">
      <div className="hidden bg-cover h-full md:w-4/12 md:flex md:bg-left lg:w-1/2" style={{ backgroundImage:'url(/mapa.png)'}}></div>
      
      <div className="w-full md:w-4/6 lg:w-1/2 lg:text-3xl flex flex-col items-center justify-center p-2.5">
        {children}
    
      </div>
    </div>
  </main>
  );
}
