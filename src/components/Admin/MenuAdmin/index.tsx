'use client'

// import {useState,useContext} from 'react'
import {useState,useEffect} from 'react'

import { CircleXIcon, FileTextIcon, HouseIcon, MenuIcon, PlusIcon } from "lucide-react";
import Link from "next/link";
import {usePathname} from 'next/navigation'
// import { ModalContext } from '@/components/BlockingModal';



export function MenuAdmin(){

    // const {isOpen,toggleSeting } = useContext(ModalContext)!
    const [isOpen,setIsOpen] =useState(false)
    const pathName = usePathname()
    const navClass = `
      bg-blue-900 text-slate-300 rounded-lg flex flex-col
       mb-8 sm:flex-row sm:flex-wrap ${!isOpen && 'overflow-hidden'} ${!isOpen && 'h-10'}
    `
    const linkClass = `
      [&>svg]:w-[16px] [&>svg]:h-[16px] px-4 flex transition hover:bg-blue-800
      items-center justify-start gap-2 h-10 shrink-0 rounded-lg
    `
     function toggleOpen(){
        setIsOpen(old=>!old)
        // toggleSeting(old=>!old)

     }

     const openCLiseBtnClass = `
        text-red-200 italic px-2 mt-1 text-sm
     `

     useEffect(()=>{

              if(isOpen === true){

                  // eslint-disable-next-line
                  setIsOpen(false)
              }

     },[pathName])

     return(
        <nav className={navClass} >
                <button  onClick={toggleOpen} className={openCLiseBtnClass}>
                    {!isOpen ? (
                        <>
                         <MenuIcon size={16} />
                         Menu
                        </>
                    ) :  (
                        <>
                         <CircleXIcon size={16}/>
                         Fechar
                        </>
                    )}
                </button>
                <a className={linkClass} href='/' target="_blank">
                 <HouseIcon />
                 Home
                </a>

                <Link className={linkClass} href="/admin/post">
                  <FileTextIcon />
                  Posts
                </Link>

                <Link className={linkClass} href="/admin/post/new">
                  <PlusIcon/>
                  Criar Novo Post
                </Link>

                <Link className={linkClass} href="/admin/post">
                  <FileTextIcon />
                  edge
                </Link>

                <Link className={linkClass} href="/admin/post">
                  <FileTextIcon />
                  cases
                </Link>


                <Link className={linkClass} href="/admin/post">
                  <FileTextIcon />
                  tijolo
                </Link>

                <Link className={linkClass} href="/admin/post">
                  <FileTextIcon />
                  casa
                </Link>


                <Link className={linkClass} href="/admin/post">
                  <FileTextIcon />
                  Paredes
                </Link>


                <Link className={linkClass} href="/admin/post">
                  <FileTextIcon />
                  Carro
                </Link>

                <Link className={linkClass} href="/admin/post">
                  <FileTextIcon />
                  Need
                </Link>

                <Link className={linkClass} href="/admin/post">
                  <FileTextIcon />
                  Few
                </Link>


                <Link className={linkClass} href="/admin/post">
                  <FileTextIcon />
                  More
                </Link>


                <Link className={linkClass} href="/admin/post">
                  <FileTextIcon />
                  Cases
                </Link>


                <Link className={linkClass} href="/admin/post">
                  <FileTextIcon />
                  only
                </Link>


                <Link className={linkClass} href="/admin/post">
                  <FileTextIcon />
                  to
                </Link>

                <Link className={linkClass} href="/admin/post">
                  <FileTextIcon />
                  show
                </Link>

        </nav>
     )
}
