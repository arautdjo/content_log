import { PostModel } from '@/models/posts/posts-model';
import {PostRepository} from './post-repository'
import { drizzleDb } from '@/db/drizzle';
// import { desc } from 'drizzle-orm';
import { postsTable } from '@/db/drizzle/schemas';
import { logColored } from '@/utils/log-color';
import { assyncDelay } from '@/utils/async-delay';

import { eq } from 'drizzle-orm';

// implements PostRepository
const simulateWaitInMs = Number(process.env.SIMULATE_WAIT_IN_MS) || 0
export class DrizzlePostRepository implements PostRepository{

       async findAllPublic(): Promise<PostModel[]> {
        await assyncDelay(simulateWaitInMs, true)

              logColored('Drizzle - findAllPublic- ', Date.now())
             const allPublicPosts = await drizzleDb.query.posts.findMany({
                orderBy: (posts,{desc})=>desc(postsTable.createdAt),
                where:(posts,{eq})=>eq(postsTable.published,true)
             })

             return allPublicPosts
       }

       async findBySlugPublic(slug:string): Promise<PostModel>{
             await assyncDelay(simulateWaitInMs,true)

              logColored('Drizzle findBySlugPublic', Date.now())

             const postBySLug = await drizzleDb.query.posts.findFirst({
                where: (posts,{and,eq})=> and(eq(posts.published,true),eq(posts.slug,slug))
             })

             if(!postBySLug){
               throw new Error('não ha post referente a esta slug...')
             }

             return postBySLug;
       }

       async findAll(): Promise<PostModel[]>{
              await assyncDelay(simulateWaitInMs,true)

              logColored('Drizzle findAll - ', Date.now())

        const allPosts = drizzleDb.query.posts.findMany({
            orderBy: (posts,{desc})=>desc(posts.createdAt)
        })

        return allPosts

       }

       async findById(id:string): Promise<PostModel>{
              await assyncDelay(simulateWaitInMs,true)

              logColored('Drizzle - findById', Date.now())

            const postById = await drizzleDb.query.posts.findFirst({
                where:(posts,{eq})=>eq(posts.id,id)
            })

            if(!postById){
              throw new Error('Não ha post para este ID.')
            }

            return postById
       }

       async create(reg:PostModel):Promise<PostModel>{
          const postExists = await drizzleDb.query.posts.findFirst({
            where:(posts,{eq,or})=>or(eq(posts.id,reg.id),eq(posts.slug,reg.slug)),
            columns:{id:true}
          })

          if(!!postExists){
            throw new Error('Um ID correspondente ja existe em nossa base de dados')
          }

          await drizzleDb.insert(postsTable).values(reg)
          return reg;
       }


       async delete(identifica: string):Promise<PostModel>{
         const isThere = await drizzleDb.query.posts.findFirst({
            where:(posts,{eq})=>eq(posts.id,identifica),
         })

         if(!isThere){
            throw new Error('Não ha registro para esse ID')
         }


             console.log('VAMOS FAZER A PESAGEM')
             console.log(isThere)
             console.log(isThere.id === identifica)

             console.log('VAMOS FAZER A PESAGEM')
             await drizzleDb.delete(postsTable).where(eq(postsTable.id, isThere.id))


         return isThere
       }

       async update(
        identidade: string,
        newpostData: Omit<PostModel,'id' | 'slug' | 'createdAt' | 'updatedAt'>
       ):Promise<PostModel>{
          const recordExists = await drizzleDb.query.posts.findFirst({
              where:(posts,{eq})=>eq(posts.id, identidade)
          })

          if(!(!!recordExists)){
              throw new Error('Não encontramos o ID que se esta tentando atualizar')
          }

           const newDataToCommit = {
              ...recordExists,
              ...newpostData,
              updatedAt:new Date().toISOString()
           }

           await drizzleDb
           .update(postsTable)
           .set(newDataToCommit)
           .where(eq(postsTable.id, identidade))

           return newDataToCommit

       }


}


// (async ()=>{
//         await assyncDelay(MILULATE_WAIT_IN_MS,true)

//           const repo = new DrizzlePostRepository()
//           const postsReceived = await repo.findAllPublic()
//           const postBySLug = await repo.findBySlugPublic('o-papel-do-silencio-em-uma-vida-criativa')
//           console.log('--JESUS CRISTO É O SENHOR --')
//           console.log(postBySLug)
//           console.log('--JESUS CRISTO É O SENHOR --')
// })()
