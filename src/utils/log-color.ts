import {styleText} from 'util'


export function logColored(...msg: (string | number)[]){
   const messages = msg.map((message)=>{
    return styleText(['bgMagenta','bgBlue'], `${message}`)
   }).join(' ')

   console.log(styleText('black',messages))
}
