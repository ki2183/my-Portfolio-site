import { useEffect, useRef } from "react";
import "./nav.scss"
import gsap from "gsap";
import { useAppSelector } from "../../REDUX/hooks";
import { useDispatch } from "react-redux";
import { change_theme } from "../../REDUX/Slices/themeSlice";

function Nav(){

    

    return (
        <div className="container-nav">
            <span>ki2183</span>
            <div>
                <ChangeTheme/>
            </div>
        </div>
    )
}

function ChangeTheme() {

    const cls_moon = useRef<HTMLDivElement>(null)
    const cls_dark = useRef<HTMLDivElement>(null)
    const Theme = useAppSelector(state => state.theme)
    const time = 0.5
    const dispatch = useDispatch()

    useEffect(()=>{
        const tl = gsap.timeline()
        if(Theme.theme === "dark"){
            tl.to(cls_dark.current,{
                duration:time/2,
                x:-5,
            },0)
            tl.to(cls_dark.current,{
                duration:time,
                borderRadius:"100%",
            },0)
            tl.to(cls_moon.current,{
                duration:time,
                backgroundColor:"#ddff00"
            },0)
        }else{
            tl.to(cls_dark.current,{
                duration:time,
                borderRadius:"0",
            },0)
            tl.to(cls_dark.current,{
                duration:time/2,
                x:0,
            },time*0.1)
            tl.to(cls_moon.current,{
                duration:time,
                backgroundColor:"#e5e7dd"
            },0)
        }        
        return ()=>{
            tl.kill()
        }
    },[Theme])

    const onClick_handler_theme = (e:React.MouseEvent<HTMLDivElement>) =>{
        e.preventDefault()
        dispatch(change_theme(Theme.theme === "dark" ? "light":"dark"))
    }

    return (
        <>
        <div className="container-mode" onClick={onClick_handler_theme}>
            <div className="frame-mode">
                <div ref={cls_moon} className="light-moon moon"/>
                <div ref={cls_dark} className="dark-moon moon"/>
            </div>
        </div>
      </>
    );
  }
  
  export default Nav