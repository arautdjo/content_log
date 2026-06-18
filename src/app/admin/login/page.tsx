import LoginForm from "@/components/Admin/LoginForm"
import { ErrorsMessages } from "@/components/ErrorsMessages"
import { Metadata } from "next"

export const dynamic = 'force-dynamic'

export const metadata:Metadata = {
    title:'Login'
}

export default async function AdminLoginPage(){

  const permiteLogin = !!Number(process.env.ALLOW_LOGIN)

  if(!permiteLogin){
    return(
        <ErrorsMessages
          content="Libere o login na diretiva ALLOW_LOGIN"
          contentTitle="403"
        />
    )
  }


    return (
        <LoginForm/>
    )
}
