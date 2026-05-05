'use client'



type DialogProps = {
    isVisible?: boolean,
    title:string,
    content:React.ReactNode
    onConfirm: ()=>void,
    onCancel: ()=>void,
    disabled?:boolean
}

export function Dialog({isVisible=false, title,content,onCancel,onConfirm,disabled=false}: DialogProps){

    if(!isVisible) return null

    function checkDisabled(){
        if(disabled) return

        onCancel()
    }

    return(
        <div className={`
                bg-black/50 fixed
                 inset-0
                backdrop-blur-xs z-50
                flex items-center justify-center
                `}
                role="dialog"
                aria-modal={true}
                aria-labelledby="dialog-title"
                aria-describedby="dialog-description"
                onClick={checkDisabled}
                >
                 <div className={`
                    bg-slate-400 p-6 rounded-lg max-w-2xl mx-6
                      flex flex-col gap-6 shadow-lg shadow-blue-500/30
                      text-center
                    `}
                    onClick={(e)=>e.stopPropagation()}
                    >
                    <h3 id="dialog-title" className="text-xl font-extrabold">
                      {title}
                    </h3>
                    <div id="dialog-description">
                        {content}
                    </div>
                   <div className="flex items-center justify-around">
                    <button className={`
                            bg-slate-700 text-white
                             hover:bg-slate-500 transition
                             flex items-center justify-center
                             py-2 px-4 rounded-lg cursor-poiner
                        `} autoFocus
                        onClick={onCancel}
                        >Cancelar</button>
                    <button className={`
                          bg-blue-700 text-white
                             hover:bg-blue-500 transition
                             flex items-center justify-center
                             py-2 px-4 rounded-lg cursor-poiner
                             disabled:cursor-not-allowed disabled:bg-slate-200
                        `}
                        onClick={onConfirm}
                        disabled={disabled}
                        >Ok</button>
                   </div>
                 </div>
               </div>
    )
}
