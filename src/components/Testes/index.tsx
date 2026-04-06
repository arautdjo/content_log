'use client'

import {useEffect} from 'react'


export default function Teste(){

    useEffect(()=>{
       console.log('HERE GOES THE TRIALSS....')
       console.log(document.documentElement.classList.add('dark'))
       console.log('HERE GOES THE TRIALSS....')
    },[])

    return(
        <>
        <div className='h-screen w-screen bg-red-500 dark:bg-green-500 flex items-center justify-center text-white text-2xl'>
            bateria de testes em execução...
        </div><br/><br/>
        <p className='test-postcss'>
            rapaz vamos esclarecer algo aqui pfv
        </p>

        </>
    )
}
