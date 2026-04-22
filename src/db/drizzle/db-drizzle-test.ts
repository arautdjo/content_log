import { eq } from "drizzle-orm"
import { drizzleDb } from "."
import { postsTable } from "./schemas"

(async ()=>{
    await drizzleDb.update(postsTable).set({
        title: 'BEWARE OF DARKNESS -- 18:37',
        published:true
    }).where(eq(postsTable.slug, 'o-papel-do-silencio-em-uma-vida-criativa'))
})()

// (async ()=>{
//     const recebido = await drizzleDb.select().from(postsTable)

//     console.log('OWNNNNN HERE')
//     console.log(recebido)
//     console.log('OWNNNNN HERE')
// })()
