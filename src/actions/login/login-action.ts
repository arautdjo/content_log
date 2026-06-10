import { assyncDelay } from "@/utils/async-delay";

type loginActionState = {
    username:string,
    error:string
}

export async function loginAction(state:loginActionState, formdate:FormData){
  await assyncDelay(4000)

  return{
    username:'nome de teste',
    error:'Mandagem de erro - teste'
  }

}
