'use server'

import {revalidatePath} from 'next/cache'
import {revalidateTag} from 'next/cache'

export async function revalidateExampleAction(formData: FormData){
    const calminho = formData.get('caminho') as string || ''
    console.log('')
    console.log('')
    console.log('')
    console.log('ESTOU EM UMA **SRVER-ACTION** ::  ',calminho)
    console.log('')
    console.log('')
    console.log('')

    revalidatePath(calminho)
    // revalidateTag('randomUser','')
    revalidateTag('posts','')
    revalidateTag('post-o-papel-do-silencio-em-uma-vida-criativa','')

}
