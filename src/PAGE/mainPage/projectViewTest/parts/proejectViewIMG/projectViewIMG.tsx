import "./projectViewIMG.scss"
import "../flex.scss"
import myProject from "../../../projectInfo/projectImgs/resister_img.png"
import D_appProject from "../../../projectInfo/projectImgs/Dapp.png"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { wh_type } from "../../projectViewTest"
import { scroll_trigger_hooks } from "../projectViewHooks"
gsap.registerPlugin(ScrollTrigger)

type ProjectViewIMG_type = {
    wh:wh_type,
    pageNum:number
    imgRef:React.MutableRefObject<(HTMLDivElement | null)[]>
}

function ProjectViewIMG({wh,pageNum,imgRef}:ProjectViewIMG_type){

    const num = 3

    // const imgRef =  useRef<Array<HTMLDivElement|null>>([])
    useGSAP(()=>{
        ScrollTrigger.create({
            trigger:".frame-projectView-img",
            animation:animation_gsap(),
            scrub:1,
            start:"start start",
            end: `${window.innerHeight*num} ${window.innerHeight}`,
            pin:true,
            markers:true
        })
        return ()=>{
            animation_gsap().kill()
        }
    },[pageNum])

    useEffect(()=>{
        animation_set()
    },[])

    const animation_gsap = () =>{

        const tl = gsap.timeline()
        
        // imgRef.current.forEach((child,idx)=>{
        //     const number = idx-pageNum
        //     tl.to(child,{
        //         // x:5
        //     })
        // })

        return tl
    }
    const animation_set = () =>{
        
        const tl = gsap.timeline()

        imgRef.current.forEach((child,idx)=>{
            const number = idx-pageNum
            var degree = 90/(num) * idx;
            var radian = degree * (Math.PI / 180);
            var value = Math.sin(radian);
          
            tl.set(child,{
                zIndex:50-idx,
                // x:`calc(30% - ${15*idx}px)`,
                transformOrigin:"0% 50%",
                transform: `translate(calc( 30% - ${50*value}px ) , -50%) perspective(1500px)`,
                rotateY:25,
                skewY:-2,
                scale:1-idx*0.2,
            })
        })
    }

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