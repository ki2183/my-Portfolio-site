import React, { ReactNode, forwardRef, useEffect, useRef, useState } from "react"
import "./mySkillTree.scss"
import gsap from "gsap"
import html from "../../../svgFolder/html.svg"
import css from "../../../svgFolder/css.svg"
import js from "../../../svgFolder/js.svg"
import react from "../../../svgFolder/react.svg"
import typescript from "../../../svgFolder/typescript.svg"
import scss from "../../../svgFolder/scss.svg"
import reactquery from "../../../svgFolder/reactquery.svg"
import tailwind from "../../../svgFolder/tailwind.svg"
import redux from "../../../svgFolder/redux.svg"
import nodejs from "../../../svgFolder/nodejs.svg"
import mongodb from "../../../svgFolder/mongodb.svg"
import git from "../../../svgFolder/git.svg"
import github from "../../../svgFolder/github.svg"
import aws from "../../../svgFolder/aws.svg"
import vercel from "../../../svgFolder/vercel.svg"
import { TreeInfo } from "../../../COMPONENTS/tree_info/tree_info"
import { useAppSelector } from "../../../REDUX/hooks"

const skill_tree_width = 230
const skill_tree_gap = 16

function MySkillTree(){

    return (
        <div className="container-myskilltree">
            <MySkillTreeTitle/>
            <TreeAnimation/>
            <MySkillTreeView/>
        </div>
    )
}

function MySkillTreeTitle(){ //제목
    return <div className="container-myskiltree-title">
        Developer Tree
    </div>
}

function MySkillTreeView(){ //내 기술트리

    const frontend_dto = [
        {
            src:html,
            title:"HTML"
        },{
            src:css,
            title:"CSS"
        },{
            src:js,
            title:"JavaScript"
        },{
            src:react,
            title:"React"
        },{
            src:reactquery,
            title:"ReactQuery"
        },{
            src:"https://react-hook-form.com/images/logo/react-hook-form-logo-only.svg",
            title:"ReactHook"
        },{
            src:typescript,
            title:"TypeScript"
        },{
            src:redux,
            title:"Redux"
        },{
            src:tailwind,
            title:"TailWind"
        },{
            src:scss,
            title:"SCSS"
        }
    ]
    const backend_dto = [
        {
            src:nodejs,
            title:"NodeJs"
        },
        {
            src:mongodb,
            title:"MongoDB"
        },{
            src:aws,
            title:"AWS"
        },{
            src:vercel,
            title:"Vercel"
        }
    ]

    const version_control_dto = [
        {
            src:git,
            title:"git"
        },
        {
            src:github,
            title:"github"
        }
    ]

    return <div className="conatiner-skillTreeView" style={{gap:`${skill_tree_gap}px`}}>
        <MySkillTreeContainer skill_title="frontend" dto={frontend_dto} />
        <MySkillTreeContainer skill_title="backend" dto={backend_dto} />
        <MySkillTreeContainer skill_title="versionControl" dto={version_control_dto} />
    </div>
}

export default MySkillTree


type borderAnimation_type = {
    children:ReactNode
    stagger:number
    x:number
}
const BorderAnimation = forwardRef<HTMLDivElement, borderAnimation_type>(({children,stagger,x}, ref) => {

	const el = useRef<HTMLSpanElement>(null) 
    const animation = useRef<gsap.core.Tween | null>(null);  
  
    useEffect(()=>{
        const ctx = gsap.context(() => {
            if(el.current){
                animation.current = gsap.from(el.current?.children,{
                    opacity:0,
                    stagger,
                    x
                })
            }
        });
        return ()=>{
            ctx.revert()
        }
    },[])

    return (
        <span ref={el}>
            {children}
        </span>
    );
});

type mySkillTreeContainer_type = {
    skill_title:string
    dto:{
            src:string
            title:string 
        }[]
}

function MySkillTreeContainer({skill_title,dto}:mySkillTreeContainer_type){ //개발 트리 컨테이너
    const ref = useRef<HTMLDivElement>(null)

    return (
        <div style={{width:skill_tree_width}}>
            <h2 className="skils-title">{skill_title}</h2>
            <BorderAnimation ref={ref} x={30} stagger={0.15}>
                {
                    ( dto && dto.length > 0 ) && dto.map((item,idx)=>(
                        <TreeInfo key={idx} src={item.src} title={item.title} />
                    ))
                }
            </BorderAnimation>

        </div>
    )
}


function TreeAnimation(){

    const TreeNum = 3
    const animationRef = useRef<Array<HTMLDivElement|null>>([])
    const tree_animation_style = {
        width: skill_tree_width * TreeNum + skill_tree_gap * (TreeNum - 1),
        gridTemplateColumns: `repeat(${TreeNum}, 1fr)`
    }

    const children = Array.from({ length: TreeNum }).map((_, idx) => (
        idx === 0 ? <TreeAnimationPart time={0.3} type="left" key={idx}/> : idx === TreeNum-1 ? <TreeAnimationPart time={0.3} type="right" key={idx}/> : <TreeAnimationPart time={0} type="middle" key={idx}/>
      ));

      

    return (
        <div className="container-tree-animation" style={tree_animation_style}>
            {children}
        </div>
    )
}

type TreeAnimationPart_type={
    type:"middle" | "left" | "right",
    time:number
}

function TreeAnimationPart({type,time}:TreeAnimationPart_type){

    const fst = useRef<HTMLDivElement>(null)
    const sec = useRef<HTMLDivElement>(null)
    const trd = useRef<HTMLDivElement>(null)
    const four = useRef<HTMLDivElement>(null)
    const color = useAppSelector(state => state.theme.text)

    useEffect(()=>{
        gsap.set(fst.current,{
            borderRight:  type === "middle" ? `1px solid ${color}` : "",
            transformOrigin:"top",
            scaleY:0
        })
        gsap.set(trd.current,{
            borderRight: type !== "right" ? `1px solid ${color}` : '',
            borderTop: type !== "left" ? `1px solid ${color}` : '',
            scale:0
        })
        gsap.set(four.current,{
            borderLeft:type === "right" ? `1px solid ${color}` : '',
            borderTop: type !== "right" ? `1px solid ${color}` : '',
            scale:0
        })

        const tl = gsap.timeline()

        if(type === "middle"){
            tl.to(fst.current,{
                scaleY:1,
                duration:0.15
            },time)
            tl.to(trd.current,{
                transformOrigin:"right top",
                scale:1,
                duration:0.15,
            },time+0.15)
            tl.to(four.current,{
                transformOrigin:"left top",
                scale:1,
                duration:0.15,
            },time+0.15)
        }
        if(type === "left"){
            tl.to(four.current,{
                transformOrigin:"right top",
                scale:1,
                duration:0.3,
            },time-0.12)
            tl.to(trd.current,{
                transformOrigin:"top right",
                scale:1,
                duration:0.1,
            },time+0.1)
        }
        if(type === "right"){
            tl.to(trd.current,{
                transformOrigin:"top left",
                scale:1,
                duration:0.3,
            },time-0.12)
            tl.to(four.current,{
                transformOrigin:"left top",
                scale:1,
                duration:0.1,
            },time+0.1)
            
        }
        

    },[color])

    return <div className="container-animation-part">
        <div ref={fst} />
        <div ref={sec}/>
        <div ref={trd}/>
        <div ref={four}/>
    </div>
}