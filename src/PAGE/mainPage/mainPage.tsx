import { useDispatch } from "react-redux"
import { useAppSelector } from "../../REDUX/hooks"
import "./mainPage.scss"
import { InitialFrame } from "../../COMPONENTS/frame/initial_frame"
import MainBanner from "./mainBanner/mainBanner"
import MySkillTree from "./mySkillTree/mySkillTree"
import { ProejctInfo } from "./projectInfo/proejctInfo"

function MainPage(){

    return <InitialFrame>
        <MainBanner/> 
        <MySkillTree/>
        <ProejctInfo/>
    </InitialFrame>
  }


export default MainPage