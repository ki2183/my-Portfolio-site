import gsap from "gsap"
import "./projectViewTest.scss"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useRef, useState } from "react"
import { useGSAP } from "@gsap/react"
import ProjectViewNum from "./parts/projectViewNum/projectViewNum"
import ProjectViewIMG from "./parts/proejectViewIMG/projectViewIMG"
import { animationHooks, scroll_trigger_hooks } from "./parts/projectViewHooks"
gsap.registerPlugin(ScrollTrigger)

export type wh_type = {
    w:number,
    h:number
}

export function ProjectViewText(){
    const ref = useRef<HTMLDivElement>(null)
    const [initialLimit,setInitialLimit] = useState<boolean>(false)
    const imgRef =  useRef<Array<HTMLDivElement|null>>([])
    const bdFstRef = useRef<Array<HTMLDivElement|null>>([])
    const bdSecRef = useRef<Array<HTMLDivElement|null>>([])
    const bdTrdRef = useRef<Array<HTMLDivElement|null>>([])
    const [pageNum,setPageNum] = useState<number>(0)
    const [wh,setWH] = useState({
        w:0,
        h:0
    })

    useEffect(()=>{
        getWH()
    },[])

    useEffect(()=>{
        window.addEventListener('resize',getWH)
        return ()=>{
            window.removeEventListener('resize',getWH)
        }
    },[])

    const getWH = () =>{
        setWH({
            w:ref.current ? ref.current.clientWidth : 0,
            h:ref.current ? ref.current.clientHeight : 0
        })
    }

    const page_number_handler = (num:number) =>{
        setPageNum(num)
    }

    const num = 3

    useGSAP(()=>{
        scroll_trigger_hooks({
            num:3,
            pin:false,
            animation:animation_gsap_bd,
            trigger:".frame-projectView-line"
        })
        return ()=>{
            animation_gsap_bd().kill()
        }
    },[wh])




    // useGSAP(()=>{
    //         ScrollTrigger.create({
    //         trigger:"#frame-projectView-img",
    //         animation:animation_gsap(),
    //         scrub:1,
    //         start:"start start",
    //         end: `${window.innerHeight*3} ${window.innerHeight}`,
    //         markers:true,
    //         pin:true,
    //     })

    //     return ()=>{
    //         animation_gsap().kill()
    //     }
    // },[])

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



 const animation_gsap_bd = ()=>{
     const tl = gsap.timeline()
     Array.from({length:num},(_,idx)=>{
         if(idx !== 0)
             tl.from(bdFstRef.current[idx],{
                 duration:1,
                 scaleY:0,
                 transformOrigin:"top"
             })    
         tl.from(bdSecRef.current[idx],{
             duration:1,
             scaleY:0,
             transformOrigin:"top",
             onUpdate:()=>{
                 page_number_handler(idx)
             }
         })

         if(idx !== num-1)
             tl.from(bdTrdRef.current[idx],{
                 duration:1,
                 scaleY:0,
                 transformOrigin:"top"
             })
     })

     return tl
 }

    return (
        <div className="container-proejctView-total" ref={ref}>
            <ProjectViewIMG
                wh={wh}
                imgRef={imgRef}
                pageNum={pageNum}
            />
            <ProjectViewNum 
                bdFstRef={bdFstRef}
                bdSecRef={bdSecRef}
                bdTrdRef={bdTrdRef}
                page_number_handler={page_number_handler}
            />
            <div className="projectINFO">
            asdasdasdasd
            </div>
        </div>
    )
}