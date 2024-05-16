import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

type scrollTrigger_setup_type = {
    pageNum:number
    page_hanler:(num:number)=>void
    ref: React.RefObject<HTMLDivElement>
    imgRef: React.MutableRefObject<(HTMLDivElement | null)[]>
    bdFstRef: React.MutableRefObject<(HTMLDivElement | null)[]>
    bdSecRef: React.MutableRefObject<(HTMLDivElement | null)[]>
    bdTrdRef: React.MutableRefObject<(HTMLDivElement | null)[]>
}
type scrollTrigger_page_handler_type = {
    gap:number
    pageNum:number
    imgRef: React.MutableRefObject<(HTMLDivElement | null)[]>
    informationRef:React.MutableRefObject<(HTMLDivElement | null)[]>
}
function ScrollTriggerProjectViewHooks(){

    const scrollTrigger_setup_handler= ({ //scrollTrigger 세팅
        ref,
        imgRef,
        pageNum,
        bdFstRef,
        bdSecRef,
        bdTrdRef,
        page_hanler,
    }:scrollTrigger_setup_type)=>{
        const tl = gsap.timeline()
        imgRef.current.forEach((child,idx)=>{
            const orderNum = (idx-pageNum)
            gsap.set(child,{
                    zIndex:100-idx,
                    transformOrigin: "0% 50%",
                    transform: `translate(-${30 + idx*8}% , -50%) perspective(1500px)`,
                    rotateY:30+idx*10,
                    skewY:-2,
                    scale:1-orderNum*0.2,
            }) 
        }) //img animation set

        gsap.set([".fst-line",".sec-line",".trd-line"],{
            scaleY:1,
            scaleX:1,
            transformOrigin:"top"
        }) //line animation set

        bdSecRef.current.forEach((child,idx)=>{
            if(idx !== 0)
                tl.from(bdFstRef.current[idx],{
                    scaleY:0,
                    duration:1,
                })
            tl.from(bdSecRef.current[idx],{
                scaleY:0,
                duration:1.5,
                onUpdate:()=>{
                    page_hanler(idx)
                }
            })
            if(idx !== bdSecRef.current.length-1)
                tl.from(bdTrdRef.current[idx],{
                    scaleY:0,
                    duration:1
                })
        }) //line animation

        const tl_info = gsap.timeline()    

        ScrollTrigger.create({
            id:"scroll-img",
            trigger:".frame-projectView-img",
            animation:gsap.set('.frame-projectView-img',{}),
            scrub:1,
            start:"start start",
            end: `${ref.current?.clientHeight} ${window.innerHeight}`,
            pin:true,
        }) //IMG PIN
        ScrollTrigger.create({
            id:"scroll-line",
            trigger:".frame-projectView-line",
            animation:tl,
            scrub:1,
            start:"start start",
            end: `${ref.current?.clientHeight} ${window.innerHeight}`,
        })//LINE
        ScrollTrigger.create({
            id:"scroll-info",
            trigger:".frame-projectView-info-in",
            animation:tl_info,
            scrub:1,
            start:"start start",
            end: `${ref.current?.clientHeight} ${window.innerHeight}`,
            pin:true,
        })//INFO PIN
    }

    const scrollTrigger_page_handler = ({
        gap,
        imgRef,
        pageNum,
        informationRef
    }:scrollTrigger_page_handler_type) => {
        let sum = 0
        let limit = false


        informationRef.current.forEach((child,idx)=>{
            if(idx === pageNum){
                gsap.to(child,{
                    duration:0.3,
                    scale:1,
                    opacity:1,
                    ease:"power3.out"
                })
                limit = true
                gsap.to(".projectView-info",{
                    duration:0.3,
                    ease:'power3.out',
                    y:-(sum + pageNum*gap + informationRef.current[pageNum]!.clientHeight/2)
                })
            }else{
                gsap.to(child,{
                    duration:0.3,
                    scale:0.8,
                    opacity:0.5,
                    ease:"power3.out"
                })
            }
            if(!limit && child?.clientHeight){
                sum += child!.clientHeight
            }
        })// INFO animation

        imgRef.current.forEach((child,idx)=>{
            const orderNum = (pageNum-idx)
            const degree = 90/(imgRef.current.length) * idx;
            const radian = degree * (Math.PI / 180);
            const value = Math.sin(radian);
        
            if(orderNum <= 0){
                gsap.to(child,{
                    duration:0.3,
                    zIndex:100-idx,
                    opacity:0.95,
                    transformOrigin: "0% 50%",
                    x: `-${30 + 10*value}% `,
                    rotateY:30,
                    skewY:-3,
                    scale:1 + orderNum*0.2,
                })
            }
            else{
                gsap.to(child,{
                    duration:0.3,
                    zIndex:100-idx,
                    opacity:0,
                    transformOrigin: "0% 50%",
                    x: `-${30 - 5}% `,
                    rotateY:30,
                    skewY:-3,
                    scale:1+orderNum*0.2,
                })
            }
        })// IMG animation
    }

    return {
        scrollTrigger_page_handler,
        scrollTrigger_setup_handler,
    }
}

export default ScrollTriggerProjectViewHooks