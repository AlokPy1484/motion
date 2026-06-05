import ContactButton from "@/components/ContactButton";
import HoverFillButton from "@/components/HoverFillButton";
import Component1 from "@/components/Lession1";
import PLexButton from "@/components/PLexButton";
import RippleButton from "@/components/RippleButton";
import SplitRevealButton from "@/components/SplitReveal";
import StackButton from "@/components/StackButton";
import Image from "next/image";

export default function Home() {
  
  return(

    <div className="flex justify-center items-center h-screen w-full bg-neutral-800"
    style={{
      backgroundImage: `radial-gradient(circle at 0.5px  0.5px, rgba(6,182,212,0.2) 0.5px, transparent 0)`,
      backgroundSize: "8px 8px",
      backgroundRepeat: "repeat"
    }}>
      {/* <Component1/> */}
      {/* <PLexButton/> */}
      {/* <HoverFillButton/> */}
      {/* <SplitRevealButton/> */}
      {/* <RippleButton/> */}
      {/* <ContactButton/> */}

      {}
      <StackButton logoLink="https://thesvg.org/icons/nextdotjs/default.svg" name="Next.js"/>
      <StackButton logoLink="https://thesvg.org/icons/nextdotjs/default.svg" name="Next.js"/>
            <StackButton logoLink="https://thesvg.org/icons/nextdotjs/default.svg" name="Next.js"/>
                  <StackButton logoLink="https://thesvg.org/icons/nextdotjs/default.svg" name="Next.js"/>
                        <StackButton logoLink="https://thesvg.org/icons/nextdotjs/default.svg" name="Next.js"/>
    </div>
  ) 

}