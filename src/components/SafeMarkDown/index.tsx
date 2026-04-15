import ReactMarkDown from 'react-markdown'
import rehypeSanitize from 'rehype-sanitize'
import remarkGfm from 'remark-gfm'

type SafeMarkDownProps = {
    markdown:string
}

export function SafeMarkDown({markdown}: SafeMarkDownProps){
  return(
    <div className={`
        prose prose-white
        w-full max-w-none
        overflow-hidden
        prose-a:transition
        prose-a:no-underline
        prose-a:text-blue
        prose-a:text-blue-500
        prose text-white
        prose-a:hover:text-blue-300
        prose-a:hover:underline
        prose-img:mx-auto
        md:prose-lg

        `}>
        <ReactMarkDown
         rehypePlugins={[rehypeSanitize]}
         remarkPlugins={[remarkGfm]}
         components={{
            table: ({node,...props})=>{

                if(!node?.children) return ''
                 return(
                    <div className='overflow-x-auto'>
                       <table className='w-full min-w-[600px]' {...props}/>
                    </div>
                 )
            }
         }}
        >
            {markdown}
        </ReactMarkDown>
    </div>
  )
}
