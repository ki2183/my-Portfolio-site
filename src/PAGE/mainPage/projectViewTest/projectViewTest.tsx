import gsap from "gsap"
import "./projectViewTest.scss"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useRef, useState } from "react"
import { useGSAP } from "@gsap/react"
import ProjectViewNum from "./parts/projectViewNum/projectViewNum"
gsap.registerPlugin(ScrollTrigger)


export function ProjectViewText(){
    const ref = useRef<HTMLDivElement>(null)
    const [initialLimit,setInitialLimit] = useState<boolean>(false)
    const animation = () =>{
        const tl = gsap.timeline()

        // ScrollTrigger.create({
        //     trigger:".projectIMG",
        //     animation:tl,
        //     scrub:1,
        //     start:"start start",
        //     end: `${ref.current?.clientHeight} ${window.innerHeight}`,
        //     markers:true,
        //     pin:true,
        // })

        // ScrollTrigger.create({
        //     trigger:".projectINFO",
        //     animation:tl,
        //     scrub:1,
        //     start:"start start",
        //     end: `${ref.current?.clientHeight} ${window.innerHeight}`,
        //     markers:true,
        //     pin:true,
        // })
    }

    useGSAP(()=>{
        if(!initialLimit){
            animation()
            setInitialLimit(true)
        }
        window.addEventListener('resize',animation)

        return ()=>{
            window.removeEventListener("resize",animation)
        }
    },[])
    return (
        <div className="container-proejctView-total" ref={ref}>
            <div className="projectIMG">
                    asdsad
            </div>
            <ProjectViewNum/>
            {/* <div className="">
                sddsadsadsa
            </div> */}
            <div className="projectINFO">
            asdasdasdasd
            </div>
        </div>
    )
}