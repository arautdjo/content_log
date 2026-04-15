import { postRepository } from "@/repositories/post";
import {cache} from 'react'
import { notFound } from "next/navigation";


export const findALlPublicPostsCahed =
cache(async ()=> await  postRepository.findAllPublic())

// export const findPostBySLugCached =
// cache(async (slug: string)=> await  postRepository.findBySlug(slug))

export const findPostBySLugCached =

  cache(async (slug: string)=>{
   const postBySLug =  await  postRepository.findBySlug(slug).catch(()=>undefined)
   if(!postBySLug){
       notFound()
   }

   return postBySLug
})



export const findPostIdCached =
cache(async (id: string)=> await  postRepository.findById(id))
