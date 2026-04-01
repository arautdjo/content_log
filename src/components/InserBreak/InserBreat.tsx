type IBProps = {
    texto:string
}

export function InsertBreak({texto}:IBProps){
   const tranformedText = texto.replaceAll(/[,.]/g,"<br/>")


   return(
    <p dangerouslySetInnerHTML={{ __html: tranformedText }}/>
   )
}