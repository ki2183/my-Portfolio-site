import gsap from "gsap"
import "./projectViewTest.scss"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useRef } from "react"
import { useGSAP } from "@gsap/react"
gsap.registerPlugin(ScrollTrigger)


export function ProjectViewText(){
    const ref =  useRef<HTMLDivElement>(null)
    const container_img_ref = useRef<HTMLDivElement>(null)
    const animation = () =>{
        const tl = gsap.timeline()

        ScrollTrigger.create({
            trigger:".projectIMG",
            animation:tl,
            scrub:1,
            start:"start start",
            end: `${ref.current?.clientHeight} ${window.innerHeight}`,
            markers:true,
            pin:true,
        })

        ScrollTrigger.create({
            trigger:".projectINFO",
            animation:tl,
            scrub:1,
            start:"start start",
            end: `${ref.current?.clientHeight} ${window.innerHeight}`,
            markers:true,
            pin:true,
        })
    }

    useGSAP(()=>{
        animation()
    },[])
    return (
        <div className="container-proejctView-total" ref={container_img_ref}>
            <div ref={ref} className="projectIMG">
                    asdsad
            </div>
            <div className="">
                sddsadsadsa
            </div>
            <div className="projectINFO">
            asdasdasdasd
            </div>
        </div>
    )
}