"use client"
import {color, motion, scale} from "motion/react"










export default function MotionButton(){

    const parentVarient = {
        initial: {
            scale: 1
        },
        hover: {
            scale: 1.1
        }
    }

    const childVarient = {
        initial: {
                rotate: -30,
                translateY: "-80px",
                translateX: "-20px"
            },
        hover: {
                rotate: 0,
                translateY: 0,
                translateX: 0
            }

    }

    const textVarient = {
        initial: {
            color: "#ffffff"
            
        },
        hover: {
            color: "#000000"
        }
    }
    



    return(

   

        <motion.div
        variants={parentVarient}
        initial="initial"
        whileHover="hover"
        transition={{
                duration: 0.3,
                ease: "easeInOut"
            }}

        
        className="group relative flex w-30 h-8 justify-center items-center bg-black text-sm  text-white overflow-hidden"
          style={{
        backgroundImage:
            "repeating-linear-gradient(135deg, rgba(255,255,255,0.2) 0, rgba(255,255,255,0.2) 1px, transparent 1px, transparent 8px) ",
        }}>
            

            <motion.span
            variants={childVarient}

            transition={{
                duration: 0.3,
                ease: "easeInOut"
            }}

            
            className="absolute inset-0 w-full h-full bg-white"></motion.span>

            <motion.div 
            variants={textVarient}
            className="relative z-10 text-xl">Alok</motion.div>

        </motion.div>


    )
}