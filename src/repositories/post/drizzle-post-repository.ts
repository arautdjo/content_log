import { PostModel } from '@/models/posts/posts-model';
import {PostRepository} from './post-repository'
import { drizzleDb } from '@/db/drizzle';
// import { desc } from 'drizzle-orm';
import { postsTable } from '@/db/drizzle/schemas';
import { logColored } from '@/utils/log-color';
import { assyncDelay } from '@/utils/async-delay';
import { MILULATE_WAIT_IN_MS } from '@/lib/constants';

// implements PostRepository

export class DrizzlePostRepository implements PostRepository{

       async findAllPublic(): Promise<PostModel[]> {
        await assyncDelay(MILULATE_WAIT_IN_MS,true)

              logColored('Drizzle - findAllPublic- ', Date.now())
             const allPublicPosts = await drizzleDb.query.posts.findMany({
                orderBy: (posts,{desc})=>desc(postsTable.createdAt),
                where:(posts,{eq})=>eq(postsTable.published,true)
             })

             return allPublicPosts
       }

       async findBySlugPublic(slug:string): Promise<PostModel>{
             await assyncDelay(MILULATE_WAIT_IN_MS,true)

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
              await assyncDelay(MILULATE_WAIT_IN_MS,true)

              logColored('Drizzle findAll - ', Date.now())

        const allPosts = drizzleDb.query.posts.findMany({
            orderBy: (posts,{desc})=>desc(posts.createdAt)
        })

        return allPosts

       }

       async findById(id:string): Promise<PostModel>{
              await assyncDelay(MILULATE_WAIT_IN_MS,true)

              logColored('Drizzle - findById', Date.now())

            const postById = await drizzleDb.query.posts.findFirst({
                where:(posts,{eq})=>eq(posts.id,id)
            })

            if(!postById){
              throw new Error('Não ha post para este ID.')
            }

            return postById
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
