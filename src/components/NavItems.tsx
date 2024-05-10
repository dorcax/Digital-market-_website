"use client"
import { Product_Categories } from '@/config'
import React, { useState } from 'react'
import NavItem from './NavItem'

const NavItems = () => {
    const[activeIndex,setActiveindex]=useState<null |number>(null)
    const isAnyOpen =activeIndex !== null
  return (
    <div className='flex gap-4 h-full border border-green-400
    '>
      {Product_Categories.map((product,index)=>{
        // to keep track of which nav items is open or not
       const handleOpen=()=>{
        if(activeIndex ===index){
          setActiveindex(null)
        }
        else{
          setActiveindex(index)
        }
      }
        // is open or not
        const isOpen = index ===activeIndex
        return( <NavItem category={product} handleOpen={handleOpen}  isOpen={isOpen} key={product.value} isAnyOpen={isAnyOpen}/>)
      })}
    </div>
  )
}

export default NavItems

