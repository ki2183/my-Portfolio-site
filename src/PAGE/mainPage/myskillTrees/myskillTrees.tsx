import "./myskillTrees.scss"
import '../../../flex.scss'
import "../../../font.scss"
import { ReactNode, useEffect, useLayoutEffect, useRef, useState } from "react"
import { useGSAP } from "@gsap/react"
import { hookAnimation } from "./hooks"
import GetSVG from "../../../FOLDER_svg/getSVG"
import gsap, { TweenLite } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useAppSelector } from "../../../REDUX/hooks"
gsap.registerPlugin(ScrollTrigger)

const initialWH = {
    w:0,
    h:0
}
type wh_type = typeof initialWH

function MyskillTrees(){

    
    const [wh,setWH] = useState<wh_type>(initialWH)
    const containerRef = useRef<HTMLDivElement>(null)
    
    const setWH_handler = (w:number,h:number)=>{
        setWH({w,h})
    }

    const resize_handler = ()=>{
        setWH_handler(window.innerWidth,window.innerHeight)
    }

    useEffect(()=>{
        window.addEventListener('resize',resize_handler)
        return()=>{
            window.removeEventListener('resize',resize_handler)
        }
    },[wh])

    return(
        <div className="container-myskilltrees" ref={containerRef}>
            <AboutMe wh={wh}/>
            <AboutFrontend wh={wh}/>
            <AboutBackend wh={wh}/>
            <AboutVersionControl wh={wh}/>
        </div>
    )
}

export default MyskillTrees;
type about_type = {
    wh:wh_type,
}
function AboutMe({wh}:about_type){
    const {theme} = useAppSelector(state => state.theme)
    return (
            <AboutFrame 
                y={-50}
                wh={wh}
                title={"about-me"}
                class_name_in="container-aboutme-in"
                class_name_out="container-aboutme-out"
            >
                    <ol className="fcss">
                        <li>
                            <span>1</span> 
                            <span>
                                안녕하세요! 저는 프론트엔드 신입개발자가 되길 바라는 <span className={theme === "dark"?"green":"blue"}>김기준</span>입니다.
                            </span>
                        </li>
                        <li>
                            <span>2</span>
                            <span> 비록 성적 맞춰 진학한 과였지만 웹 프로그래밍 수업후 관심을 갖게 되어 프런트엔드 개발자를 꿈꾸게 되었습니다.</span>

                        </li>
                        <li>
                            <span>3</span>
                            <span>더 완성도 있는 코드, 더 발전하는 ux/ui를 만들 수 있는 사람이 되겠습니다.</span>
                        </li>                        
                    </ol>
            </AboutFrame>
    )
}

function AboutFrontend({wh}:about_type){

    const svgArr = [
        {
            src:"html",
            name:"html",
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
                // x={50}
                y={70}
                wh={wh}
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

function AboutBackend({wh}:about_type){

    const svgArr = [
        {
            src:"nodejs",
            name:"nodeJS",
            baseColor:"base-black-svg"
        },{
            src:"mongodb",
            name:"mongoDB",
            baseColor:"none"
        },{
            src:"aws",
            name:"aws",
            baseColor:"base-white-svg"
        },{
            src:"vercel",
            name:"vercel",
            baseColor:"base-white-svg"
        }
    ]

    return (
        <AboutFrame 
                x={-300}
                wh={wh}
                title={"backend-me"}
                class_name_in="container-backend-in"
                class_name_out="container-backend-out"
            >
            <ol className="fcsc">
                {
                    (svgArr && svgArr.length > 0) && svgArr.map((item,idx)=>(
                        <li className="frcc" key={idx}>
                        <GetSVG class_name={item.baseColor} src={item.src}/>
                        <span>{item.name}</span>
                    </li>
                    ))
                }

            </ol>   
        </AboutFrame>
    )
}

function AboutVersionControl({wh}:about_type){

    const svgArr = [
        {
            src:"git",
            name:"git",
            baseColor:""
        },{
            src:"github",
            name:"github",
            baseColor:"base-white-svg"
        },{
            src:"jira",
            name:"jira",
            baseColor:""
        }
    ]

    return (
        <AboutFrame 
                y={-20}
                x={-550}
                wh={wh}
                title={"version-control-me"}
                class_name_in="container-vc-in"
                class_name_out="container-vc-out"
            >
            <ol className="fcsc">
                {
                    (svgArr && svgArr.length > 0) && svgArr.map((item,idx)=>(
                        <li className="frcc" key={idx}>
                        <GetSVG class_name={item.baseColor} src={item.src}/>
                        <span>{item.name}</span>
                    </li>
                    ))
                }

            </ol>   
        </AboutFrame>
    )
}


type AboutFrame_type = {
    x?:number,
    y?:number,
    wh:wh_type
    title:string
    children:ReactNode
    class_name_in:string
    class_name_out:string
}

function AboutFrame({
    x,
    y,
    wh,
    title,
    children,
    class_name_in,
    class_name_out
}:AboutFrame_type){

    const inRef = useRef<HTMLDivElement>(null)
    const outRef = useRef<HTMLDivElement>(null)
    const {onLeave,onMove} = hookAnimation({outRef,inRef})
    const {window,tree_info_border} = useAppSelector(state => state.theme)
 
    useGSAP(()=>{
        outRef.current?.addEventListener('mousemove',onMove)
        outRef.current?.addEventListener('mouseleave',onLeave)
        return()=>{
            outRef.current?.removeEventListener('mousemove',onMove)
            outRef.current?.removeEventListener('mouseleave',onLeave)
        }
    },{dependencies:[wh]})

    const ani = () => {
        const tl = gsap.from(outRef.current,{
            x:x,
            y:y,
            duration: 1,
            scrollTrigger:{
                scrub:1,
                trigger: outRef.current,
                start: `0% 80%`,
                end: `100% 80%`,
                toggleActions:"restart none reverce none"
            }
        })
        return tl
    }

    useEffect(()=>{
        ani()
        return ()=>{
            // ani().kill()
        }    
    },[wh])

    
    return (
        <div 
            ref={outRef}
            className={`container-about-out ${class_name_out}`}>
                <div ref={inRef} className={`container-about-in ${class_name_in}`}
                    style={{background:window}}
                >
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