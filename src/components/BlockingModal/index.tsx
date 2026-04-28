'use client'

import {
  useRef,
  createContext,
  useEffect,
  ReactNode
} from 'react'

type ModalContextType = {
  modalRef: React.RefObject<HTMLDivElement | null>
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

  function handleTest() {
    alert('.....HEY......')
  }

  useEffect(() => {
    if (modalRef.current) {
      console.log(modalRef.current)
    }
  }, [])

  return (
    <ModalContext.Provider value={{ modalRef }}>
      <div ref={modalRef} onClick={handleTest}>
        {children}
      </div>
    </ModalContext.Provider>
  )
}
