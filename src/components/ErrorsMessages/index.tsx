type ErrorsMessagesProps = {
   pageTitle?:string,
   contentTitle:string
   content: React.ReactNode
}

export function ErrorsMessages({content, contentTitle,pageTitle=''}: ErrorsMessagesProps){

    return(
        <>
            {pageTitle && <title>{pageTitle}</title>}
            <div className={`
                    min-h-[320px] bg-slate-800 text-slate-100
                    mb-16 p-8 rounded-3xl flex items-center justify-center
                    text-center
                `}>

                <div className="flex flex-col gap-3">
                    <h1 className="text-7xl font-extrabold">{contentTitle}</h1>
                    <div>
                        {content}
                    </div>
                </div>
            </div>
        </>
    )

}
