'use client'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Home({children}) {
  const router = useRouter(); 
  
  useEffect(() => {
    router.push('/homePage'); 
  }, []);

  return (
    <body>
      <main className="flex mt-8 bg-white w-2/3 h-3/4 rounded-2xl overflow-hidden transition-width transition-height duration-300 ease-linear md:flex-row-reverse lg:flex-row lg:w-5/6 ">
        <div className="hidden bg-cover h-full md:w-4/12 md:flex md:bg-left lg:w-1/2" style={{ backgroundImage: 'url(/mapa.png)' }}></div>

        <div className="w-full md:w-4/6 lg:w-1/2 lg:text-3xl flex flex-col items-center justify-between gap-8 p-2.5">
          {children}      
        </div>
    
      </main>

      <footer className='h-1/4 w-screen bg-black text-white flex items-end justify-between'>

        <div className='flex-col justify-between gap-10 h-auto items-end pb-5' >
          <div className="w-6/12 flex gap-2 pb-2">
                <GitHubIcon />
                <p><a className="hover:underline cursor-pointer hover:font-bold hover:text-primaryRed" href="https://github.com/Julianagft">GitHub</a></p>
            </div>
            <div className="w-6/12 flex gap-2">
                <LinkedInIcon />
                <p><a className="hover:underline cursor-pointer hover:font-bold hover:text-primaryRed" href="https://www.linkedin.com/in/juliana-campos-rodrigues/">Linkedin</a></p>
            </div>
        </div>
          <div className='flex justify-center w-full pb-2 '>
            <div className='text-center justify-self-center'>
              <p className="">Criado por <a className="hover:underline hover:text-primaryBlue hover:font-bold cursor-pointer" href="https://github.com/Julianagft">Juliana Rodrigues</a>.</p>
            </div>
          </div>
  
      </footer>
      
    </body>
      
      

  );
}
