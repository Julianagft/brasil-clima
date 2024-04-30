'use client'
import SelectUf from "@/components/SelectUf";

export default function homePage() {
    return (
        <>
            <h1 className="text-center mt-3">CLIMA BRASIL</h1>
            <p className="text-sm text-justify m-3">Bem-vindo ao Clima Brasil, sua fonte confiável para verificar a temperatura e outras informações meteorológicas de todas as cidades brasileiras. Navegue conosco para ficar por dentro das condições climáticas em todo o país.</p>

            <div className="w-full h-full bg-green-200 flex items-center justify-center gap-3">
                <SelectUf />

            </div>
        
        </>
        
    )
}