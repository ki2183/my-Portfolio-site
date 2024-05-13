import { useGSAP } from "@gsap/react"
import gsap from "gsap"

type hookAnimation_type = {
    outRef:React.RefObject<HTMLDivElement>
    inRef:React.RefObject<HTMLDivElement>
}

export function hookAnimation({outRef,inRef}:hookAnimation_type){
    const moveBoxRate = 50 //박스 이동 비율 50프로만 움직임
    let Animation:gsap.core.Timeline | null = null
    
    //#region ANIMATION
    const animation_move = (e:MouseEvent)=>{
        const tl = gsap.timeline()
        if(outRef.current && inRef.current){
            const rate = {
                x:50 + (e.offsetX/outRef.current!.clientWidth-0.5)*moveBoxRate,
                y:50 + (e.offsetY/outRef.current!.clientHeight-0.5)*moveBoxRate,
            }
    
            tl.to(inRef.current,{
                left:`${rate.x}%`,
                top:`${rate.y}%`,
                ease:"power4.out",
                duration:2
            })
        }
        return tl
    }
    const animaiton_leave = ()=>{
        const tl = gsap.timeline()
        if(inRef.current)
            tl.to(inRef.current,{
                left:"50%",
                top:"50%",
                ease:"power1.out",
                duration:1,
            })

        return tl
    }
    //#endregion


    //#region EVENT HANDLER
    const onMove = (e:MouseEvent)=>{
        Animation = animation_move(e)
        Animation.play()
    }
    const onLeave = ()=>{
        gsap.killTweensOf(inRef.current)
        Animation = animaiton_leave()
        Animation.play()
    }
    //#endregion

    return {
        onMove,
        onLeave
    }
}

