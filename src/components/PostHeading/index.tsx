import Link from "next/link";

type PostHeadingProps = {
    children:React.ReactNode,
    url:string,
    as?: 'h1' | 'h2'
}

export function PostHeading({children, url, as: TagHead='h2'}: PostHeadingProps){
    const postHeadingMap = {
        h1: 'text-2xl/tight mb-4 block sm:text-4xl font-extrabold',
        h2: 'text-2xl/tight mb-4 font-bold'
    }

    const commonClasses = ''


    return(
        <TagHead className={postHeadingMap[TagHead]+" "+commonClasses}>
                <Link href={url} className="group-hover:text-slate-600 transition">
                  {children}
                </Link>
        </TagHead>
    )
}
