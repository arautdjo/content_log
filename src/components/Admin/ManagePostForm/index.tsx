'use client'

import { Button } from "@/components/Button";
import { InputCheckBox } from "@/components/InputCheckBox";
import { InputText } from "@/components/InputText";
import { MarkDownEditor } from "@/components/MarkDownEditor";
import {useState, useActionState,useEffect} from 'react'
import { ImageUploader } from "../ImageUploader";
import { PostModel } from "@/models/posts/posts-model";
import { makePublicPostFillOrEmpt, PublicPost } from "@/dto/post/dto";
import { createPostAction } from "@/actions/post/create-post-action";
import { toast } from "react-toastify";


type ManagePostFormProps = {
   DTOPost?:PublicPost
}

export function ManagePostForm({DTOPost}: ManagePostFormProps){

     const initialState = {
        formState:makePublicPostFillOrEmpt(DTOPost),
        errors:[]
     }

    const [state,theAction,isPendingn] = useActionState(createPostAction,initialState)
   const {formState} = state
    const [contentValue,setContentValue] = useState(formState?.content || '')


   useEffect(()=>{
     console.log('DANIEL TIGRE É MUITO CHATO')
     console.log(state)
     console.log('DANIEL TIGRE É MUITO CHATO')
     if(state.formState.content === ''){
         // eslint-disable-next-line react-hooks/set-state-in-effect
         setContentValue(state.formState.content)
     }
   },[state.formState])


   useEffect(()=>{
        if(state.errors.length>0){
              toast.dismiss()
              state.errors.forEach((err)=>{
                toast.error(err)
              })
        }
   },[state.errors])

    return(
       <form action={theAction} className='mb-16'>
             <div className="flex flex-col gap-6">
         <InputText
         labelText="ID"
         name="id"
         placeholder="ID gerado automaticamente"
         type="text"
         defaultValue={formState.id}
         readOnly
         />


         <InputText
         labelText="SLUG"
         name="slug"
         placeholder="SLUG gerada automaticamente"
         type="text"
         defaultValue={formState.slug}
         readOnly
         />


         <InputText
         labelText="Author"
         name="author"
         placeholder="Author name goes here"
         type="text"
         defaultValue={formState.author}
         />

         <InputText
         labelText="TITLE"
         name="title"
         placeholder="title goes here"
         type="text"
         defaultValue={formState.title}
         />


         <InputText
         labelText="Excerpt"
         name="excerpt"
         placeholder="summary goes here"
         type="text"
         defaultValue={formState.excerpt}
         />


        <MarkDownEditor
          labelText="Conteúdo"
          value={contentValue}
          setValue={setContentValue}
          textAreaName="content"
          disabled={false}
        />


            <ImageUploader/>



            <InputText
            labelText="URL da imagem de capa"
            name="coverImageUrl"
            placeholder="Please infor image URL"
            type="text"
            defaultValue={formState?.coverImageUrl}
         />

         <InputCheckBox
            labelText="Publicar?"
            name="published"
            type="checkbox"
            defaultChecked={formState?.published ? true : false}
         />


             <div>
                <Button type="submit" className="mt-4">
                   Enviar
                </Button>
             </div>
            </div>

          </form>
    )
}
