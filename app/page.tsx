import React from 'react'
import { Button } from '@/components/ui/button'
import CompanionCard from '@/components/CompanionCard'
import CompanionList from '@/components/CompanionList'
import CTA from '@/components/CTA'
import { recentSessions } from '@/constants'
import { getRecentSessions } from '@/lib/actions/companion.action'
import { getAllCompanions } from '@/lib/actions/companion.action'
import { getSubjectColor } from '@/lib/utils'
import { FaCoffee } from 'react-icons/fa'
import { RiUserVoiceFill } from 'react-icons/ri'
import { FaUserGraduate } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'




const Page = async() => {

  const companions = await getAllCompanions({limit:3});
  const recentSessionsCompanions = await getRecentSessions(10);

 

  return (
    <main>

      <section className='banner'>
        <div>
            <p className='text-4xl max-sm:text-2xl'>Do you feel lazy while learning?</p>
            <p className='text-xl'>Perfect Soulution for You</p>
        </div>
      
      </section>

      <h1 className='mt-6 mb-6 text-center'>How?</h1>

      <section className='flex gap-2 justify-between w-[70%] h-auto mx-auto max-lg:flex-col max-lg:gap-y-36'>

        <div className='flex flex-col items-center'><FaCoffee size={50}/> <p className='text-xl mt-3'>Coffee</p></div>
        <div className='flex flex-col items-center'><RiUserVoiceFill size={50} /><p className='text-xl mt-3'>Voice Interaction</p></div>
       <div className='flex flex-col items-center'><FaUserGraduate size={50} /><p className='text-xl mt-3'>Learn</p></div>

      </section>

      <h1 className='text-center mt-[80px] mb-[70px]'>Popular Companions</h1>

     <section className="home-section">
            {companions.map((companion) => (
                <CompanionCard
                    key={companion.id}
                    {...companion}
                    color={getSubjectColor(companion.subject)}
                />
            ))}

        </section>


         <h1 className='text-center mt-[120px] mb-[70px]'>Recent Sessions</h1>

        <section className="recent-section">
          <CompanionList
              title="Recently completed sessions"
              companions={recentSessionsCompanions}
              classNames="w-2/3 max-lg:w-full"
          />

      </section>

      <section className='flex max-md:flex-col gap-4 justify-between h-auto mt-[90px] mb-[90px]'>

        <div>
             <h1>Sit back and Interact with Your Companion</h1>
             <p>Much easier than you think</p>
        </div>
        <div className='max-md:mt-6'>
              <button className='btn-primary'>
                   <Image src="/icons/plus.svg" alt="plus" width={12} height={12} />
                    <Link href="/companions/new">
                  <p>Build Companion</p>
                </Link>
         </button>      
        </div>
    
      </section>

    </main>
  )
}

export default Page