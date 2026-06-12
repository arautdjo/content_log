'use client'

import { loginAction } from "@/actions/login/login-action"
import { Button } from "@/components/Button"
import { InputText } from "@/components/InputText"
import { LogInIcon } from "lucide-react"
import {useActionState, useEffect} from 'react'
import { toast } from "react-toastify"

export const dynamic = 'force-dynamic'

export default function LoginForm(){
    const initialState = {
        username: '',
        error:''
    }

    const [state,action,isPending] = useActionState(loginAction,initialState);

    useEffect(()=>{
      if(state.error){
          toast.dismiss()
          toast.error(state.error)
      }
    },[state])

    return (
    <div
     className={`
        flex py-16 text-center items-center
        justify-center max-w-sm mt-16 mb-32
        mx-auto
        `}
     >
        <form action={action} className='flex-1 flex flex-col gap-6 mb-16'>
                 <InputText
                 labelText="Usuario"
                 name="username"
                 placeholder="Digite seu usuario..."
                 type="text"
                 defaultValue={state?.username}
                 disabled={isPending}
                 />

                 <InputText
                 labelText="Senha"
                 name="senha"
                 placeholder="Sua senha"
                 type="passwrod"
                //  defaultValue={formState.id}
                 disabled={isPending}
                 />

                 <div>
                    <Button type="submit" className="mt-4" disabled={isPending}>
                        <LogInIcon/>
                       Logar
                    </Button>
                    {state.error && (<p className="text-red-600">{state.error}</p>)}
                </div>
        </form>

     </div>
    )
}
