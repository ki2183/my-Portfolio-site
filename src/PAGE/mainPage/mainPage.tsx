import { useDispatch } from "react-redux"
import { useAppSelector } from "../../REDUX/hooks"
import "./mainPage.scss"
import { InitialFrame } from "../../COMPONENTS/frame/initial_frame"
import MainBanner from "./mainBanner/mainBanner"
import MySkillTree from "./mySkillTree/mySkillTree"
import { ProejctInfo } from "./projectInfo/proejctInfo"
import ProjectView from "./projectView/projectView"
import { useEffect, useState } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

function MainPage(){


    return <InitialFrame>
        <MainBanner/> 
        <MySkillTree/>
        {/* <ProejctInfo/> */}
        <ProjectView/>
        <div style={{height:"50rem"}}>thisis</div>
    </InitialFrame>
  }


export default MainPage