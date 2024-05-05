import "./projectViewNum.scss"
import "../flex.scss"
import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

type ProjectViewNum_type = {
    page_number_handler:(num:number)=>void,
    bdFstRef : React.MutableRefObject<(HTMLDivElement | null)[]>
    bdSecRef : React.MutableRefObject<(HTMLDivElement | null)[]>
    bdTrdRef : React.MutableRefObject<(HTMLDivElement | null)[]>

}

function ProjectViewNum({page_number_handler,bdFstRef,bdSecRef,bdTrdRef}:ProjectViewNum_type){


    const num = 3

    

    const borderJSXArray = Array.from({length:num},(_,idx)=>(
        <div className="projectView-line" key={idx}>
            <div>
                <div ref={el => bdFstRef.current[idx] = el} className="fst-line"/>
            </div>
            <div className="fccc">
                <div ref={el => bdSecRef.current[idx] = el}  className="sec-line"/>
                <div className="fccc">
                        {num - idx}
                </div>
            </div>
            <div className="fccc">
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