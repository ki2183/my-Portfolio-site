import "./mainPage.scss"
import { InitialFrame } from "../../COMPONENTS/frame/initial_frame"
import MainBanner from "./mainBanner/mainBanner"
import ProjectView from "./projectView/projectView"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Myskills from "./mySkills/myskills"
import MyBlog from "./myBlog/myBlog"
import MyskillTrees from "./myskillTrees/myskillTrees"
gsap.registerPlugin(ScrollTrigger)

function MainPage(){


    return <InitialFrame>
        <MainBanner/> 
        <MyskillTrees/>
        <Myskills/>
        <MyBlog/>
        <ProjectView/>  
    </InitialFrame>
  }


export default MainPage