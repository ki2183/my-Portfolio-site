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
    const [pageNum,setPageNum] = useState<number>(0)
    const bdFstRef = useRef<Array<HTMLDivElement|null>>([])
    const bdSecRef = useRef<Array<HTMLDivElement|null>>([])
    const bdTrdRef = useRef<Array<HTMLDivElement|null>>([])
    const informationRef = useRef<Array<HTMLDivElement|null>>([])

    const arr = ["","",""] 

    const getWH = () => {
        const width = window.innerWidth
        const height = window.innerHeight
        setWH({w:width,h:height})
    }

    const infoDivHeight = informationRef.current[0]?.clientHeight

    useEffect(()=>{
        getWH()
        window.addEventListener('resize',getWH)
        return ()=>{
            window.removeEventListener('resize',getWH)
        }
    },[])

    const scrollTrigger_setup= ()=>{
        const tl = gsap.timeline()

        gsap.set([".fst-line",".sec-line",".trd-line"],{
            scaleY:1,
            scaleX:1,
            transformOrigin:"top"
        })

        for(let i = 0; i<3; i++){
            if(i !== 0)
                tl.from(bdFstRef.current[i],{
                    scaleY:0,
                    duration:2,
                })
            tl.from(bdSecRef.current[i],{
                scaleY:0,
                duration:0.05,
                onComplete:()=>{
                    setPageNum(i)
                },
                onReverseComplete:()=>{
                    setPageNum(i)
                },
            })
            if(i !==3)
                tl.from(bdTrdRef.current[i],{
                    scaleY:0,
                    duration:2
                })
        }

        const tl_info = gsap.timeline()    

        ScrollTrigger.create({
            trigger:".frame-projectView-img",
            animation:tl,
            scrub:1,
            start:"start start",
            end: `${ref.current?.clientHeight} ${window.innerHeight}`,
            // markers:true,
            pin:true,
        })
        ScrollTrigger.create({
            trigger:".frame-projectView-info",
            animation:tl_info,
            scrub:1,
            start:"start start",
            end: `${ref.current?.clientHeight} ${window.innerHeight}`,
            // markers:true,
            pin:true,
        })
    }

    useGSAP(()=>{
        scrollTrigger_setup()     
    },[])

    useEffect(()=>{console.log(pageNum)},[pageNum])

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

    useEffect(()=>{

        const height =
  informationRef.current[pageNum] && // 확인 1
  informationRef.current[pageNum]!.clientHeight // 확인 2
    ? informationRef.current[pageNum]!.clientHeight
    : 0;
        for(let i=0; i<3; i++){
            if(i === pageNum)
                gsap.to(informationRef.current[i],{
                    duration:0.3,
                    scale:1,
                    opacity:1,
                    ease:"power3.out"
                })
            else
                gsap.to(informationRef.current[i],{
                    duration:0.3,
                    scale:0.8,
                    opacity:0.5,
                    ease:"power3.out"
                })
        }
        gsap.to(".projectView-info",{
            duration:0.3,
            ease:"power3.out",
            // y: pageNum === 0 ? (pageNum * -48 - 80) : 0
            y: pageNum === 0 ? 0 :  (pageNum * -48 - 85)
        })

    },[pageNum])

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
                <div className="f-c-c-s projectView-info" style={{
                    marginTop:wh.h/2,
                    // marginTop:infoDivHeight ? wh.h/2 - infoDivHeight/2 : 0, 
                    gap:"48px"}}>
                    <div className="f-c-c-c" ref={el => informationRef.current[0] = el}>
                        <span>title</span>
                        <div>
                            
                        </div>
                        <div className="">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae quaerat minima soluta adipisci voluptatum animi distinctio blanditiis provident, dolores ut, at mollitia quos sequi doloremque asperiores nam voluptas dolore cupiditate.
                        </div>
                    </div>

                    <div className="f-c-c-c" ref={el => informationRef.current[1] = el}>
                        <span>title</span>
                        <div>
                            
                        </div>
                        <div className="">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae quaerat minima soluta adipisci voluptatum animi distinctio blanditiis provident, dolores ut, at mollitia quos sequi doloremque asperiores nam voluptas dolore cupiditate.
                        </div>
                    </div>

                    <div className="f-c-c-c" ref={el => informationRef.current[2] = el}>
                        <span>title</span>
                        <div>
                            
                        </div>
                        <div className="">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae quaerat minima soluta adipisci voluptatum animi distinctio blanditiis provident, dolores ut, at mollitia quos sequi doloremque asperiores nam voluptas dolore cupiditate.
                        </div>
                    </div>
                </div>
    
            </div>
        </div>
    )
}

export default ProjectView