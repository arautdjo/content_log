'use client'

import { uploadImageAction } from "@/actions/uploads/upload-image-action"
import { Button } from "@/components/Button"
import { UPIMAGE_MAX_SIZE } from "@/lib/constants"
import { ImageUpIcon } from "lucide-react"
import {useRef,useState, useTransition} from 'react'
import { toast } from "react-toastify"

export function ImageUploader(){

    const fileInputRef = useRef<HTMLInputElement | null >(null)
    const [theFile,setTheFile] = useState<string>('')
    const [igm,setImg] = useState('')
    const [isUploading,TheTransition] = useTransition()

    function handleInputFileClick(){
         if(!fileInputRef.current) return

         fileInputRef.current.click()
    }

     function validateChangedImage(){
        // eslint-disable-next-line
       let fileInputCurrent = fileInputRef.current;
        // fileInputCurrent = undefined
       if(!fileInputCurrent) return

         const theFiles = fileInputCurrent.files?.[0];

         if(!theFiles) return


         if(theFiles.size > UPIMAGE_MAX_SIZE){
              toast.error(`Image too Big. Max allowed of:  ${UPIMAGE_MAX_SIZE} `)
              fileInputCurrent.value = ''
              setImg('')
              return
         }


        // Object.defineProperty(theFiles, "type", {
        //         writable: true,
        //         configurable: true,
        //         enumerable:true,
        //         value:true
        //    });



        // console.log('@@@@@@@ peraew @@@@@@@@')
        // console.log(Object.getOwnPropertyDescriptor(theFiles, "type"))
        // console.log('@@@@@@@ peraew @@@@@@@@')

        const imageFortest = new File(
            [theFiles],
            theFiles.name,
            {
                type:''
            }
        );

         setTheFile(theFiles.name)
         const nowForm = new FormData()

         nowForm.append('arquivo', theFiles)

          console.log('%%% ROCKY RACOON %%%')
            console.log(theFiles)
        console.log('%%% ROCKY RACOON %%%')

         fileInputCurrent.value = ''

         TheTransition(async()=>{
            const resultado = await uploadImageAction(nowForm);

            if(resultado.error){
                 toast.error(resultado.error)
                 fileInputCurrent.value = ''
                 setImg('')
                 return
            }

            toast.success('Imagem no Servidor')
            setImg(resultado.url)
         })
    }

    return(
        <div className="flex flex-col gap-4 py-4">
            <Button
              onClick={handleInputFileClick}
              type="button"
              className="self-start"
              disabled={isUploading}
              >
                <ImageUpIcon/>
                Enviar Uma Imagem
            </Button>
            {!!igm && (
                <div className="flex flex-col gap-4 [&_img]:rounded-lg">
                    <p>
                        <b>URL: </b>{igm}

                    </p>
                    {/* eslint-disable-next-line */}
                    <img
                    src={igm}
                    />
                </div>
            )}
            <p>
                {theFile}
            </p>
            <input
             className="hidden"
             name="file"
             type="file"
             ref={fileInputRef}
             disabled={isUploading}
             onChange={validateChangedImage}
             />
        </div>
    )
}
