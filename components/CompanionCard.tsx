"use client";
import { removeBookmark } from "@/lib/actions/companion.action";
import { addBookmark } from "@/lib/actions/companion.action";
import Image from "next/image";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import { toast } from 'react-toastify';
import { useUser } from "@clerk/nextjs";
import { FaUser} from "react-icons/fa";
import { MdLockClock } from "react-icons/md";



interface CompanionCardProps {
  id: string;
  name: string;
  topic: string;
  subject: string;
  duration: number;
  color: string;
  bookmarked: boolean;
}

const CompanionCard = ({
  id,
  name,
  topic,
  subject,
  duration,
  color,
  bookmarked,
}: CompanionCardProps) => {

  const pathname = usePathname();

  const { user, isSignedIn } = useUser(); // 👈 get user from Clerk
  

  const handleBookmark = async () => {

    if (!isSignedIn) {

       redirect("/sign-in");
       
    }else{

       if (bookmarked) {

          await removeBookmark(id, pathname);
          toast.warning('Bookmark Removed');

        } else {

        await addBookmark(id, pathname);
        toast.success('Bookmark Added');
      }

     
    }

   

  };

  return (
    <article className="companion-card transition-transform duration-300 hover:scale-110 cursor-pointer" style={{ backgroundColor: "white" }}>
      <div className="flex justify-between items-center">
        <div className="subject-badge" style={{backgroundColor: color}}>{subject}</div>
        <button className="companion-bookmark" onClick={handleBookmark}>
          <Image
            src={
              bookmarked ? "/icons/bookmark-filled.svg" : "/icons/bookmark.svg"
            }
            alt="bookmark"
            width={12.5}
            height={15}
          />
        </button>
      </div>

      <h2 className="text-2xl font-bold">{name}</h2>
      <p className="text-sm">{topic}</p>
      <div className="flex items-center gap-2">
      <MdLockClock size={20}/>
        <p className="text-sm font-bold">{duration} minutes</p>
      </div>

      <Link href={`/companions/${id}`} className="w-full">
        <button className="btn-primary w-full justify-center bg-[#D9D9DB] text-black">
          Interact
        </button>
      </Link>
    </article>
  );
};

export default CompanionCard;