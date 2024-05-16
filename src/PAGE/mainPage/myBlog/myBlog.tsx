import "./myBlog.scss"
import "../../../flex.scss"
import velog from "../../../FOLDER_svg/velog.svg"
import github from "../../../FOLDER_svg/github.svg"
import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { useAppSelector } from "../../../REDUX/hooks"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useNavigate } from "react-router-dom"
import GetSVG from "../../../FOLDER_svg/getSVG"
gsap.registerPlugin(ScrollTrigger)

const initialWH = {
    w:0,
    h:0
}
type wh_type = typeof initialWH

function MyBlog(){
    const initialXY = {x:0,y:0}
    type mouseXY_type = typeof initialXY
    const {bg} = useAppSelector(state => state.theme)

    const elRef = useRef<Array<HTMLDivElement|null>>([]) 
    const circleRef = useRef<Array<HTMLDivElement|null>>([])

    const goURL = (url:string) =>{
        window.location.href = url
    }

    const animation_enter = (e:MouseEvent,idx:number)=>{
        
        const tl = gsap.timeline()
        tl.set(circleRef.current[idx],{left:e.offsetX,top:e.offsetY,scale:1,opacity:1})
        tl.to(circleRef.current[idx],{duration:0.8,opacity:1,scale:10})

        return tl
    }
    const animation_leave = (e:MouseEvent,idx:number) =>{
        const tl = gsap.timeline()
        tl.to(circleRef.current[idx],{duration:0.5,scale:0}) 
        tl.set(circleRef.current[idx],{opacity:0})
        return tl
    }

    let enterAnimationArr: Array<TimelineMax | null> = []
    let leaveAnimationArr: Array<TimelineMax | null> = []

    const mouse_enter_event = (e:MouseEvent,idx:number) =>{
        if(leaveAnimationArr[idx]&&leaveAnimationArr[idx]?.isActive())
            leaveAnimationArr[idx]?.kill()
        enterAnimationArr[idx] = animation_enter(e,idx)
        enterAnimationArr[idx]?.play()

    }
    const mouse_leave_event = (e:MouseEvent,idx:number) =>{
        if(enterAnimationArr[idx]&&enterAnimationArr[idx]?.isActive())
            enterAnimationArr[idx]?.kill()
        leaveAnimationArr[idx] = animation_leave(e,idx)
        leaveAnimationArr[idx]?.play()
    }

    const mouse_move_event = (e:MouseEvent,idx:number) =>{
        if(circleRef.current[idx])
            gsap.to(circleRef.current[idx],{left:e.offsetX,top:e.offsetY,duration:1})
    }

    useEffect(()=>{
        elRef.current.map((child,idx)=>{
            if(child){
                child.addEventListener("mouseenter",e => mouse_enter_event(e,idx))
                child.addEventListener("mouseleave",e=> mouse_leave_event(e,idx))
                child.addEventListener("mousemove",e=>mouse_move_event(e,idx))
            }
        })
            
        return ()=>{
            elRef.current.map((child,idx)=>{
                if(child){
                    child.removeEventListener("mouseenter",e => mouse_enter_event(e,idx))
                    child.removeEventListener("mouseleave",e=> mouse_leave_event(e,idx))
                    child.removeEventListener("mousemove",e=>mouse_move_event(e,idx))
                }
            })   
        }
    },[])

    const scroll_event =()=>{
        const tl = gsap.timeline()
        tl.from(elRef.current[0],{
            y:50,
            duration:0.5,
        },0.5)
        tl.from(elRef.current[1],{
            y:50,
            duration:0.5,
        },1)
        ScrollTrigger.create({
            trigger:".container-myBlog",
            animation:tl,
            scrub:1,
            start:"center 90%",
            end:"center 90%",
            toggleActions:"restart none reverse none"
        })
    }

    useGSAP(()=>{
        scroll_event()
    },[])    

    return(
        <div className="container-myBlog frcc" >
            <div className="fcsc blog" ref={el => elRef.current[0] = el} 
                onClick={()=>goURL("https://github.com/ki2183")}
            >
                <div className="blog-in fcsc" 
                style={{backgroundColor:bg}}
                >
                    <span className="myBlog-svg frcc">
                        <GetSVG src="github" class_name="base-white-svg"/>
                        <span>GitHub</span>
                    </span>
                    <span className="blog-link">https://github.com/ki2183</span>
                    <li>과거 진행했던 프로젝트 코드</li>
                    <li>클론 코드</li>
                    <li>학습 코드</li>
                    <li>과제 코드</li>
                    <div className="null-box-blog">
                        
                    </div>
                    <div ref={el =>{circleRef.current[0] = el}} className="mirror-circle circle1"/>
                </div>
            </div>
            <div className="fcsc blog" ref={el => elRef.current[1] = el} 
                onClick={()=>goURL("https://velog.io/@ki2183/posts")}
            >
                <div className="blog-in fcsc"
                    style={{backgroundColor:bg}}
                >
                    <span className="myBlog-svg frcc">
                    <GetSVG class_name="base-white-svg" src="velog"/>
                        <span>velog</span>
                    </span>
                    <span className="blog-link">https://velog.io/@ki2183/posts</span>
                    <li>학습하고 내용을 공유</li>
                    <li>설정이나 오류 해결</li>
                    <li>쓰고 싶을 때</li>
                    <div className="null-box-blog">
                        
                    </div>
                    <div ref={el =>{circleRef.current[1] = el}} className="mirror-circle"/>
                </div>
            </div>
        </div>
    )
}

export default MyBlog