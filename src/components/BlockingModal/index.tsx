'use client'

import {
  useRef,
  createContext,
  useEffect,
  ReactNode,
  useState
} from 'react'

import React from "react";

type deepMapInjectbleProps = {
    isOpen:boolean,
    setIsOpen:React.Dispatch<React.SetStateAction<boolean>>,
    confirmandoNe?:()=>void
}


type ModalContextType = {
  modalRef: React.RefObject<HTMLDivElement | null>,
  toggleSeting:React.Dispatch<React.SetStateAction<boolean>>,
  isOpen:boolean
}

type ModalBlockingProps = {
  children: ReactNode
}

export const ModalContext =
  createContext<ModalContextType | null>(null)

export function ModalBlocking({
  children
}: ModalBlockingProps) {
  const modalRef = useRef<HTMLDivElement>(null)
  const [isOpen,toggleSeting] = useState(false)




  function handleTest() {
    alert('.....HEY......')
  }





  useEffect(() => {
    if (modalRef.current) {
      console.log(modalRef.current)
    }
  }, [])



  return (
    <ModalContext.Provider value={{ modalRef, toggleSeting, isOpen }}>
      <div ref={modalRef} onClick={handleTest}>

        {children}

      </div>
    </ModalContext.Provider>
  )
}
