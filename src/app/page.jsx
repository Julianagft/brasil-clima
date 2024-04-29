'use client'
import SelectUf from "@/components/SelectUf";
import SearchInput from "@/components/searchInput";


export default function Home() {
  return (
    <main className="w-screen h-full flex justify-center bg-black">
    <div className="flex mt-8 bg-white w-2/3 h-4/5 rounded-2xl overflow-hidden transition-width transition-height duration-300 ease-linear md:flex-row-reverse lg:flex-row lg:w-5/6 ">
      <div className="hidden bg-cover h-full md:w-4/12 md:flex md:bg-left lg:w-1/2" style={{ backgroundImage:'url(/mapa.png)'}}></div>
      <div className="w-full md:w-4/6 lg:w-1/2 lg:text-3xl flex flex-col items-center p-2.5">
        <h1 className="text-center mt-3">CLIMA BRASIL</h1>
        <p className="text-sm text-justify m-3">Bem-vindo ao Clima Brasil, sua fonte confiável para verificar a temperatura e outras informações meteorológicas de todas as cidades brasileiras. Navegue conosco para ficar por dentro das condições climáticas em todo o país.</p>
        <div className="w-full bg-green-200 flex items-center justify-center gap-3">
          <SelectUf />
          <SearchInput></SearchInput>
        </div>
        
      </div>
    </div>
  </main>
  );
}
