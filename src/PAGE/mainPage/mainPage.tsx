import { useDispatch } from "react-redux"
import { useAppSelector } from "../../REDUX/hooks"
import "./mainPage.scss"
import { InitialFrame } from "../../COMPONENTS/frame/initial_frame"
import MainBanner from "./mainBanner/mainBanner"
import MySkillTree from "./mySkillTree/mySkillTree"
import { ProejctInfo } from "./projectInfo/proejctInfo"
import ProjectView from "./projectView/projectView"
import { useEffect, useState } from "react"

function MainPage(){

    const [ProjectView_jsx,setProjectView_JSX] = useState(<ProjectView/>)

    const reRender = () =>{
      setProjectView_JSX(<ProjectView/>)
    }

    useEffect(()=>{
      window.addEventListener('resize',reRender)
      return()=>{
        window.removeEventListener('resize',reRender)
      }
    },[])

    return <InitialFrame>
        <MainBanner/> 
        <MySkillTree/>
        {/* <ProejctInfo/> */}
        <ProjectView/>
        {/* {ProjectView_jsx} */}
        <div style={{height:"50rem"}}></div>
    </InitialFrame>
  }


export default MainPage