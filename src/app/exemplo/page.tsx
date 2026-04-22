export const dynamic = 'force-dynamic'

export default function examplePage(){
    const hora = Date.now().toLocaleString('pt-BR')

    return(
        <main className="min-h-[600px] text-4xl font-bold">
           <div>Hora Atual::  {hora}</div>
        </main>
    )
}
