'use server'

import { createLoginSession, verifyPassword } from "@/lib/login/manage-login";
import { assyncDelay } from "@/utils/async-delay";
import { redirect } from "next/navigation";

type loginActionState = {
    username:string,
    error:string
}

export async function loginAction(state:loginActionState, formdate:FormData){
  await assyncDelay(4000)



  if(!(formdate instanceof FormData)){
      return{
         username:'nome de teste',
         error:'Dados invelidos e invalidados'
    }
  }

  const username = formdate.get('username')?.toString().trim() || ''
  const senha = formdate.get('senha')?.toString().trim() || ''

  const isValidUSer = username === process.env.LOGIN_USER

  if(username==='' || senha===''){
      return{
        username,
        error:'Digite o usuario e a senha'
      }
  }



  const isUserValid = process.env.LOGIN_USER
  const isValidatedPass = await verifyPassword(senha,process.env.LOGIN_PASS || '')



  if(!isUserValid || !isValidatedPass){

    return{
        username,
        error:'Usuario ou senhas invalidos'
      }

  }

  await createLoginSession(username)
  redirect('/admin/post')



}
