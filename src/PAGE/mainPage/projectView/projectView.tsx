import { useGSAP } from "@gsap/react"
import "./projectView.scss"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from "gsap"
import { useEffect, useRef, useState } from "react"
import myProject from "../projectInfo/projectImgs/resister_img.png"
import { resolve } from "path"
gsap.registerPlugin(ScrollTrigger)

function ProjectView(){

    const ref = useRef<HTMLDivElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const [wh,setWH] = useState<{w:number,h:number}>({
        w:0,
        h:0
    })
    const bdFstRef = useRef<Array<HTMLDivElement|null>>([])
    const bdSecRef = useRef<Array<HTMLDivElement|null>>([])
    const bdTrdRef = useRef<Array<HTMLDivElement|null>>([])
    const fstAnimationTime = 2
    const secAnimationTime = 0.5
    const trdAnimationTime = 2
    const TotalAnimationTime = fstAnimationTime + secAnimationTime + trdAnimationTime

    const arr = ["","",""] 

    const getWH = () => {
        const width = window.innerWidth
        const height = window.innerHeight
        setWH({w:width,h:height})
    }


    useEffect(()=>{
        window.addEventListener('resize',getWH)
        console.log(bdFstRef.current)
        return ()=>{
            window.removeEventListener('resize',getWH)
        }
    },[])

    const scrollTrigger_setup= ()=>{
        const tl = gsap.timeline()

        gsap.set([".fst-line",".sec-line",".trd-line"],{
            scaleY:1,
            transformOrigin:"top"
        })

        // gsap.set([bdTrdRef.current],{
        //     scaleY:1,
        //     transformOrigin:"top"
        // })

        // tl.from(`.sec-line:nth-child(1)`,{
        //     scaleY:0,
        //     duration:0.05,
        // },0)
        // tl.from(`.trd-line:nth-child(1)`,{
        //     scaleY:0,
        //     duration:2,
        // },0.05)

        // tl.from(`.fst-line:nth-child(1)`,{
        //     scaleY:0,
        //     duration:2,
        // },2.05)
        // tl.from(`.sec-line:nth-child(2)`,{
        //     scaleY:0,
        //     duration:0.05,
        // },4.1)
        // tl.from(`.trd-line:nth-child(2)`,{
        //     scaleY:0,
        //     duration:2,
        // },6.1)

        // tl.from(`.fst-line:nth-child(2)`,{
        //     scaleY:0,
        //     duration:fstAnimationTime,
        // },0)
        // tl.from(`.sec-line:nth-child(3)`,{
        //     scaleY:0,
        //     duration:secAnimationTime,
        // },0)
        // tl.from(`.trd-line:nth-child(3)`,{
        //     scaleY:0,
        //     duration:trdAnimationTime,
        // },2.5)

        tl.from(bdSecRef.current[0],{
            scaleY:0,
            duration:0.05,
        })
        tl.from(bdTrdRef.current[0],{
            scaleY:0,
            duration:2,
        })
        tl.from(bdFstRef.current[1],{
            scaleY:0,
            duration:2,
        })
        tl.from(bdSecRef.current[1],{
            scaleY:0,
            duration:0.05,
        })
        tl.from(bdTrdRef.current[1],{
            scaleY:0,
            duration:2,
        })
        tl.from(bdFstRef.current[2],{
            scaleY:0,
            duration:2,
        })
        tl.from(bdSecRef.current[2],{
            scaleY:0,
            duration:0.05,
        })

    

        ScrollTrigger.create({
            trigger:".frame-projectView-img",
            animation:tl,
            scrub:1,
            start:"start start",
            end: `${ref.current?.clientHeight} ${window.innerHeight}`,
            markers:true,
            pin:true,
        })
    }

    useGSAP(()=>{
        scrollTrigger_setup()     
    },[])

    useGSAP(()=>{

        const scroll_setup_async = async()=>{
            await new Promise<void>((resolve,reject)=>{
                window.addEventListener('resize',()=>{
                    ScrollTrigger.getAll().forEach(trigger=>{
                        trigger.kill()
                    })
                    resolve();
                })    
            })
            
            await scrollTrigger_setup()     
        } 
        scroll_setup_async()
    },[wh.h])

    return (
        <div ref={ref} className="container-projectView">
       
            <div className="frame-projectView-img f-c-c-c">
                <img src={myProject}/>
            </div>
            <div className="frame-projectView-line">
                <div className="projectView-line">
                    <div>
                        <div ref={el => bdFstRef.current[0] = el} className="fst-line"/>
                    </div>
                    <div className="f-c-c-c">
                        <div ref={el => bdSecRef.current[0] = el}  className="sec-line"/>
                        <div className="f-c-c-c">
                                1
                        </div>
                    </div>
                    <div className="f-c-c-c">
                        <div ref={el => bdTrdRef.current[0] = el} className="trd-line"/>
                    </div>
                </div>
                <div className="projectView-line">
                    <div>
                        <div ref={el => bdFstRef.current[1] = el} className="fst-line"/>
                    </div>
                    <div className="f-c-c-c">
                        <div ref={el => bdSecRef.current[1] = el}  className="sec-line"/>
                        <div className="f-c-c-c">
                                2
                        </div>
                    </div>
                    <div className="f-c-c-c">
                        <div ref={el => bdTrdRef.current[1] = el} className="trd-line"/>
                    </div>
                </div>
                <div className="projectView-line">
                    <div>
                        <div ref={el => bdFstRef.current[2] = el} className="fst-line"/>
                    </div>
                    <div className="f-c-c-c">
                        <div ref={el => bdSecRef.current[2] = el}  className="sec-line"/>
                        <div className="f-c-c-c">
                                3
                        </div>
                    </div>
                    <div className="f-c-c-c">
                        <div ref={el => bdTrdRef.current[2] = el} className="trd-line"/>
                    </div>
                </div>
                
            </div>
            <div className="frame-projectView-info">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default ProjectView