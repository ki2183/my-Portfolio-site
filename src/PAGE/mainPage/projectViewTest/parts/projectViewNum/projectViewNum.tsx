import "./projectViewNum.scss"
import "../flex.scss"
import { useRef } from "react"
import { useGSAP } from "@gsap/react"

function ProjectViewNum(){

    const bdFstRef = useRef<Array<HTMLDivElement|null>>([])
    const bdSecRef = useRef<Array<HTMLDivElement|null>>([])
    const bdTrdRef = useRef<Array<HTMLDivElement|null>>([])
    const num = 3

    useGSAP(()=>{
        
    },[])

    const borderJSXArray = Array.from({length:num},(_,idx)=>(
        <div className="projectView-line">
            <div>
                <div ref={el => bdFstRef.current[idx] = el} className="fst-line"/>
            </div>
            <div className="f-c-c-c">
                <div ref={el => bdSecRef.current[idx] = el}  className="sec-line"/>
                <div className="f-c-c-c">
                        {num - idx}
                </div>
            </div>
            <div className="f-c-c-c">
                <div ref={el => bdTrdRef.current[idx] = el} className="trd-line"/>
            </div>
        </div>
    ))

    return(
        <div className="frame-projectView-line">
            { borderJSXArray }
        </div>
    )
}

export default ProjectViewNum;