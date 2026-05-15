import { InputText } from "@/components/InputText"
import {twMerge} from 'tailwind-merge'
export const dynamic = 'force-dynamic'



export default async function AdminPostNewPage(){
    return <div className="flex flex-col gap-6">
         <InputText labelText="Nome" placeholder="Digite seu nome..."/>
         <InputText disabled labelText="Sobrenome" placeholder="Digite seu Sobrenome..."/>
         <InputText disabled labelText="Sobrenome" placeholder="Digite seu Sobrenome..."/>
         <InputText disabled labelText="Sobrenome" placeholder="Digite seu Sobrenome..."/>
         <InputText
           disabled
           labelText="Sobrenome"
           placeholder="Aqui é so teste"
           defaultValue="tu tut ut barão"
           />

           <InputText
           readOnly
           labelText="Sobrenome"
           placeholder="Aqui é so teste"
           defaultValue="aqui outro valor para teste"
           />


    </div>
}
