import { useGSAP } from "@gsap/react"
import "./projectView.scss"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from "gsap"
import { useEffect, useRef, useState } from "react"
import myProject from "../projectInfo/projectImgs/resister_img.png"
import D_appProject from "../projectInfo/projectImgs/Dapp.png"
import react_img from "../../../svgFolder/react.svg"
import html_img from "../../../svgFolder/html.svg"
import css_img from "../../../svgFolder/css.svg"
import js_img from "../../../svgFolder/js.svg"
import nodejs_img from "../../../svgFolder/nodejs.svg"
import aws_img from "../../../svgFolder/aws.svg"
import mysql_img from "../../../svgFolder/mysql.svg"
import git_img from "../../../svgFolder/git.svg"
import github_img from "../../../svgFolder/github.svg"

gsap.registerPlugin(ScrollTrigger)

function ProjectView(){

    const ref = useRef<HTMLDivElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const [wh,setWH] = useState<{w:number,h:number}>({
        w:0,
        h:0
    })
    const imgRef =  useRef<Array<HTMLDivElement|null>>([])

    const gap = 48
    const [pageNum,setPageNum] = useState<number>(0)
    const bdFstRef = useRef<Array<HTMLDivElement|null>>([])
    const bdSecRef = useRef<Array<HTMLDivElement|null>>([])
    const bdTrdRef = useRef<Array<HTMLDivElement|null>>([])
    const informationRef = useRef<Array<HTMLDivElement|null>>([])

    const arr = ["","",""] 

    const getWH = () => {
        const width = window.innerWidth
        const height = window.innerHeight
        setWH({w:width,h:height})
    }

    useEffect(()=>{
        getWH()
        window.addEventListener('resize',getWH)
        return ()=>{
            window.removeEventListener('resize',getWH)
        }
    },[])

    const scrollTrigger_setup= ()=>{
        const tl = gsap.timeline()
        imgRef.current.forEach((child,idx)=>{
            const orderNum = (idx-pageNum)
            gsap.set(child,{
                    zIndex:100-idx,
                    transformOrigin: "0% 50%", // 요소의 중심점을 좌측으로 설정
                    transform: `translate(-${30 + idx*8}% , -50%) perspective(1500px)`,
                    rotateY:30+idx*10,
                    skewY:-2,
                    scale:1-orderNum*0.2,
            })
        })

        // gsap.set([".fst-line",".sec-line",".trd-line"],{
        //     scaleY:1,
        //     scaleX:1,
        //     transformOrigin:"top"
        // })
        gsap.set(".projectView-info-in",{
            // marginLeft:"-14px"
        })

        for(let i = 0; i<3; i++){
            if(i !== 0)
                tl.from(bdFstRef.current[i],{
                    scaleY:0,
                    duration:1,
                })
            tl.from(bdSecRef.current[i],{
                scaleY:0,
                duration:1.5,

                onUpdate:()=>{
                    setPageNum(i)
                }
        
            })
            if(i !==3)
                tl.from(bdTrdRef.current[i],{
                    scaleY:0,
                    duration:1
                })
        }

        const tl_info = gsap.timeline()    

        ScrollTrigger.create({
            trigger:".frame-projectView-img",
            animation:tl,
            scrub:1,
            start:"start start",
            end: `${ref.current?.clientHeight} ${window.innerHeight}`,
            // markers:true,
            pin:true,
        })
        ScrollTrigger.create({
            trigger:".frame-projectView-line",
            animation:tl,
            scrub:1,
            start:"start start",
            end: `${ref.current?.clientHeight} ${window.innerHeight}`,
            // markers:true,
        })
        ScrollTrigger.create({
            trigger:".frame-projectView-info-in",
            animation:tl_info,
            scrub:1,
            start:"start start",
            end: `${ref.current?.clientHeight} ${window.innerHeight}`,
            pin:true,
        })

        
    }

    useGSAP(()=>{
        scrollTrigger_setup()     
    },[wh])


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
            
            await scrollTrigger_setup()     
        } 
        scroll_setup_async()
    },[wh])

    useGSAP(()=>{

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
        })

        imgRef.current.forEach((child,idx)=>{
            const orderNum = (pageNum-idx)
          
            if(orderNum <= 0){
                gsap.to(child,{
                    duration:0.3,
                    zIndex:100-idx,
                    opacity:0.95,
                    transformOrigin: "0% 50%", // 요소의 중심점을 좌측으로 설정
                    x: `-${30 - orderNum*8}% `,
                    rotateY:30 - orderNum*10,
                    skewY:-2,
                    scale:1 + orderNum*0.2,
                })
            }
            else{
                gsap.to(child,{
                    duration:0.3,
                    zIndex:100-idx,
                    opacity:0,
                    transformOrigin: "0% 50%", // 요소의 중심점을 좌측으로 설정
                    x: `-${30 - 16}% `,
                    rotateY:30+idx*10,
                    skewY:-2,
                    scale:1+orderNum*0.2,
                })
            }
        })

    },[pageNum,wh])

    return (
        <div ref={ref} className="container-projectView">
       
            <div className="frame-projectView-img f-c-c-c" >
                <div>
                    <div className="projectView-img" ref={el => imgRef.current[0] = el}>
                        <div>
                            <img className=""src={myProject}/>
                            <img className="" src={myProject}/>
                        </div>
                    </div>
                    <div className="projectView-img" ref={el => imgRef.current[1] = el}>
                        <div>
                            <img className=""src={D_appProject}/>
                            <img className="" src={D_appProject}/>
                        </div>
                        
                    </div>
                    <div className="projectView-img" ref={el => imgRef.current[2] = el}>

                        <div>
                            <img className=""src={myProject}/>
                            <img className="" src={myProject}/>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="frame-projectView-line">
                <div className="projectView-line">
                    <div>
                        <div ref={el => bdFstRef.current[0] = el} className="fst-line"/>
                    </div>
                    <div className="f-c-c-c">
                        <div ref={el => bdSecRef.current[0] = el}  className="sec-line"/>
                        <div className="f-c-c-c">
                                3
                        </div>
                    </div>
                    <div className="f-c-c-c">
                        <div ref={el => bdTrdRef.current[0] = el} className="trd-line"/>
                    </div>
                </div>
                <div className="projectView-line">
                    <div>
                        <div ref={el => bdFstRef.current[1] = el} className="fst-line"/>
                    </div>
                    <div className="f-c-c-c">
                        <div ref={el => bdSecRef.current[1] = el}  className="sec-line"/>
                        <div className="f-c-c-c">
                                2
                        </div>
                    </div>
                    <div className="f-c-c-c">
                        <div ref={el => bdTrdRef.current[1] = el} className="trd-line"/>
                    </div>
                </div>
                <div className="projectView-line">
                    <div>
                        <div ref={el => bdFstRef.current[2] = el} className="fst-line"/>
                    </div>
                    <div className="f-c-c-c">
                        <div ref={el => bdSecRef.current[2] = el}  className="sec-line"/>
                        <div className="f-c-c-c">
                                1
                        </div>
                    </div>
                    <div className="f-c-c-c">
                        <div ref={el => bdTrdRef.current[2] = el} className="trd-line"/>
                    </div>
                </div>
                
            </div>
            <div className="frame-projectView-info">
                <div className="frame-projectView-info-in f-c-c-s">
                <div className="f-c-c-s projectView-info" style={{
                    marginTop:wh.h/2,
                    gap:"48px"}}>
                    <div className="f-c-c-c" ref={el => informationRef.current[0] = el}>
                        <div className="projectView-info-in f-c-c-c">
                            <span className="projectView-in-title">한신대 수강신청 추천 웹 사이트</span>
                            
                            <div className="f-c-c-c">
                                <span>
                                    한신대 수강신청 추천 웹 사이트 입니다. 일부 학교에는 수강신청을 도와주는 웹 또는 앱이 있지만,
                                    한신대학교에는 없어서 만들어 보았습니다. 여러 개의 질문을 응답한 뒤에 시간표를 받습니다. 
                                    받은 시간표를 본인에게 맞게 변경할 수 있는 웹사이트입니다.
                                </span>
                                <span> 
                                    만드는 과정에서 사용자 친화적인 ui/ux를 구성했다는 것에도 의미가 있었으나,
                                    react와 애니메이션 라이브러리를 같이 사용햐여 동적인 사이트를 만들었고,
                                    react hook의 개념을 다 잡는 경험을 가질 수 있었습니다. 
                                </span>
                            </div>
                        </div>

                        <div className="projectView-info-link f-r-c-s">
                           <span>link:</span>
                           <span>https://resister-course-vercel.vercel.app/</span>
                        </div>

                        <div className="projectView-info-skill-set f-c-s-s">
                                <div className=" f-r-c-s">
                                    
                                    <span className="f-r-c-c">
                                        <img src={html_img}/>
                                        <span>html</span>
                                    </span>
                                    <span className="f-r-c-c">
                                        <img src={css_img}/>
                                        <span>css</span>
                                    </span>
                                    <span className="f-r-c-c">
                                        <img src={js_img}/>
                                        <span>js</span>
                                    </span>
                                    <span className="f-r-c-c">
                                        <img src={react_img}/>
                                        <span>react</span>
                                    </span>
                                </div>
                                <div className=" f-r-c-s">
                                    <span className="f-r-c-c">
                                        <img src={nodejs_img}/>
                                        <span>nodejs</span>
                                    </span>
                                    <span className="f-r-c-c">
                                        <img src={aws_img}/>
                                        <span>aws</span>
                                    </span>
                                    <span className="f-r-c-c">
                                        <img src={mysql_img}/>
                                        <span>mysql</span>
                                    </span>
                                </div>
                                <div className=" f-r-c-s">
                                    <span className="f-r-c-c">
                                        <img src={git_img}/>
                                        <span>git</span>
                                    </span>
                                    <span className="f-r-c-c">
                                        <img src={github_img}/>
                                        <span>github</span>
                                    </span>
                               
                                </div>
                            </div>
                        
                    </div>

                    <div className="f-c-c-c" ref={el => informationRef.current[1] = el}>
                        <div className="projectView-info-in f-c-c-c">
                            <span className="projectView-in-title">한신대 수강신청 추천 웹 사이트</span>
                            
                            <div className="f-c-c-c">
                                <span>
                                    한신대 수강신청 추천 웹 사이트 입니다. 일부 학교에는 수강신청을 도와주는 웹 또는 앱이 있지만,
                                    한신대학교에는 없어서 만들어 보았습니다. 여러 개의 질문을 응답한 뒤에 시간표를 받습니다. 
                                    받은 시간표를 본인에게 맞게 변경할 수 있는 웹사이트입니다.
                                </span>
                                <span> 
                                    만드는 과정에서 사용자 친화적인 ui/ux를 구성했다는 것에도 의미가 있었으나,
                                    react와 애니메이션 라이브러리를 같이 사용햐여 동적인 사이트를 만들었고,
                                    react hook의 개념을 다 잡는 경험을 가질 수 있었습니다. 
                                </span>
                            </div>
                        </div>

                        <div className="projectView-info-link f-r-c-s">
                           <span>link:</span>
                           <span>https://resister-course-vercel.vercel.app/</span>
                        </div>

                        <div className="projectView-info-skill-set f-c-s-s">
                                <div className=" f-r-c-s">
                                    
                                    <span className="f-r-c-c">
                                        <img src={html_img}/>
                                        <span>html</span>
                                    </span>
                                    <span className="f-r-c-c">
                                        <img src={css_img}/>
                                        <span>css</span>
                                    </span>
                                    <span className="f-r-c-c">
                                        <img src={js_img}/>
                                        <span>js</span>
                                    </span>
                                    <span className="f-r-c-c">
                                        <img src={react_img}/>
                                        <span>react</span>
                                    </span>
                                </div>
                                <div className=" f-r-c-s">
                                    <span className="f-r-c-c">
                                        <img src={nodejs_img}/>
                                        <span>nodejs</span>
                                    </span>
                                    <span className="f-r-c-c">
                                        <img src={aws_img}/>
                                        <span>aws</span>
                                    </span>
                                    <span className="f-r-c-c">
                                        <img src={mysql_img}/>
                                        <span>mysql</span>
                                    </span>
                                </div>
                                <div className=" f-r-c-s">
                                    <span className="f-r-c-c">
                                        <img src={git_img}/>
                                        <span>git</span>
                                    </span>
                                    <span className="f-r-c-c">
                                        <img src={github_img}/>
                                        <span>github</span>
                                    </span>
                               
                                </div>
                            </div>
                        
                    </div>

                    <div className="f-c-c-c" ref={el => informationRef.current[2] = el}>
                        <div className="projectView-info-in f-c-c-c">
                            <span className="projectView-in-title">한신대 수강신청 추천 웹 사이트</span>
                            
                            <div className="f-c-c-c">
                                <span>
                                    한신대 수강신청 추천 웹 사이트 입니다. 일부 학교에는 수강신청을 도와주는 웹 또는 앱이 있지만,
                                    한신대학교에는 없어서 만들어 보았습니다. 여러 개의 질문을 응답한 뒤에 시간표를 받습니다. 
                                    받은 시간표를 본인에게 맞게 변경할 수 있는 웹사이트입니다.
                                </span>
                                <span> 
                                    만드는 과정에서 사용자 친화적인 ui/ux를 구성했다는 것에도 의미가 있었으나,
                                    react와 애니메이션 라이브러리를 같이 사용햐여 동적인 사이트를 만들었고,
                                    react hook의 개념을 다 잡는 경험을 가질 수 있었습니다. 
                                </span>
                            </div>
                        </div>

                        <div className="projectView-info-link f-r-c-s">
                           <span>link:</span>
                           <span>https://resister-course-vercel.vercel.app/</span>
                        </div>

                        <div className="projectView-info-skill-set f-c-s-s">
                                <div className=" f-r-c-s">
                                    
                                    <span className="f-r-c-c">
                                        <img src={html_img}/>
                                        <span>html</span>
                                    </span>
                                    <span className="f-r-c-c">
                                        <img src={css_img}/>
                                        <span>css</span>
                                    </span>
                                    <span className="f-r-c-c">
                                        <img src={js_img}/>
                                        <span>js</span>
                                    </span>
                                    <span className="f-r-c-c">
                                        <img src={react_img}/>
                                        <span>react</span>
                                    </span>
                                </div>
                                <div className=" f-r-c-s">
                                    <span className="f-r-c-c">
                                        <img src={nodejs_img}/>
                                        <span>nodejs</span>
                                    </span>
                                    <span className="f-r-c-c">
                                        <img src={aws_img}/>
                                        <span>aws</span>
                                    </span>
                                    <span className="f-r-c-c">
                                        <img src={mysql_img}/>
                                        <span>mysql</span>
                                    </span>
                                </div>
                                <div className=" f-r-c-s">
                                    <span className="f-r-c-c">
                                        <img src={git_img}/>
                                        <span>git</span>
                                    </span>
                                    <span className="f-r-c-c">
                                        <img src={github_img}/>
                                        <span>github</span>
                                    </span>
                               
                                </div>
                            </div>
                        
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectView


