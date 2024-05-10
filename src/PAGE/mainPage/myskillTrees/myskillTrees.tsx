import "./myskillTrees.scss"
import '../../../flex.scss'
import "../../../font.scss"
import { ReactNode, useEffect, useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { hover } from "@testing-library/user-event/dist/hover"
import { hookAnimation } from "./hooks"
import GetSVG from "../../../FOLDER_svg/getSVG"
function MyskillTrees(){

    useLayoutEffect(()=>{
        const tl = gsap.timeline()
        tl.set(".container-frontend-out",{
            transform:"translate(70%,-200px)"
        })
        tl.set(".container-backend-out",{
            transform:"translate(-70%,-50px)"
        })
        tl.set(".container-vc-out",{
            transform:"translate(-150%,-70%)"
        })
    },[])
    
    return(
        <div className="container-myskilltrees">
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
                            <li className="frcc">
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
                        <li className="frcc">
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
                        <li className="frcc">
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