import { postRepository } from "@/repositories/post";
import {cache} from 'react'
import { notFound } from "next/navigation";
import { unstable_cache } from "next/cache";


export const findALlPublicPostsCahed = cache(unstable_cache(
async ()=> await  postRepository.findAllPublic(),
['posts'],{
 tags:['posts'],
}))


export const findPostBySlugCached =
cache(async (slug: string)=> await  postRepository.findBySlugPublic(slug))

// export const findPublicPostBySlugCached = (slug:string)=>
//  unstable_cache(
//   cache(async (tolote: string)=>{
//    const postBySLug =  await  postRepository.findBySlugPublic(tolote).catch(()=>undefined)
//    if(!postBySLug){
//        notFound()
//    }

//    return postBySLug
// }),
// ['posts'],{
//  tags:[`post-${slug}`],
// })(slug)




// export const findPublicPostBySlugCached = cache((slug:string)=>{
//     return unstable_cache(
//         async (slug:string)=>{
//          const posts = await postRepository.findBySlugPublic(slug).catch(()=>undefined)
//          if(!posts)  notFound();
//             return posts
//     },[`post-${slug}`],{tags:[`post-${slug}`]},)(slug)
// })


export const findPublicPostBySlugCached = cache((slug: string) => {
  return unstable_cache(
    async (slug: string) => {
      const post = await postRepository
        .findBySlugPublic(slug)
        .catch(() => undefined);

      if (!post) notFound();

      return post;
          },
    [`post-${slug}`],
    { tags: [`post-${slug}`] },
  )(slug);
});



// export const findPublicPostBySlugCached = cache((slug:string)=>{
//     return  (async (slug)=>{
//          const posts = await postRepository.findBySlugPublic(slug).catch(()=>undefined)
//          if(!posts)  notFound();
//             return posts
//     })(slug)
// })



// export const findPublicPostBySlugCached = (slug: string)=>{
//   return (cache(async ()=>{



//          const posts = await postRepository.findBySlugPublic(slug).catch(()=>undefined)
//          if(!posts)  notFound();
//             return posts

// })())}





// export const findPublicPostBySlugCached = (slug:string)=>{

//     return cache(async ()=>{
//         // console.log(putz)
//         const posts =  postRepository.findBySlugPublic(slug).catch(()=>undefined)
//          if(!posts)  notFound();
//             return posts
//     })

// }



// export const findPublicPostBySlugCached = (slug:string)=>unstable_cache(async (slug:string)=>{
//     // const fn = async ()=>{
//          const posts = await postRepository.findBySlugPublic(slug).catch(()=>undefined)
//          if(!posts) notFound();
//             return posts
//     // }
//     // return fn()
// },[`post-${slug}`],{tags:[`post-${slug}`]})(slug)
















