'use client';
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils';
import { CgProfile } from "react-icons/cg";
import { FaChalkboardTeacher } from "react-icons/fa";

const navItems = [

    {label:'Home', href:'/'},
    {label:<FaChalkboardTeacher size={23}/>, href:'/companions'},
    {label:<CgProfile size={23}/>, href:'/my-journey'}
]

const NavItems = () => {

  const pathname = usePathname();  

  return (
   <nav className='flex items-text-center gap-6'>
        {
            navItems.map(({label, href})=>(

                <Link href={href} key={label} className={cn(pathname === href && 'text-primary font-semibold')}>{label}</Link>
            ))
        }
   </nav>
  )
}

export default NavItems
