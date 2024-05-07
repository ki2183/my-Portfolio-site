import "./myBlog.scss"
import "../../../flex.scss"
import GetSVG from "../../../FOLDER_svg/getSVG"
import velog from "../../../svgFolder/velog.svg"
import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"



function MyBlog(){
    const initialXY = {x:0,y:0}
    type mouseXY_type = typeof initialXY

    const elRef = useRef<Array<HTMLDivElement|null>>([]) 
    const animation = useRef<Array<gsap.core.Tween | null>>([]);  
    const [mouseXY,setMouseXY] = useState<mouseXY_type>(initialXY)
    const [overCheck,setOverCheck] = useState<boolean>(false)
    const circle = useRef<HTMLDivElement>(null)

    const animation_enter = (e:MouseEvent)=>{
        
        const tl = gsap.timeline()
        tl.set(".circle1",{left:e.offsetX,top:e.offsetY,scale:1,opacity:1})
        tl.to(".circle1",{duration:0.8,opacity:1,scale:10})

        return tl
    }
    const animation_leave = (e:MouseEvent) =>{
        const tl = gsap.timeline()
        tl.to(".circle1",{duration:0.5,scale:0}) 
        tl.set(".circle1",{opacity:0})
        return tl
    }

    let enterAnimation: TimelineMax | null = null;
    let leaveAnimation: TimelineMax | null = null;

    const mouse_enter_event = (e: MouseEvent) => {
        if (leaveAnimation && leaveAnimation.isActive()) {
            leaveAnimation.kill();
        }
        enterAnimation = animation_enter(e);
        enterAnimation.play();
    }
    const mouse_leave_event = (e: MouseEvent) => {
        if (enterAnimation && enterAnimation.isActive()) {
            enterAnimation.kill();
        }
        leaveAnimation = animation_leave(e);
        leaveAnimation.play();
    }

    const mouse_move_event = (e:MouseEvent) =>{
        // e.preventDefault()
        gsap.to(circle.current,{left:e.offsetX,top:e.offsetY})
    }

    useEffect(()=>{
        if(elRef.current[0]){
            elRef.current[0].addEventListener("mouseenter",mouse_enter_event)
            elRef.current[0].addEventListener("mouseleave",mouse_leave_event)
            elRef.current[0].addEventListener("mousemove",mouse_move_event)
        }
            
        return ()=>{
            if(elRef.current[0]){
                elRef.current[0].removeEventListener("mouseenter",mouse_enter_event)
                elRef.current[0].removeEventListener("mouseleave",mouse_leave_event)
                elRef.current[0].removeEventListener("mouseenter",mouse_enter_event)
            }
                
        }
    },[])

    useEffect(()=>{
        console.log(mouseXY)
    },[mouseXY])

    useEffect(()=>{
        gsap.to('.ss',{
            opacity:1,
            scale:1
        })
    },[])

    // useGSAP(()=>{
    //     if(overCheck){
    //         gsap.to(".circle1",{
    //             left:,
    //             top:mouseXY.y,
    //         })
    //     }
    // },[overCheck,mouseXY])

    return(
        <div className="container-myBlog frcc" >
            <div className="fcsc blog" ref={el => elRef.current[0] = el} 
            >
                <div className="blog-in fcsc">
                    <span className="myBlog-svg frcc">
                        <GetSVG src="github"/>
                        <span>GitHub</span>
                    </span>
                    <span className="blog-link">https://github.com/ki2183</span>
                    <li>과거 진행했던 프로젝트 코드</li>
                    <li>클론 코드</li>
                    <li>학습 코드</li>
                    <li>과제 코드</li>
                    <div className="null-box-blog">
                        
                    </div>
                    <div ref={circle} className="mirror-circle circle1">
            
                    </div>
                </div>
            </div>
            <div className="fcsc blog" ref={el => elRef.current[1] = el}>
            <span className="myBlog-svg frcc">
                    <img src={velog}></img>
                    <span>velog</span>
                </span>
                <span className="blog-link">https://velog.io/@ki2183/posts</span>
                <li>학습하고 내용을 공유</li>
                <li>설정이나 오류 해결</li>
                <li>쓰고 싶을 때</li>
            </div>

            <div className="fcsc blog" ref={el => elRef.current[2] = el} 
            >
                <div className="blog-in fcsc">
                    빈박스
                </div>
            </div>
        </div>
    )
}

export default MyBlog