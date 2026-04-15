import { PostHeading } from "../PostHeading";
import { PostDate } from "../PostDate";

type PostSUmmaryProps = {
    postHeading: 'h1' | 'h2',
    postLink:string,
    createdAt:string,
    title:string,
    excerpt:string
}

export function PostSUmmary({
    postHeading,
    postLink,
    createdAt,
    excerpt,
    title
}:PostSUmmaryProps){
   return (
    <div className="flex flex-col gap-4 sm:justify-center">

        <PostDate createdAt={createdAt}/>

        <PostHeading url={postLink} as={postHeading}>
            {title}
        </PostHeading>


        <p>
            {excerpt}
        </p>

    </div>
   )
}
