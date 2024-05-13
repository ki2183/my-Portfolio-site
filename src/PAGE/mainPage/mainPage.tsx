import "./mainPage.scss"
import { InitialFrame } from "../../COMPONENTS/frame/initial_frame"
import MainBanner from "./mainBanner/mainBanner"
import ProjectView from "./projectView/projectView"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import MyBlog from "./myBlog/myBlog"
import MyskillTrees from "./myskillTrees/myskillTrees"
import { useEffect, useState } from "react"
gsap.registerPlugin(ScrollTrigger)

function MainPage(){
  
    const [jsx,setJSX] = useState<JSX.Element|null>(<MyBlog/>)

    useEffect(()=>{
      window.addEventListener('resize',()=>{
        console.log(""); 
        setJSX(<MyBlog/>)
      })
    },[])

    return <InitialFrame>
        <MainBanner/> 
        <MyskillTrees/>
        {/* <MyBlog/> */}
        {jsx}
        <ProjectView/>  
    </InitialFrame>
  }


export default MainPage