import { drizzleDb } from "."
import { postsTable } from "./schemas"

(async ()=>{
    const postagens = await  drizzleDb.select().from(postsTable)
    console.log('--AT DISPLAY--')
    console.log(postagens)
    console.log('--AT DISPLAY--')
})()
