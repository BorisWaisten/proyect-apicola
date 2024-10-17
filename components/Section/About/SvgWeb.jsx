'use client'
import { useRouter } from "next/navigation";
export default function SvgWeb({link}) {
    const router = useRouter();
    return (
        <svg 
        className=" w-[4vh] sm:w-[3vh] md:w-[5vh] lg:w-[5vh] md:h-[5vh] lg:h-[5vh] cursor-pointer"
        onClick={() => router.push(link)}
        height="5vh" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path d="M128 928h768c35.3 0 64-28.7 64-64V226.2H64V864c0 35.3 28.7 64 64 64zM64 162.2v64h896v-64c0-35.3-28.7-64-64-64H128c-35.3 0-64 28.7-64 64z m96 29.8c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z m128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z" fill="#3D5AFE" />
            <path d="M160 160m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z" fill="#FFEA00" />
            <path d="M288 160m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z" fill="#FFEA00" />
            <path d="M864.2 449H162c-17.7 0-32-14.3-32-32s14.3-32 32-32h702.2c17.7 0 32 14.3 32 32s-14.4 32-32 32zM800.2 832H166c-17.7 0-32-14.3-32-32s14.3-32 32-32h634.2c17.7 0 32 14.3 32 32s-14.4 32-32 32zM416.1 573H162c-17.7 0-32-14.3-32-32s14.3-32 32-32h254.1c17.7 0 32 14.3 32 32s-14.3 32-32 32z" fill="#FFEA00" />
            <path d="M350.1 544H96c-17.7 0-32-14.3-32-32s14.3-32 32-32h254.1c17.7 0 32 14.3 32 32s-14.3 32-32 32z" fill="#FFEA00" />
            <path d="M224 832.1c-17.7 0-32-14.3-32-32s14.3-32 32-32h398.9C674 695.3 704 606.6 704 510.9c0-21.4-1.5-42.4-4.4-63H162c-17.7 0-32-14.3-32-32s14.3-32 32-32h523.7C668.4 325 639.2 271.2 601 225.1H64v637.8c0 35.3 28.7 64 64 64h294.6c54.7-21.9 104.2-54.4 145.7-94.8H224z" fill="#448AFF" />
            <path d="M192 800.1c0 17.7 14.3 32 32 32h344.3c20.1-19.6 38.4-41 54.5-64H224c-17.7 0-32 14.3-32 32z" fill="#FFFF00" />
            <path d="M64 161.1v64h537c-46.1-55.6-105.4-99.8-173-128H128c-35.3 0-64 28.7-64 64z m224-34.2c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.4-32 32-32z m-128 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.4-32 32-32z" fill="#536DFE" />
            <path d="M130 415.9c0 17.7 14.3 32 32 32h537.6c-3.1-21.9-7.7-43.3-13.9-64H162c-17.7 0-32 14.3-32 32z" fill="#FFFF00" />
        </svg>
    );
  }
  
 
  