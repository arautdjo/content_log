'use server'


import { makePublicPostFillOrEmpt, PublicPost } from "@/dto/post/dto"
import { verifyLoginSession } from "@/lib/login/manage-login"
import { PostcreateSchema } from "@/lib/post/validation"
import { PostModel } from "@/models/posts/posts-model"
import { postRepository } from "@/repositories/post"
import { assyncDelay } from "@/utils/async-delay"
import { getZodErrorMessages } from "@/utils/get-zod-error-messages"
import { logColored } from "@/utils/log-color"
import { makeSlugFromText } from "@/utils/make-slug-from-text"
import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"
import {v4 as uuidV4} from 'uuid'

type createPostActionState = {
    formState:PublicPost,
    errors:string[],
    sucsses?:string
}

export async function createPostAction(
    prevState:createPostActionState,
    formData:FormData
): Promise<createPostActionState>{

    await assyncDelay(3000)

    if(!(formData instanceof FormData)){
        return {
        formState:{...prevState.formState},
        errors:['Dadods Invalidos']
       }
    }

    const title = formData.get('title')?.toString() || ''
    const howPublished = formData.get('published')?.toString() || ''

    const published = !!howPublished


    const formDataToObj = Object.fromEntries(formData.entries())

    // const formDataToObjKonverted = makePublicPostFillOrEmpt(formDataToObj)

    // formDataToObjKonverted.published = published
    // console.log('SHOW ME THE MEANING OF BEING...')
    // console.log(formDataToObjKonverted)
    // console.log('SHOW ME THE MEANING OF BEING...')

    const isAuthenticated = await verifyLoginSession()

    if(!isAuthenticated ){
        return {
            formState:makePublicPostFillOrEmpt(formDataToObj),
            errors:['faça login em outra aba antes de salvar']
        }
    }

    const zodAllParsed = PostcreateSchema.safeParse(formDataToObj)

    if(!zodAllParsed.success){
         const errors = getZodErrorMessages(zodAllParsed.error.format())

         return{
            errors,
            formState:makePublicPostFillOrEmpt(formDataToObj)
            // formState:{...prevState.formState}

         }
    }

    const allValidPostFields = zodAllParsed.data

    const obejectToDataBase: PostModel = {
        ...allValidPostFields,
        createdAt:new Date().toISOString(),
        updatedAt:new Date().toISOString(),
        id:uuidV4(),
        slug:makeSlugFromText(allValidPostFields.title)



    }


   console.log('__HEY JUDE WE ARE ALL HERE__')
   console.log(allValidPostFields)
   console.log('__HEY JUDE WE ARE ALL HERE__')

   try{
    // await drizzleDb.insert(postsTable).values(obejectToDataBase)
    await postRepository.create(obejectToDataBase)
   }catch(error: unknown){
        if(error instanceof Error){
           return{
            formState:obejectToDataBase,
            errors:[error.message]
           }
        }

        return {
            formState:obejectToDataBase,
            errors:['erro desconhecido']
           }
   }

//    revalidateTag('posts','')
   revalidateTag('admin-cache','')
   redirect(`/admin/post/${obejectToDataBase.id}?option=create`)

   return {
        formState:obejectToDataBase,

        errors:[]
     }

}
