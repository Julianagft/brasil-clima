'use client'
import SelectUf from "@/components/SelectUf";

export default function homePage() {
    return (
        <div className="flex-col gap-10 py-3 w-full h-auto">
            <h1 className="text-center mt-10 mb-3 text-primaryOrange font-bold">CLIMA BRASIL</h1>
            <p className="text-sm text-justify mb-5 mx-3">Bem-vindo ao Clima Brasil, sua fonte confiável para verificar a temperatura e outras informações meteorológicas de todas as cidades brasileiras. Navegue conosco para ficar por dentro das condições climáticas em todo o país.</p>

            <div className="w-full h-full flex items-center justify-center gap-3">
                <SelectUf />

            </div>
        
        </div>
        
    )
}