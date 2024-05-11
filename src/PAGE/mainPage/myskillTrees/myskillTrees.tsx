import "./myskillTrees.scss"
import '../../../flex.scss'
import "../../../font.scss"
import { ReactNode, useEffect, useLayoutEffect, useRef, useState } from "react"
import { useGSAP } from "@gsap/react"
import { hookAnimation } from "./hooks"
import GetSVG from "../../../FOLDER_svg/getSVG"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

function MyskillTrees(){

    const initialWH = {
        w:0,
        h:0
    }
    type wh_type = typeof initialWH
    const [wh,setWH] = useState<wh_type>(initialWH)
    const containerRef = useRef<HTMLDivElement>(null)
    
    const setWH_handler = (w:number,h:number)=>{
        setWH({w,h})
    }

    return(
        <div className="container-myskilltrees" ref={containerRef}>
            <AboutMe/>
            <AboutFrontend/>
            <AboutBackend/>
            <AboutVersionControl/>
        </div>
    )
}

export default MyskillTrees;

function AboutMe(){

    return (
            <AboutFrame 
                title={"about-me"}
                class_name_in="container-aboutme-in"
                class_name_out="container-aboutme-out"
            >
                    <ol className="fcss">
                        <li>
                            <span>1</span> 안녕하세요! 저는 프론트엔드 신입개발자가 되길 바라는 <span className="green">김기준</span>입니다.
                        </li>
                        <li>
                            <span>2</span> 저는 김기준입니다.
                        </li>
                        <li>
                            <span>3</span> 재사용성있는 코드 만들기를 좋아해요
                        </li>                        
                    </ol>
            </AboutFrame>
    )
}

function AboutFrontend(){

    const svgArr = [
        {
            src:"html",
            name:"html"
        },{
            src:"css",
            name:"css"
        },{
            src:"js",
            name:"javascript"
        },{
            src:"typescript",
            name:"typescript"
        },{
            src:"react",
            name:"react"
        },{
            src:"reactquery",
            name:"reactquery"
        },{
            src:"redux",
            name:"redux"
        },{
            src:"scss",
            name:"scss"
        },{
            src:"tailwind",
            name:"tailwind"
        }
    ]

    return (
        <AboutFrame 
                title={"frontend-me"}
                class_name_in="container-frontend-in"
                class_name_out="container-frontend-out"
            >
                <ol className="fcsc">
                    {
                        (svgArr && svgArr.length > 0) && svgArr.map((item,idx)=>(
                            <li className="frcc" key={idx}>
                            <GetSVG src={item.src}/>
                            <span>{item.name}</span>
                        </li>
                        ))
                    }

                </ol>   
        </AboutFrame>
    )
}

function AboutBackend(){

    const svgArr = [
        {
            src:"nodejs",
            name:"nodeJS"
        },{
            src:"mongodb",
            name:"mongoDB"
        },{
            src:"aws",
            name:"aws"
        },{
            src:"vercel",
            name:"vercel"
        }
    ]

    return (
        <AboutFrame 
                title={"backend-me"}
                class_name_in="container-backend-in"
                class_name_out="container-backend-out"
            >
            <ol className="fcsc">
                {
                    (svgArr && svgArr.length > 0) && svgArr.map((item,idx)=>(
                        <li className="frcc" key={idx}>
                        <GetSVG src={item.src}/>
                        <span>{item.name}</span>
                    </li>
                    ))
                }

            </ol>   
        </AboutFrame>
    )
}

function AboutVersionControl(){

    const svgArr = [
        {
            src:"git",
            name:"git"
        },{
            src:"github",
            name:"github"
        },{
            src:"jira",
            name:"jira"
        }
    ]

    return (
        <AboutFrame 
                title={"version-control-me"}
                class_name_in="container-vc-in"
                class_name_out="container-vc-out"
            >
            <ol className="fcsc">
                {
                    (svgArr && svgArr.length > 0) && svgArr.map((item,idx)=>(
                        <li className="frcc" key={idx}>
                        <GetSVG src={item.src}/>
                        <span>{item.name}</span>
                    </li>
                    ))
                }

            </ol>   
        </AboutFrame>
    )
}


type AboutFrame_type = {
    title:string
    children:ReactNode
    class_name_in:string
    class_name_out:string
}

function AboutFrame({
    title,
    children,
    class_name_in,
    class_name_out
}:AboutFrame_type){

    const inRef = useRef<HTMLDivElement>(null)
    const outRef = useRef<HTMLDivElement>(null)
    const {onLeave,onMove} = hookAnimation({outRef,inRef})
 
    useGSAP(()=>{
        outRef.current?.addEventListener('mousemove',onMove)
        outRef.current?.addEventListener('mouseleave',onLeave)
        return()=>{
            outRef.current?.removeEventListener('mousemove',onMove)
            outRef.current?.removeEventListener('mouseleave',onLeave)
        }
    },{scope:outRef.current!})

    const animation = () =>{
        const tl = gsap.timeline()
        tl.from(`.${class_name_out}`,{
            scale:0,
            duration:0.5,
        })
        ScrollTrigger.create({
            trigger:".container-myskilltrees",
            markers:true,
            animation:tl,
            start:"center center",
            end:"center center",
            toggleActions:"restart none reverse none"
        })
    }   
    useEffect(()=>{
        animation()
    },[])
    useGSAP(()=>{
        window.addEventListener('resize',animation)
        return ()=>{
            gsap.killTweensOf([inRef.current,outRef.current])
        }
    },{})

    return (
        <div 
            ref={outRef}
            className={`container-about-out ${class_name_out}`}>
                <div ref={inRef} className={`container-about-in ${class_name_in}`}>
                    <div>
                        
                        <div className="frcc">
                            <div/>
                        </div>
                        <span>{title}</span>
                    </div>
                    {children}
                </div>
        </div>
    )
}