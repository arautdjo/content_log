import { ErrorsMessages } from "@/components/ErrorsMessages";

export default function NotFoundPage(){
    return(
        <>
           <ErrorsMessages
            content={<p>the page you are reaching for do not exist</p>}
            contentTitle='404 😫'
            pageTitle='Pagina Não Encontrada'
           />

        </>
    )
}
