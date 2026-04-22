import { PostModel } from '@/models/posts/posts-model';
import {PostRepository} from './post-repository'
import { drizzleDb } from '@/db/drizzle';
// import { desc } from 'drizzle-orm';
import { postsTable } from '@/db/drizzle/schemas';

// implements PostRepository

export class DrizzlePostRepository implements PostRepository{

       async findAllPublic(): Promise<PostModel[]> {
              console.log('from within drizzle repository')
             const allPublicPosts = await drizzleDb.query.posts.findMany({
                orderBy: (posts,{desc})=>desc(postsTable.createdAt),
                where:(posts,{eq})=>eq(postsTable.published,true)
             })

             return allPublicPosts
       }

       async findBySlugPublic(slug:string): Promise<PostModel>{
              console.log('from within drizzle repository')

             const postBySLug = await drizzleDb.query.posts.findFirst({
                where: (posts,{and,eq})=> and(eq(posts.published,true),eq(posts.slug,slug))
             })

             if(!postBySLug){
               throw new Error('não ha post referente a esta slug...')
             }

             return postBySLug;
       }

       async findAll(): Promise<PostModel[]>{
              console.log('from within drizzle repository')

        const allPosts = drizzleDb.query.posts.findMany({
            orderBy: (posts,{desc})=>desc(posts.createdAt)
        })

        return allPosts

       }

       async findById(id:string): Promise<PostModel>{
              console.log('from within drizzle repository')

            const postById = await drizzleDb.query.posts.findFirst({
                where:(posts,{eq})=>eq(posts.id,id)
            })

            if(!postById){
              throw new Error('Não ha post para este ID.')
            }

            return postById
       }

}


(async ()=>{
          const repo = new DrizzlePostRepository()
          const postsReceived = await repo.findAllPublic()
          const postBySLug = await repo.findBySlugPublic('o-papel-do-silencio-em-uma-vida-criativa')
          console.log('--JESUS CRISTO É O SENHOR --')
        //   postsReceived.forEach(post=>console.log(post.slug))
          console.log(postBySLug)
          console.log('--JESUS CRISTO É O SENHOR --')
})()
