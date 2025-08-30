import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import NavItems from './NavItems'
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

const Navbar = () => {
  return (
        <main>
          <nav className='navbar rounded-4xl border-2 mt-1'>
            <Link href="/">
                <div className='flex items-center gap-2.5 cursor-pointer'>
                    <h1 className='max-sm:text-xl max-md:text-xl'>Brain Buddy</h1>
                </div>
            </Link>
            <div className='flex items-center gap-8'>
               <NavItems/>
               <SignedOut>
                <div className='flex items-center gap-2'>
                    <SignInButton>
                        <button className='btn-signin max-sm:text-[15px]'>Sign In</button>
                    </SignInButton>
                </div>
               </SignedOut>
               <SignedIn>
                 <UserButton />
               </SignedIn>

                

            </div>
        </nav>
        </main>
        

  )
}

export default Navbar
