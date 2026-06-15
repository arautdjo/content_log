
import { decriptHased64, generateHashedPass } from "@/utils/generate-hashed-pass";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";

import {SignJWT,jwtVerify} from 'jose'

const JWTsecretKey = process.env.JWT_SECRET_KEY;
const jwtEncodedKey = new TextEncoder().encode(JWTsecretKey)
const loginExpSeconds = Number(process.env.LOGIN_EXPIRATION_SECONDS) || 86400
const loginExpStr = process.env.LOGIN_EXPIRATION_STRING || '1d'
const loginCookieName = process.env.LOGIN_COOKIE_NAME || 'loginsession'

type JWTPayload  = {
    username:string,
    expiredAt:Date
}


export async function hahsPassword(senha:string){

    const hash = await bcrypt.hash(senha,10)

   const base64d = Buffer.from(hash).toString('base64')

    const base64Turned = await  generateHashedPass(hash)

    return base64Turned
 }



export async function verifyPassword(senha:string,baseToHash:string){
    const hashBack = await decriptHased64(baseToHash)

    const isValid = await bcrypt.compare(senha,hashBack)
    return isValid

 }


 export async function createLoginSession(username: string){
   const expiredAt = new Date(Date.now() + (loginExpSeconds*1000))
   const cookieSession = await signInJwt({username,expiredAt})
   const setCookie = await cookies()

   setCookie.set(loginCookieName,cookieSession,{
    httpOnly:true,
    secure:true,
    sameSite:'strict',
    expires:expiredAt
   })
 }


 export async function deleteLoginSession(){
    const leCookie = await cookies()
    leCookie.set(loginCookieName,'',{expires:Date.now()})
    // leCookie.delete()
 }


 export async function signInJwt(jwtpayload: JWTPayload){
     return new SignJWT(jwtpayload)
     .setProtectedHeader({
        alg:'HS256',
        typ:'JWT'
     }).setIssuedAt()
       .setExpirationTime(loginExpStr)
       .sign(jwtEncodedKey)
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




