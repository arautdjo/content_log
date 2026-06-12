
import { decriptHased64, generateHashedPass } from "@/utils/generate-hashed-pass";
import bcrypt from "bcryptjs";

export async function hahsPassword(senha:string){

    const hash = await bcrypt.hash(senha,10)

   const base64d = Buffer.from(hash).toString('base64')



    //  console.log(Buffer.from(base64d,'base64').toString('utf-8'))

    const base64Turned = await  generateHashedPass(hash)

    return base64Turned
 }

export async function verifyPassword(senha:string,baseToHash:string){
    const hashBack = await decriptHased64(baseToHash)
    // const hasedBack = Buffer.from(baseToHash,'base64').toString('utf-8')

    const isValid = await bcrypt.compare(senha,hashBack)
    return isValid

 }

// (async ()=>{
// const confirma = await verifyPassword(
//     'euler',
//     'ZXVsZXI='
// )

// console.log('--I AI--')
// console.log(confirma)
// console.log('--I AI--')
// })()




