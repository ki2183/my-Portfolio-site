import "./myskills.scss"
import "../../../flex.scss"
import GetSVG from "../../../FOLDER_svg/getSVG"
import { ReactNode, forwardRef, useEffect, useRef } from "react"
import gsap from "gsap"

function Myskills(){

    const frontend = [
        "html","css","js","typescript","react","reactquery","redux","scss","tailwind"
    ]

    const backend = [
        "nodejs","mongodb","aws","vercel",
    ]

    const versionControl = [
        "git","github","jira"
    ]

    return (
        <div className="container-myskills fcss">
            <MyskillsFrame title="frontend" svgArr={frontend}/>
            <MyskillsFrame title="backend" svgArr={backend}/>
            <MyskillsFrame title="versionControl" svgArr={versionControl}/>
        </div>
    )
}

export default Myskills

type ViewSVG_type = {
    svg:string
}

type MyskillsFrame_type = {
    title:string,
    svgArr:string[],
}

function MyskillsFrame({title,svgArr}:MyskillsFrame_type){
    return(
        <div className="frame-myskills">
            <div className="frcs">
                <span className="myskills-title">{title}:</span>
                <div className="frcs">
                <BorderAnimation stagger={0.15} y={15} >
                    {
                        (svgArr && svgArr.length > 0) && svgArr.map((item,idx)=>(
                            <ViewSVG 
                                key={idx}  
                                svg={item}
                            />
                        ))
                    }
                    </BorderAnimation>
                </div>
            </div>
        </div>
    )
}

function ViewSVG({svg}:ViewSVG_type){
    return(
        <>
        <div className="view-svg frcc">
            <GetSVG src={svg} />
            <span>{svg}</span>
        </div>
        </>
    )
}


type borderAnimation_type = {
    children:ReactNode
    stagger:number
    y:number
}

const BorderAnimation = forwardRef<HTMLDivElement, borderAnimation_type>(({children,stagger,y}, ref) => {

	const el = useRef<HTMLSpanElement>(null) 
    const animation = useRef<gsap.core.Tween | null>(null);  
  
    useEffect(()=>{
        const ctx = gsap.context(() => {
            if(el.current){
                animation.current = gsap.from(el.current?.children,{
                    opacity:0,
                    stagger,
                    y
                })
            }
        });
        return ()=>{
            ctx.revert()
        }
    },[])

    return (
        <span className="frss" style={{gap:"0.5rem"}} ref={el}>
            {children}
        </span>
    );
});