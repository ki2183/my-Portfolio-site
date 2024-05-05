import "./projectViewIMG.scss"
import "../flex.scss"
import myProject from "../../../projectInfo/projectImgs/resister_img.png"
import D_appProject from "../../../projectInfo/projectImgs/Dapp.png"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { wh_type } from "../../projectViewTest"
gsap.registerPlugin(ScrollTrigger)

type ProjectViewIMG_type = {
    wh:wh_type,
    pageNum:number
    imgRef:React.MutableRefObject<(HTMLDivElement | null)[]>
}

function ProjectViewIMG({wh,pageNum,imgRef}:ProjectViewIMG_type){

    // const imgRef =  useRef<Array<HTMLDivElement|null>>([])

    return(
        <div id="frame-projectView-img" className="fccc" >
        <div>
            <div className="projectView-img fccc" ref={el => imgRef.current[0] = el}>
                <div>
                    <img className=""src={myProject}/>
                    <img className="" src={myProject}/>
                </div>
            </div>
            <div className="projectView-img fccc" ref={el => imgRef.current[1] = el}>
                <div>
                    <img className=""src={D_appProject}/>
                    <img className="" src={D_appProject}/>
                </div>
                
            </div>
            <div className="projectView-img fccc" ref={el => imgRef.current[2] = el}>

                <div>
                    <img className=""src={myProject}/>
                    <img className="" src={myProject}/>
                </div>
            </div>
              <div className="projectView-img fccc" ref={el => imgRef.current[3] = el}>

                <div>
                    <img className=""src={myProject}/>
                    <img className="" src={myProject}/>
                </div>
            </div>
            <div className="projectView-img fccc" ref={el => imgRef.current[4] = el}>

                <div>
                    <img className=""src={myProject}/>
                    <img className="" src={myProject}/>
                </div>
            </div>
            
        </div>
    </div>
    )
}

export default ProjectViewIMG;