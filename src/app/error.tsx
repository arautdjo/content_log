'use client'

import { useEffect } from "react";

import { ErrorsMessages } from "@/components/ErrorsMessages";

type ErrorBoundaryProps = {
  error: Error,
  reset?: ()=>void
}

export default function ErrorBoundary({error}: ErrorBoundaryProps){

   useEffect(()=>{
     console.log(error)
   },[error])

    return(
      <ErrorsMessages
        content="Ocorreu um erro que ainda nao pode ser tratado, tente novamente mais tarde"
        contentTitle="501"
        pageTitle="Internal Server Error"
      />
    )
}
