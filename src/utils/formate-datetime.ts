import { format, formatDistanceToNow as formatFSNDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export function formatDateTime(rawDate:string): string{
    const date = new Date(rawDate);

    return format(date,"dd/MM/yyyy 'ás' HH'h'mm",{
       locale: ptBR
    })
}


export function formatDistanceToNow(rawDate:string): string{
    const date = new Date(rawDate);

    return formatFSNDistanceToNow(date,{
       locale: ptBR,
       addSuffix:true
    })
}

// const isoDate = new Date().toISOString();
const isoTestDate = '2026-04-07T21:11:37.670Z'
console.log(formatDateTime(isoTestDate))
console.log(formatDistanceToNow(isoTestDate))
