import Link from "next/link";

export function Footer(){
    return(
         <footer className="text-xl font-bold text-center py-8">
            <p>
                <span>

                Copy  right &copy; {new Date().getFullYear()} -
                </span>
                 <Link href='/#topado' scroll={true}>The Blog</Link>
            </p>
        </footer>
    )
}
