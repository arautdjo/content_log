type ContainerProps = {
    children: React.ReactNode
}

export function Container({children}: ContainerProps){
    return (
    <div id="topado" className="text-slate-90 min-h-screen bg-slate-100 dark:bg-slate-900 dark:text-slate-100">
      <div className="max-w-screen-lg mx-auto px-8">
          {children}
      </div>
    </div>
    )
}
