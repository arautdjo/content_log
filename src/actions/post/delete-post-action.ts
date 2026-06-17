'use server'

import { verifyLoginSession } from "@/lib/login/manage-login"
import { postRepository } from "@/repositories/post"
import { assyncDelay } from "@/utils/async-delay"
// import { logColored } from "@/utils/log-color"
import {revalidateTag} from 'next/cache'

export async function deletePostAction(id: string){

    const isAuthenticated = await verifyLoginSession()

    if(!isAuthenticated ){
            return {
                formState:undefined,
                errors:'faça login novamente!'
            }
        }

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
