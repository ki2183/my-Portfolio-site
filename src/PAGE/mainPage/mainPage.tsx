import { useDispatch } from "react-redux"
import { useAppSelector } from "../../REDUX/hooks"
import "./mainPage.scss"
import { InitialFrame } from "../../COMPONENTS/frame/initial_frame"
import MainBanner from "./mainBanner/mainBanner"
import MySkillTree from "./mySkillTree/mySkillTree"

function MainPage(){
    const Theme = useAppSelector(state => state.theme)
    const dispatch = useDispatch()
    return <InitialFrame>
        <MainBanner/>
        <MySkillTree/>
    </InitialFrame>
  }


export default MainPage