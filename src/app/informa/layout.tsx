import { Metadata } from "next"

type infoLayProps ={
    children: React.ReactNode
}

export const metadata: Metadata ={
    title: 'Beatle Poem',
    description: "a little peoam about beatles's jorney"
}

export default function InforLayout({children}: infoLayProps){
   return(

    <div>
        {children}
    </div>
   )
}