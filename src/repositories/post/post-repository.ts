import { PostModel } from "@/models/posts/posts-model";

export interface PostRepository{
   findAll(): Promise<PostModel[]>
   findById(id:string): Promise<PostModel>
}
