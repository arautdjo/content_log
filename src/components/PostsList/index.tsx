import { postRepository } from "@/repositories/post";

export default async function PostLists(){

    const allPosts = await  postRepository.findAll();

    return(
        <div>
          {allPosts.map((elemento)=>{
            return <p key={elemento.id}>{elemento.title}</p>
        })}
        </div>
    )


}
