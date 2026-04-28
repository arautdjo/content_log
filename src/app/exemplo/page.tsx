import { revalidateExampleAction } from "@/actions/revalidate-examples"
import { cachedRandomHourValue, randomHourValueCaching } from "@/utils/cache-test"


export const dynamic = 'force-dynamic'

export default async function examplePage(){
    'use cache'

    // const hora = await randomHourValueCaching()
    // const hora = cachedRandomHourValue(Date.now())
    const hora = Date.now().toLocaleString('pt-BR')

    return(
        <main className="min-h-[600px] text-4xl font-bold">
           <form action={revalidateExampleAction} className="flex flex-col gap-8">

                 <div>Hora Atual::  {hora}</div>
                 <span>
                     <input type="hidden" name="caminho" value="/exemplo"/>
                    <button type="submit" className="bg-amber-500 text-white p-2 rounded hover:bg-amber-600 transition cursor-pointer">
                        Revalidando em 3,2,1...
                    </button>
                 </span>
           </form>
        </main>
    )
}
