import { PostModel } from "@/models/posts/posts-model";
import { PostRepository } from "./post-repository";
import { resolve } from "path";
import { readFile } from 'fs/promises';

const ROOT_DIR = process.cwd();
const JSON_POST_SEED_PATH = resolve(ROOT_DIR,'src','db','seeds','posts.json');

export class JsonPostRepository implements PostRepository{
     private async readFromDisk(): Promise<PostModel[]>{
         const jsonCOntent = await readFile(JSON_POST_SEED_PATH,'utf-8');
         const jsonParsed =  JSON.parse(jsonCOntent)
         const { posts } = jsonParsed;
         return posts
     }

    async findAll(): Promise<PostModel[]>{
        const posts = await this.readFromDisk();
         return posts

    }

    async findById(id: string): Promise<PostModel> {
          const allPosts = await this.readFromDisk();
          const postById = allPosts.find(post => post.id === id )

          if(!postById){
              throw new Error('Post não encontrado...')
          }

          return postById
    }




}

// bf5c7dae-06a4-4155-9c01-a56e02956496

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
