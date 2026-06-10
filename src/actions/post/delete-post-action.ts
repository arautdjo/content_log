'use server'

import { drizzleDb } from "@/db/drizzle"
import { postsTable } from "@/db/drizzle/schemas"
import { postRepository } from "@/repositories/post"
import { assyncDelay } from "@/utils/async-delay"
import { logColored } from "@/utils/log-color"
import { eq } from 'drizzle-orm';
import {revalidateTag} from 'next/cache'

export async function deletePostAction(id: string){
  await assyncDelay(1000)

  if(!id || typeof id !=='string'){
      return {
        error: 'dados invalidos'
      }
  }



    let post;

    try{
    post = await postRepository.delete(id)
    }catch(error:unknown){
    if(error instanceof Error){
        return{
            error:error.message
        }

    }

    return{
            error:'Erro Desconhecido'
        }
    }



//   if(feedabacka.changes ===0 && feedabacka.lastInsertRowid ===0){
//       return {
//         error: 'Não ha post referente ao ID'
//     }
//   }

  revalidateTag('posts','')
  revalidateTag(`post-${post.slug}`,'')

  revalidateTag('admin-cache','')


  return {
    error: ''
  }
}
