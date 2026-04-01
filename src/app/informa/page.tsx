import { InsertBreak } from "@/components/InserBreak/InserBreat"

export default function Informa(){
    const theText = `Across the years, their melodies still gleam,
Four voices rising from a shared young dream.
In Liverpool streets where echoes first took flight,
They shaped the dark and tuned it into light.

A chord, a word, a revolution spun,
From “Love Me Do” to journeys never done.
With every note, the world felt rearranged,
And in their sound, a restless age was changed.

Though time moves on, their harmonies remain—
A timeless song still whispering their name.`;

    return(
         <div className="m-5">

             <InsertBreak texto={theText}/>
         </div>
           
        
    )
}