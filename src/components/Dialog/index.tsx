'use client'

export function Dialog(){
    return(
        <div className={`
                bg-black/50 fixed
                 inset-0
                backdrop-blur-xs z-50
                flex items-center justify-center
                `}>
                 <div className={`
                    bg-slate-400 p-6 rounded-lg max-w-2xl mx-6
                      flex flex-col gap-6 shadow-lg shadow-blue-500/30
                      text-center
                    `}>
                    <h3 className="text-xl font-extrabold">
                      Aqui Será um modal...
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Minima id consequatur,
                        repellat ad doloribus dolor accusantium
                        tenetur eveniet expedita dignissimos sint
                        dolorem eligendi, a et odio adipisci odit,
                        sequi deleniti.
                    </p>
                   <div className="flex items-center justify-around">
                    <button className={`
                            bg-slate-700 text-white 
                             hover:bg-slate-500 transition
                             flex items-center justify-center
                             py-2 px-4 rounded-lg cursor-poiner
                        `} autoFocus >Cancelar</button>
                    <button className={`
                          bg-blue-700 text-white 
                             hover:bg-blue-500 transition
                             flex items-center justify-center
                             py-2 px-4 rounded-lg cursor-poiner
                        `}>Ok</button>
                   </div>
                 </div>
               </div>
    )
}