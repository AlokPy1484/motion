import Image from "next/image";






export default function StackButton(){


    return(
        <div className="group flex justify-center items-center p-1 bg-neutral-900/90 border border-dashed border-neutral-700 border-[1px] rounded-lg gap-2 px-2">
            <Image src="https://www.svgrepo.com/show/354113/nextjs-icon.svg" alt="logo" width={28} height={28} className="bg-white rounded-full"/>
            <a className="hidden font-light group-hover:block transition-all duration-300">Next.js</a>
        </div>
    )
}