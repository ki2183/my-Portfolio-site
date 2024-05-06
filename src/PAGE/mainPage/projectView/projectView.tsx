import { useGSAP } from "@gsap/react"
import "./projectView.scss"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from "gsap"
import { useEffect, useRef, useState } from "react"
import ScrollTriggerProjectViewHooks from "./scrollTriggerHooks"
import ViewIMG from "./parts/viewIMG/viewIMG"
import ViewLINE from "./parts/viewLINE/viewLINE"
import ViewINFO from "./parts/viewINFO/viewINFO"
import { project_information } from "../../../projectInformation"

gsap.registerPlugin(ScrollTrigger)

function ProjectView(){

    const ref = useRef<HTMLDivElement>(null) //total DIV
    const [wh,setWH] = useState<{w:number,h:number}>({ //width height
        w:0,
        h:0
    })
    const gap = 48 
    const [pageNum,setPageNum] = useState<number>(0) //pageNumber
    const bdFstRef = useRef<Array<HTMLDivElement|null>>([])
    const bdSecRef = useRef<Array<HTMLDivElement|null>>([])
    const bdTrdRef = useRef<Array<HTMLDivElement|null>>([])
    const imgRef =  useRef<Array<HTMLDivElement|null>>([])
    const informationRef = useRef<Array<HTMLDivElement|null>>([])

    const {scrollTrigger_setup_handler,scrollTrigger_page_handler} = ScrollTriggerProjectViewHooks()
    const scroll_page_handler = () => scrollTrigger_page_handler({gap,imgRef,pageNum,informationRef})
    const scroll_setup_handler = () => scrollTrigger_setup_handler({ref,imgRef,bdFstRef,bdSecRef,bdTrdRef,page_hanler,pageNum})
    const page_hanler = (num:number)=> setPageNum(num) // setPage Func

    const getWH = () => {
        const width = window.innerWidth
        const height = window.innerHeight
        setWH({w:width,h:height})
    }

    useEffect(()=>{ // resize => get width height
        getWH()
        window.addEventListener('resize',getWH)
        return ()=>{
            window.removeEventListener('resize',getWH)
        }
    },[])

    useGSAP(()=>{
        scroll_setup_handler()
    },[]) //initial scroll_set_animation


    useGSAP(()=>{

        const scroll_setup_async = async()=>{
            await new Promise<void>((resolve,reject)=>{
                window.addEventListener('resize',()=>{
                    ScrollTrigger.getAll().forEach(trigger=>{
                        trigger.kill()
                    })
                    resolve();
                })    
            })
            
            await scroll_setup_handler()
        } 
        scroll_setup_async()
    },[wh]) //resize scroll_set_animation async

    useGSAP(()=>{
        scroll_page_handler()
    },[pageNum,wh]) //pageNum animation

    return (
        <div ref={ref} className="container-projectView">
       
           <ViewIMG imgRef={imgRef}/>
           <ViewLINE
                num={project_information.length}
                bdFstRef={bdFstRef}
                bdSecRef={bdSecRef}
                bdTrdRef={bdTrdRef}
            />
            <ViewINFO
                wh={wh}
                informationRef={informationRef}
            />
        </div>
    )
}

export default ProjectView


