import { useGSAP } from "@gsap/react"
import "./projectView.scss"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from "gsap"
import { useEffect, useRef, useState } from "react"
import myProject from "../projectInfo/projectImgs/resister_img.png"
gsap.registerPlugin(ScrollTrigger)

function ProjectView(){

    const ref = useRef<HTMLDivElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const [wh,setWH] = useState<{w:number,h:number}>({
        w:0,
        h:0
    })
    const imgRef =  useRef<Array<HTMLDivElement|null>>([])

    const gap = 48
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

    useEffect(()=>{
        getWH()
        window.addEventListener('resize',getWH)
        return ()=>{
            window.removeEventListener('resize',getWH)
        }
    },[])

    const scrollTrigger_setup= ()=>{
        const tl = gsap.timeline()
        if(imgRef.current)
            imgRef.current.forEach((child,idx)=>{
                gsap.to(child,{
                    x:-10*idx,
                    y:-10*idx,
                    zIndex:100-idx,
                    duration:0.1,
                })
            })

        gsap.set([".fst-line",".sec-line",".trd-line"],{
            scaleY:1,
            scaleX:1,
            transformOrigin:"top"
        })
        gsap.set('.frame-projectView-img',{
            left:0,
            right:0
        })

        for(let i = 0; i<3; i++){
            if(i !== 0)
                tl.from(bdFstRef.current[i],{
                    scaleY:0,
                    duration:1,
                })
            tl.from(bdSecRef.current[i],{
                scaleY:0,
                duration:1.5,

                onUpdate:()=>{
                    setPageNum(i)
                }
        
            })
            if(i !==3)
                tl.from(bdTrdRef.current[i],{
                    scaleY:0,
                    duration:1
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
            trigger:".frame-projectView-line",
            animation:tl,
            scrub:1,
            start:"start start",
            end: `${ref.current?.clientHeight} ${window.innerHeight}`,
            markers:true,
        })
        ScrollTrigger.create({
            trigger:".frame-projectView-info-in",
            animation:tl_info,
            scrub:1,
            start:"start start",
            end: `${ref.current?.clientHeight} ${window.innerHeight}`,
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
    },[wh])

    useEffect(()=>{

        let sum = 0
        let limit = false
        for(let i=0; i<3; i++){
               
            if(i === pageNum){
                gsap.to(informationRef.current[i],{
                    duration:0.3,
                    scale:1,
                    opacity:1,
                    ease:"power3.out"
                })
                limit = true
                gsap.to(".projectView-info",{
                    duration:0.3,
                    ease:'power3.out',
                    y:-(sum + pageNum*gap + informationRef.current[pageNum]!.clientHeight/2)
                })
                console.log(sum)
            }
                
            else{
                gsap.to(informationRef.current[i],{
                    duration:0.3,
                    scale:0.8,
                    opacity:0.5,
                    ease:"power3.out"
                })
            }
            if(!limit && informationRef.current[i]?.clientHeight){
                sum += informationRef.current[i]!.clientHeight
            }
                
        }

        imgRef.current.forEach((child,idx)=>{
            gsap.to(child,{
                x:-10*idx,
                y:-10*idx,
                zIndex:100-idx,
                duration:0.1,
            })
            if(idx > pageNum){
                
            }
        })
     


    },[pageNum])

    return (
        <div ref={ref} className="container-projectView">
       
            <div className="frame-projectView-img f-c-c-c">
                <div className="projectView-img">
                    <img ref={el => imgRef.current[0] = el} src={myProject}/>
                    <img ref={el => imgRef.current[1] = el} src={myProject}/>
                    <img ref={el => imgRef.current[2] = el} src={myProject}/>
                </div>
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
                <div className="frame-projectView-info-in f-c-c-s">
                <div className="f-c-c-s projectView-info" style={{
                    marginTop:wh.h/2,
                    // marginTop:infoDivHeight ? wh.h/2 - infoDivHeight/2 : 0, 
                    gap:"48px"}}>
                    <div className="f-c-c-c" ref={el => informationRef.current[0] = el}>
                        <div className="projectView-info-in">
                            <span>title</span>
                            <div>
                                
                            </div>
                            <div className="">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae quaerat minima soluta adipisci voluptatum animi distinctio blanditiis provident, dolores ut, at mollitia quos sequi doloremque asperiores nam voluptas dolore cupiditate.
                            </div>
                        </div>
                        
                    </div>

                    <div className="f-c-c-c" ref={el => informationRef.current[1] = el}>
                        <div className="projectView-info-in">
                            <span>title</span>
                            <div>
                                
                            </div>
                            <div className="">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae quaerat minima soluta adipisci voluptatum animi distinctio blanditiis provident, dolores ut, at mollitia quos sequi doloremque asperiores nam voluptas dolore cupiditate.
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae quaerat minima soluta adipisci voluptatum animi distinctio blanditiis provident, dolores ut, at mollitia quos sequi doloremque asperiores nam voluptas dolore cupiditate.
                            </div>
                        </div>
                    </div>

                    <div className="f-c-c-c" ref={el => informationRef.current[2] = el}>
                        <div className="projectView-info-in">
                            <span>title</span>
                            <div>
                                
                            </div>
                            <div className="">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae quaerat minima soluta adipisci voluptatum animi distinctio blanditiis provident, dolores ut, at mollitia quos sequi doloremque asperiores nam voluptas dolore cupiditate.
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae quaerat minima soluta adipisci voluptatum animi distinctio blanditiis provident, dolores ut, at mollitia quos sequi doloremque asperiores nam voluptas dolore cupiditate.
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae quaerat minima soluta adipisci voluptatum animi distinctio blanditiis provident, dolores ut, at mollitia quos sequi doloremque asperiores nam voluptas dolore cupiditate.
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectView


