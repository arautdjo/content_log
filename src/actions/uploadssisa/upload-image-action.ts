'use server'

// import { IMAGE_SERVER_URL, IMAGE_UPLOAD_DIRECTORY, UPIMAGE_MAX_SIZE } from "@/lib/constants"
import { assyncDelay } from "@/utils/async-delay"
import { logColored } from "@/utils/log-color"
import { mkdir, writeFile } from "fs/promises"
import { extname, resolve } from "path"

type uploadImageActionResult = {
    url:string,
    error:string
}

export async function uploadImageAction(formData:FormData): Promise<uploadImageActionResult>{
    await assyncDelay(4000)
    const makeResult = ({url='',error=''})=>({url,error})

    if(!(formData instanceof FormData)){
        return makeResult({error:'ESTE FORMULARIO É FALSO'})

    }

    const arquivo = formData.get('arquivo')



    if(!(arquivo instanceof File)){
        return makeResult({error:'FAKE IMAGE...'})

    }

     const uploadMaxSize = Number(process.env.NEXT_UPIMAGE_MAX_SIZE) || 921600
     if(arquivo.size>uploadMaxSize){
        return makeResult({error:'too big of a file *'})

     }

     logColored('::: UEPAAAAA :::')
     logColored(arquivo.type)
     logColored('::: UEPAAAAA :::')

     if(!arquivo.type.startsWith('image/')){
        return makeResult({error:'__wrong type for file__'})

     }

     console.log('mundança para detecção...')
     const arquivoExtencao = extname(arquivo.name)
     const uniqueImageNAme = `${Date.now()}${arquivoExtencao}`
     const uploadDir = process.env.IMAGE_UPLOAD_DIRECTORY || 'uploads'

     const uploadsFullPath = resolve(
         process.cwd(),
         'public',
         uploadDir
        )



    await mkdir(uploadsFullPath, {recursive:true})


    const JSImageBuffer = await arquivo.arrayBuffer();
    const NodeImageBuffer = Buffer.from(JSImageBuffer)


    const FileAssembled = resolve(uploadsFullPath,uniqueImageNAme)

    logColored('MATCHING WE HAVE::::')
    logColored(FileAssembled)
    logColored('MATCHING WE HAVE::::')

    await writeFile(FileAssembled,NodeImageBuffer)

     const serverUrl = process.env.IMAGE_SERVER_URL || 'http://localhost:3000/uploadsiso'

    const imageUrl = `${serverUrl}/${uniqueImageNAme}`
    // const imageUrl01 = resolve(IMAGE_SERVER_URL,uniqueImageNAme)

    return makeResult({url:imageUrl})
}
