type SpinLoaderProps  ={
    className?: string
}

export function SpinLoader({className = ''}: SpinLoaderProps){
    return(
        <div className={`
        flex items-center justify-center
        ${className}


        `}>
            <div className={`
                w-10 h-10 border-5 border-t-transparent
                border-slate-700 rounded-full animate-spin
                `}>

            </div>
        </div>
    )
}
