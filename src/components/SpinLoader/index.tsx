type SpinLoaderProps  ={
    containerClass?: string
}

export function SpinLoader({containerClass = ''}: SpinLoaderProps){
    return(
        <div className={`
        flex items-center justify-center bg-amber-400
        ${containerClass}


        `}>
            Spin Loading...
            <div className={`
                w-10 h-10 border-5 border-t-transparent
                border-slate-900 rounded-full animate-spin
                `}>

            </div>
        </div>
    )
}
