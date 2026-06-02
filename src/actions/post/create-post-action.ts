'use server'

import { makePublicPostFillOrEmpt, PublicPost } from "@/dto/post/dto"
import { PostcreateSchema } from "@/lib/post/validation"
import { PostModel } from "@/models/posts/posts-model"
import { getZodErrorMessages } from "@/utils/get-zod-error-messages"
import { logColored } from "@/utils/log-color"

type createPostActionState = {
    formState:PublicPost,
    errors:string[]
}

export async function createPostAction(
    prevState:createPostActionState,
    formData:FormData
): Promise<createPostActionState>{

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

    const obectToDataBase: PostModel = {
        ...allValidPostFields,
        createdAt:new Date().toISOString(),
        updatedAt:new Date().toISOString(),
        id:Date.now().toString(),
        slug:Math.random().toString(36)
    }

   console.log('__HEY JUDE WE ARE ALL HERE__')
   console.log(allValidPostFields)
   console.log('__HEY JUDE WE ARE ALL HERE__')

   return {
        // formState:{...prevState.formState},
        formState:obectToDataBase,

        errors:[]
     }

}
