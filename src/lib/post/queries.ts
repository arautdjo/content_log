import { postRepository } from "@/repositories/post";
import {cache} from 'react'
import { notFound } from "next/navigation";
import { unstable_cache } from "next/cache";


export const findALlPublicPostsCahed = unstable_cache(
    cache(async ()=> await  postRepository.findAllPublic()),
['posts'],{
 tags:['posts'],
})

// export const findPostBySLugCached =
// cache(async (slug: string)=> await  postRepository.findBySlug(slug))

export const findPostBySLugCached = (slug:string)=>
 unstable_cache(
  cache(async (tolote: string)=>{
   const postBySLug =  await  postRepository.findBySlugPublic(tolote).catch(()=>undefined)
   if(!postBySLug){
       notFound()
   }

   return postBySLug
}),
['posts'],{
 tags:[`post-${slug}`],
})(slug)



export const findPostIdCached =
cache(async (id: string)=> await  postRepository.findById(id))
