import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)



export type scroll_trigger_hooks_type = {
    num:number
    pin:boolean
    trigger:string
    animation: () => gsap.core.Timeline
}

export function scroll_trigger_hooks({
    num,
    pin,
    trigger,
    animation
}:scroll_trigger_hooks_type){
    ScrollTrigger.create({
        trigger:trigger,
        animation:animation(),
        scrub:1,
        start:"start start",
        end: `${window.innerHeight*num} ${window.innerHeight}`,
        pin:pin,
        markers:true
    })
}

type animation_bd_type = {
    page_number_handler: (num: number) => void
    bdFstRef:React.MutableRefObject<(HTMLDivElement | null)[]>
    bdSecRef:React.MutableRefObject<(HTMLDivElement | null)[]>
    bdTrdRef:React.MutableRefObject<(HTMLDivElement | null)[]>
}

export const animationHooks = () =>{
    function animation_bd({
        bdFstRef,
        bdSecRef,
        bdTrdRef,
        page_number_handler
    }:animation_bd_type){
        const tl = gsap.timeline()

        bdFstRef.current.forEach((item,idx)=>{
            if(idx === 0)
                tl.from(bdFstRef.current[idx],{
                    duration:1,
                    scaleY:0,
                    transformOrigin:"top"
                }) 
            tl.from(bdSecRef.current[idx],{
                duration:1,
                scaleY:0,
                transformOrigin:"top",
                onUpdate:()=>{
                    page_number_handler(idx)
                }
            })
            if(idx !== bdFstRef.current.length-1)
                tl.from(bdTrdRef.current[idx],{
                    duration:1,
                    scaleY:0,
                    transformOrigin:"top"
                })
        })
        return tl
    }

    return {
        animation_bd
    }
}