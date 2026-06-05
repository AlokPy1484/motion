"use client"


import Image from "next/image";
import {motion} from "motion/react"
 




export default function StackButton(props){


    return(
        <motion.div
        
        initial={
           { width: 45 }
        }
        whileHover={{
            width: "auto"
        }}
        transition={{
            duration: 0.2,
            ease: "easeInOut"
        }}


        className="group flex justify-start items-center h-[40px]  overflow-hidden p-1 bg-neutral-900 border border-dashed border-neutral-700 border-[1px] rounded-lg gap-2 px-2 cursor-pointer">
            <Image src={props.logoLink} alt="logo" width={28} height={28} className=" rounded-full"/>
            <motion.span
             className="font-light block opacity-0 group-hover:opacity-100 transition-all duration-300 text-[16px] line-clamp-1">
                {props.name}</motion.span>
        </motion.div>
        )
        }