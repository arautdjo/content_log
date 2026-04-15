import { formatDateTime, formatDistanceToNow } from "@/utils/formate-datetime";

type PostDateProps = {
    createdAt:string
}

export function PostDate({createdAt}: PostDateProps){
    return(
        <time
            dateTime={createdAt}
            className="text-slate-600 text-sm"
            title={formatDistanceToNow(createdAt)}
            >
            {formatDateTime(createdAt)}
        </time>
    )
}
