import "./mainBanner.scss"
import "../../../font.scss"
import "../../../flex.scss"
import { useEffect, useRef } from "react"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger)
function MainBanner(){

    const ref = useRef<HTMLDivElement>(null)
    const textRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const upRate = [16,1,32,46]
        if(ref.current)
            Array.from(ref.current.children).forEach((child,idx) => {
                gsap.to(child,{
                    y:"-100%",
                    duration:1,
                    stagger:idx,
                    zIndex:5,
                    scrollTrigger:{
                        trigger:".container-mainBanner",
                        scrub:1,
                        start:`${upRate[idx]}% start`,
                        end:"100% start",
                    }
                })
            })
    }, []); 
    return <div className="container-mainBanner">
        <div ref={ref} className="container-mainBanner-animtaion">
            <div/>
            <div/>
            <div/>
            <div/>
        </div>
        <div>
        </div>
        <div className="fccc intro-div">
            <span className="roboto-black">
                I want to give you the best UI/UX.
            </span>
            <span className="roboto-black">
                and to be close to various libraries.
            </span>
            <span className="roboto-black">
                I'm gijoon
            </span>
        </div>
    </div>
}
export default MainBanner