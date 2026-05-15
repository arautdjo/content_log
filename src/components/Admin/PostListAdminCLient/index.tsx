'use client'

import Link from "next/link"
import { AdminDelBtn } from "../AdminDelBtn"
import { PostModel } from "@/models/posts/posts-model"
// import {useEffect,useContext} from 'react'
// import {useEffect} from 'react'

// import { ModalContext } from "@/components/BlockingModal"

type PostListAdminCLientProps = {
    posts: PostModel[],
    confirmandoNe?:()=>void

}

export function PostListAdminCLient({posts}: PostListAdminCLientProps){

    // const {modalRef,toggleSeting,isOpen} = useContext(ModalContext)!

    function handleHere(){
        // toggleSeting(false)
        //  console.log('...THE BEATLES...')
        //  console.log(toggleSeting)
        //  console.log('')
        //  console.log(isOpen)

         console.log('...THE BEATLES...')

    }





    return(
        <div onClick={handleHere}>
           <div className="mb-16">
                {posts.map((post:PostModel)=>{
                    const isPublished = post.published === false ? 'bg-slate-500' : ''
                return (
                      <div className={`
                        flex gap-2 items-center justify-between
                        py-2 px-2
                        ${isPublished}
                      `} key={post.id}>
                        <Link href={`/admin/post/${post.id}`}>
                           {post.slug}
                        </Link>
                        {isPublished === 'bg-slate-500' && (
                            <span className="text-xs text-slate-700 italic">
                               {''}{''}   ( Não publicado)
                            </span>
                            )}

                          <AdminDelBtn title={post.title} id={post.id}/>
                       </div>
                       )
                })}

            </div>
        </div>
    )
}
