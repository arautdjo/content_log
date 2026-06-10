import { ManagePostForm } from "@/components/Admin/ManagePostForm"
import { Metadata } from "next"
// import {twMerge} from 'tailwind-merge'
export const dynamic = 'force-dynamic'

export const metadata:Metadata ={
    title:"Criando um Post"
}

export default async function AdminPostNewPage(){


    return(
         <div className="flex flex-col gap-6">
             <h1 className="text-xl font-extrabold">Criar Post</h1>
             <ManagePostForm mode='create' />
         </div>
    )
}
