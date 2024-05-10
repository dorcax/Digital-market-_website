import React, { ReactNode } from 'react'
import cn from "classnames"

const MaxWidthWrapper = ({
    className,children
}:{
  className?:string,
  children:ReactNode
}) => {

  return (
    <div className={cn('  w-full  max-w-3xl mx-auto  px-2.5  md:px-20',className)}>
        {children} 
    </div>
  )
}

export default MaxWidthWrapper