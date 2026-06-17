'use server'


import { makePublicPostFillOrEmpt, makePublicPostFromDB, PublicPost } from "@/dto/post/dto"
import { verifyLoginSession } from "@/lib/login/manage-login"
import { PostUpdateSchema } from "@/lib/post/validation"
import { postRepository } from "@/repositories/post"
import { assyncDelay } from "@/utils/async-delay"
import { getZodErrorMessages } from "@/utils/get-zod-error-messages"
// import { logColored } from "@/utils/log-color"
import { revalidateTag } from "next/cache"

type updatePostActionState = {
    formState:PublicPost,
    errors:string[],
    sucsses?: string
}

export async function updatePostAction(
    prevState:updatePostActionState,
    formData:FormData
): Promise<updatePostActionState>{

    await assyncDelay(3000)

    if(!(formData instanceof FormData)){
        return {
        formState:{...prevState.formState},
        errors:['Dadods Invalidos']
       }
    }

    const title = formData.get('title')?.toString() || ''
    const howPublished = formData.get('published')?.toString() || ''
    const id = formData.get('id')?.toString() || ''
    const isAuthenticated = await verifyLoginSession()

    if(!id || typeof id!=='string'){
        return {
        formState:{...prevState.formState},
        errors:['Dadods Invalidos']
       }
    }

    const published = !!howPublished


    const formDataToObj = Object.fromEntries(formData.entries())
    console.log(' TONHA &&& KATIA')
    console.log(isAuthenticated)
    console.log(' TONHA &&& KATIA')

    if(!isAuthenticated){
        return {
            formState:makePublicPostFillOrEmpt(formDataToObj),
            errors:['faça login em outra aba antes de salvar']
        }
    }

    // const formDataToObjKonverted = makePublicPostFillOrEmpt(formDataToObj)

    // formDataToObjKonverted.published = published
    // console.log('SHOW ME THE MEANING OF BEING...')
    // console.log(formDataToObjKonverted)
    // console.log('SHOW ME THE MEANING OF BEING...')

    const zodAllParsed = PostUpdateSchema.safeParse(formDataToObj)

    if(!zodAllParsed.success){
         const errors = getZodErrorMessages(zodAllParsed.error.format())

         return{
            errors,
            formState:makePublicPostFillOrEmpt(formDataToObj)
            // formState:{...prevState.formState}

         }
    }

    const allValidPostFields = zodAllParsed.data

    const obejectToDataBase = {
        ...allValidPostFields,
        // updatedAt:new Date().toISOString(),
        // updatedAt:new Date().toISOString(),
        // id:uuidV4(),
        // slug:makeSlugFromText(allValidPostFields.title)



    }

   console.log('__HEY JUDE WE ARE ALL HERE__')
   console.log(allValidPostFields)
   console.log('__HEY JUDE WE ARE ALL HERE__')
   let postFromDb;
   try{
    // await drizzleDb.insert(postsTable).values(obejectToDataBase)
    postFromDb = await postRepository.update(id,obejectToDataBase)
   }catch(error: unknown){
        if(error instanceof Error){
           return{
            formState: makePublicPostFillOrEmpt(obejectToDataBase),
            errors:[error.message]
           }
        }

        return {
            formState: makePublicPostFillOrEmpt(obejectToDataBase),
            errors:['erro desconhecido']
           }
   }
    // admin-cache
//    revalidateTag('posts','')
   revalidateTag('admin-cache','')
//    redirect(`/admin/post/${obejectToDataBase.}`)
   revalidateTag(`/admin/post/${id}`,'')



   return {
        formState: makePublicPostFromDB(postFromDb),

        errors:[],
        sucsses: new Date().toISOString()
     }

}
