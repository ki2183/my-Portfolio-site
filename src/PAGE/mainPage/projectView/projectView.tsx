import { useGSAP } from "@gsap/react"
import "./projectView.scss"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from "gsap"
import { useEffect, useRef, useState } from "react"
import ScrollTriggerProjectViewHooks from "./scrollTriggerHooks"
import ViewIMG from "./parts/viewIMG/viewIMG"
import ViewLINE from "./parts/viewLINE/viewLINE"
import ViewINFO from "./parts/viewINFO/viewINFO"
import { project_information_dto } from "../../../projectInformation"
import ViewModal from "../../../COMPONENTS/modal/modal"
import { useAppDispatch } from "../../../REDUX/hooks"
import { chanage_view_number } from "../../../REDUX/Slices/viewNumSlice"

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

    const dispatch = useAppDispatch()

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
                    const func = () =>{
                    const Trigger1 = ScrollTrigger.getById("scroll-img");
                    if(Trigger1)
                        Trigger1.kill()
                    const Trigger2 = ScrollTrigger.getById("scroll-line");
                    if(Trigger2)
                        Trigger2.kill()
                    const Trigger3 = ScrollTrigger.getById("scroll-info");
                    if(Trigger3)
                        Trigger3.kill()
                    }
                    func()
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

    useEffect(()=>{
        dispatch(chanage_view_number(pageNum))
    },[pageNum])

    return (
        <div ref={ref} className="container-projectView">
            <ViewModal/>
           <ViewIMG imgRef={imgRef}/>
           <ViewLINE
                num={project_information_dto.length}
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
