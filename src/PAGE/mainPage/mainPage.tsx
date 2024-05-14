import "./mainPage.scss"
import { InitialFrame } from "../../COMPONENTS/frame/initial_frame"
import MainBanner from "./mainBanner/mainBanner"
import ProjectView from "./projectView/projectView"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import MyBlog from "./myBlog/myBlog"
import MyskillTrees from "./myskillTrees/myskillTrees"
import { useEffect, useState } from "react"
import { useAppSelector } from "../../REDUX/hooks"
import ReactModal from "react-modal"
import { useDispatch } from "react-redux"
import { modal_close } from "../../REDUX/Slices/modalSlice"
gsap.registerPlugin(ScrollTrigger)

function MainPage(){

    const modal = useAppSelector(state => state.modal)
    const dispatch = useDispatch()

    return <InitialFrame>
        <MainBanner/> 
        <MyskillTrees/>
        <MyBlog/>
        <ProjectView/>  

    </InitialFrame>
  }


export default MainPage