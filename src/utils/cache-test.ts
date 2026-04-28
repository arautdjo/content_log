import { cacheLife, cacheTag } from "next/cache"

export function cacheRandomValueHour(generatedDate: number){
     return generatedDate.toLocaleString('pt-BR')
}


export async function randomHourValueCaching(){
    'use cache'

    cacheLife('seconds')
    cacheTag('atualiza_hora_in_function')

     return cacheRandomValueHour(Date.now())
}


export const cachedRandomHourValue = (valor:number)=>{
    const innerJob = async ()=>{
        'use cache'

    cacheLife('seconds')
    cacheTag('hora_lalaiede')

    return cacheRandomValueHour(valor)
    }

    return innerJob()
}
