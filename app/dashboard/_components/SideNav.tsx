"use client"
import { FileClock, Home, Settings, WalletCards } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import path from 'path'
import React, { useEffect } from 'react'

function SideNav() {

    const MenuList=[
        {
            name:'Home',
            icon:Home,
            path:'/dashboard'
        },
        
    ]

    const path=usePathname();
    useEffect(()=>{
        console.log(path)
    },[])

  return (
    <div className='h-screen p-5 shadow-sm border bg-white'>
        <div className='flex justify-center'>
        <Image src={'/logo.svg'} alt='logo' width={120} height={100}/>
        </div>
        <hr className='my-4 border'></hr>
        <div  className='mt-3'>
            {MenuList.map((menu,index)=>(
                <div  className={`felx gap-2 mb-2 p-3 
                hover:bg-primary hover:text-white rounded-lg
                cursor-pointer items-center
                ${path==menu.path&& 'bg-primary text-white'}
                `}>
                    <menu.icon className='h-6 w-6'/>
                    <h2 className='text-lg'>{menu.name}</h2>
                </div>
            ))}
        </div>
    </div>
  )
}

export default SideNav