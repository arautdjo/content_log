import NotFoundPage from "@/app/not-found"
import { ManagePostForm } from "@/components/Admin/ManagePostForm"
import { makePublicPostFromDB } from "@/dto/post/dto"
import { findPostByIdAdmin } from "@/lib/post/queries/admin"
import { Metadata } from "next"

export const dynamic = 'force-dynamic'

export const metadata:Metadata ={
    title:"Editar um Post"
}

type AdminPostIDPageProps = {
    params: Promise<{
        id:string
    }>,
    toggleSetter:()=>void,
    isOpen:boolean
}
// {params}: AdminPostIDPageProps
export default async function AdminPostIDPage({params}: AdminPostIDPageProps){

    const {id} = await params

    const postConsulting = await findPostByIdAdmin(id).catch((e)=>undefined)
    console.log(' PAUL RINGO GEORGE JOHN')
    console.log(postConsulting)
    console.log(' PAUL RINGO GEORGE JOHN')

    if(!postConsulting) return NotFoundPage()


     const postDto = makePublicPostFromDB(postConsulting)
    return <div className="py-16 text-6xl text-blue-800">
        <p>

         Oi: AdminPostIDPage:: {''} - {''} <b>{id}</b>
        </p>

        <>
          <div className="flex flex-col gap-6">
                      <h1 className="text-xl font-extrabold">Editar Post</h1>
                      <ManagePostForm mode='update' publicPost={postDto}/>
                  </div>

        </>


    </div>
}
