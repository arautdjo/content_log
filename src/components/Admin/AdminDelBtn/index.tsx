'use client'

import { deletePostAction } from "@/actions/post/delete-post-action";
import { Trash2Icon } from "lucide-react";
import { useTransition,useContext,useState } from "react";
import { ModalContext } from "../../BlockingModal";
import { Dialog } from "../../Dialog";
import { toast } from "react-toastify";

export function AdminDelBtn({title, id}: {title: string, id:string}){

    const [isPending,startTransition] = useTransition()
    const {modalRef} = useContext(ModalContext)!
    const [showDialog,setShowDialog] = useState(false)

     function handleClick(){

           setShowDialog(true)
            // modalRef.current?.classList.add("pointer-events-none")

        // if(!confirm('Tem Certeza?')) return;
        // startTransition(async ()=>{
        //     modalRef.current?.classList.add("pointer-events-none")

        //     const resposta = await deletePostAction(id)
        //     modalRef.current?.classList.remove("pointer-events-none")
        //     // modalRef.current?.classList.add("pointer-events-auto")
        //     console.log('--SEM PRESSA--')
        //     console.log(modalRef)
        //     console.log('--SEM PRESSA--')

        //     alert(resposta)

        // })

    }

    // async function HeyD(id:string){
    //    const aqui = await deletePostAction(id)
    //    alert(aqui)
    // }

    function handleConfirm(){
        toast.dismiss()
        startTransition(async ()=>{
            const resposta = await deletePostAction(id)
            setShowDialog(false)

             if(resposta.error !==''){
                console.log('HEEEEY')
                console.log(resposta.error)
                console.log('HEEEEY')
                 toast.error(`Error: ${resposta.error}`)
                //  return
             }



            if(resposta.error===''){

                toast.success("Post deletado com sucesso...")
            }

            // setShowDialog(false)

        })
    }


    return(

        <>
         <button className={`
            transition
            cursor-pointer [&_svg]:w-4
            [&_svg]:h-4 [&_svg]:text-amber-600
            hover:scale-120 [&_svg]:hover:text-red-600
            disabled:text-slate-200 disabled:cursor-not-allowed
            `}
            aria-label={`Apagar Post: ${title}`}
            title={`Apagar Post: ${title}`}
            onClick={handleClick}
            disabled={isPending}
            >
            <Trash2Icon/>
        </button>
        {showDialog && (
            <Dialog
              onCancel={()=>setShowDialog(false)}
              onConfirm={handleConfirm}
              isVisible={showDialog}
              title={id}
              content={title}
              disabled={isPending}
              />
            )}
        </>


    )
}
