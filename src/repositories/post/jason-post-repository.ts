import { PostModel } from "@/models/posts/posts-model";
import { PostRepository } from "./post-repository";
import { readFile, writeFile } from 'fs/promises';
import {
    JSON_POST_SEED_PATH
 } from "@/lib/constants";
import { resolve } from "path";
import { SofaIcon } from "lucide-react";
import { makeSlugFromText } from "@/utils/make-slug-from-text";

const simulateWaitInMs = Number(process.env.SIMULATE_WAIT_IN_MS) || 0
export class JsonPostRepository implements PostRepository{

    private async simulateWait(){
        if(simulateWaitInMs<=0) return

        return new Promise(resolve=>setTimeout(resolve,simulateWaitInMs))
    }

     private async readFromDisk(): Promise<PostModel[]>{
        await this.simulateWait()
         const jsonCOntent = await readFile(JSON_POST_SEED_PATH,'utf-8');
         const jsonParsed =  JSON.parse(jsonCOntent)
         const { posts } = jsonParsed;
         return posts
     }

    async findAllPublic(): Promise<PostModel[]>{
        console.log('\n', 'findAllPublic', '\n', 'BEFORE')
        await this.simulateWait();
        const posts = await this.readFromDisk();
        console.log('\n', 'findAllPublic', '\n', 'AFTER')

         return posts.filter(post=>post.published)

    }

    async findById(id: string): Promise<PostModel> {
          const allPosts = await this.readFromDisk();
          const postById = allPosts.find(post => post.id === id )

          if(!postById){
              throw new Error('Post não encontrado. Id inexistente')
          }

          return postById
    }



    async findBySlugPublic(slug: string): Promise<PostModel> {
          const allPosts = await this.readFromDisk();
          const postBySlug = allPosts.find(post => post.slug === slug )

          if(!postBySlug){
              throw new Error('Post não encontrado. SLug inexistente')
          }

          return postBySlug
    }

    async findAll(): Promise<PostModel[]> {
            const allPosts = await this.readFromDisk();
            return allPosts
    }

//     private async writeToDisk(posts: PostModel[]): Promise<void> {
//     const jsonToString = JSON.stringify({ posts }, null, 2);
//     await writeFile(JSON_POST_SEED_PATH, jsonToString, 'utf-8');
//   }

    private async writeOnDisk(posts: PostModel[]):Promise<void>{
       const caminho = resolve('src','db','seeds','posts.json')
       const readyToWrite = JSON.stringify({ posts },null,2)
       await writeFile(caminho,readyToWrite,'utf-8')
    }


     async create(registro: PostModel):Promise<PostModel>{


        let confirma = JSON.stringify({});

        try{

            confirma = await readFile(resolve('src','db','seeds','posts.json'),'utf-8')

        }catch(error){
            console.log('I HAVE THE FULL FILE')
             console.log(error)
            console.log('I HAVE THE FULL FILE')
        }

        const confirmaPrsed = JSON.parse(confirma)
        const conformRecord = confirmaPrsed
                              .posts
                              .find((rec: PostModel)=>
                                rec.id === registro?.id || rec.slug ===registro?.slug)
        if(conformRecord?.id){
            throw new Error("Um registro com a sluf e id foi encontrado na base de dados")
        }

        confirmaPrsed.posts.push(registro)

        await this.writeOnDisk(confirmaPrsed.posts)
        return confirmaPrsed
     }


     async update(
         id: string,
         record: Omit<PostModel, 'id' | 'slug' | 'createdAt' | 'updatedAt'>
    ): Promise<PostModel>{

        const isRecord = await readFile(resolve('src','db', 'seeds','posts.json'),'utf-8')
        if(!isRecord){
          throw new Error('Registro não encontrado em nossa base de dados')
        }

        const isRecordKonverted = JSON.parse(isRecord)

        const recordTarget = isRecordKonverted
                             .posts
                             .findIndex((rec:PostModel)=>rec.id === id)



        const updatedRec = {
            ...isRecordKonverted.posts[recordTarget],
            ...record,
            slug:makeSlugFromText(record.title)
        }

                isRecordKonverted.posts[recordTarget] = updatedRec



        await this.writeOnDisk(isRecordKonverted.posts)
        return isRecordKonverted.posts
     }


     async delete(id: string):Promise<PostModel>{
       const postExists = await readFile(resolve('src','db','seeds','posts.json'),'utf-8')

       if(!postExists){
           throw new Error('o post que esta tentando deletar, nao existe')
       }

       const postExistsKonv = JSON.parse(postExists)
         const resultingBase = postExistsKonv
                               .posts
                               .filter((rec:PostModel)=>rec.id!==id)


          await this.writeOnDisk(resultingBase)
          return resultingBase
      }

}


const teste = new JsonPostRepository();


(
    async function uepa(){

        let posts;
        try {

            posts = await  teste.findById('bf5c7dae-back-06a4-4155-9c01-a56e02956496');
        } catch (error) {
           console.log('XIII, DEU RUIM, AQUI!')
        }


            console.log('=============')
            console.log(posts)
            console.log('=============')

    }

)()
