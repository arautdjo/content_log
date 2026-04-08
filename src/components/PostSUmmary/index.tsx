import { formatDateTime, formatDistanceToNow } from "@/utils/formate-datetime";
import { PostHeading } from "../PostHeading";

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
                        <time
                            dateTime={createdAt}
                            className="text-slate-600 text-sm"
                            title={formatDistanceToNow(createdAt)}
                            >
                            {formatDateTime(createdAt)}
                        </time>
                            <PostHeading url={postLink} as={postHeading}>
                                {title}
                            </PostHeading>


                        <p>
                            {excerpt}
                        </p>

                    </div>
   )
}
