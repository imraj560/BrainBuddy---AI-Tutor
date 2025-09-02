import React from 'react'
import { cn } from '@/lib/utils';
import { getSubjectColor } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface CompanionsListProps {

    title: string;
    companions?: Companion[];
    classNames?: string;

}


const CompanionList = ({title, companions, classNames}: CompanionsListProps) => {
  return (
  

      <Carousel>
        <CarouselContent>
           {companions?.map(({id, subject, name, topic, duration})=>(
               <CarouselItem key={id} className="md:basis-1/2 lg:basis-1/3">
               <Link href={`/companions/${id}`}>
                      <div className='flex items-center gap-2'>
                        <div className='size-[72px] flex items-center justify-center rounded-lg' style={{backgroundColor:"white"}}>
                          <Image src={`/icons/${subject}.svg`} alt={subject} width={35} height={35} />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p className='font-bold text-2xl'>{name}</p>
                            <p className='text-lg'>{topic}</p>
                        </div>
                      </div>
                  </Link>
          </CarouselItem>

           ))}
         
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      

   
  )
}

export default CompanionList
