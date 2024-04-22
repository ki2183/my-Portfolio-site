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
import { useAppSelector } from "../../../REDUX/hooks"



function MySkillTree(){
    return (
        <div className="container-myskilltree">
            <MySkillTreeTitle/>
            <MySkillTreeView/>

        </div>
    )
}

function MySkillTreeTitle(){
    return <div className="container-myskiltree-title">
        Developer Tree
    </div>
}

function MySkillTreeView(){
    return <div className="conatiner-skillTreeView">
        <MySkillFrontEnd/>
        <MySkillBackEnd/>
        <MySkillVersionControl/>
    </div>
}

export default MySkillTree

function MySkillFrontEnd(){

    const ref = useRef<HTMLDivElement>(null)

    const dto = [
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

    return (
        <div className="container-myskilltree-frontend skillTreeView">

            <h2 className="skils-title">frontend</h2>

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

function MySkillBackEnd(){
    const ref = useRef<HTMLDivElement>(null)

    const dto = [
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

    return (
        <div className="container-myskilltree-backend skillTreeView">
             <h2 className="skils-title">backend</h2>
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

function MySkillVersionControl(){
    const ref = useRef<HTMLDivElement>(null)

    const dto = [
        {
            src:git,
            title:"git"
        },
        {
            src:github,
            title:"github"
        }
    ]

    return (
        <div className="container-myskilltree-versionControl skillTreeView">
            <h2 className="skils-title">VersionControl</h2>
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

type borderAnimation_type = {
    children:ReactNode
    stagger:number
    x:number
}
const BorderAnimation = forwardRef<HTMLDivElement, borderAnimation_type>(({children,stagger,x}, ref) => {

	const el = useRef<HTMLSpanElement>(null) 
    const animation = useRef<gsap.core.Tween | null>(null);  
    const [tf,setTF] = useState<boolean>(false)
  
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

interface ContainerProps {
    children: ReactNode;
    stagger: number;
    x: number;
  }

const Container: React.FC<ContainerProps & React.RefAttributes<HTMLDivElement>> = (
    { children, stagger, x },
    ref
  ) => {
    const el = useRef<HTMLDivElement>(null);
    const animation = useRef<gsap.core.Tween>();
    const [tf,setTF] = useState<boolean>(false)

    useEffect(()=>{
        setTimeout(()=>{setTF(!tf)},2000)
        console.log(tf)
    },[tf])
  
    useEffect(() => {
      const ctx = gsap.context(() => {
        if(el.current)
        animation.current = gsap.from(el.current.children, {
          opacity: 0,
          stagger,
          x,
        });
      });
      return () => ctx.revert();
    }, [tf]);
  
    useEffect(() => {
      ref.current = animation.current;
    }, [ref]);
  
    return <div ref={el}>{children}</div>;
  };
  
type TreeInfo_type = {
    src:string,
    title:string
}

function TreeInfo({src,title}:TreeInfo_type){

    const {tree_info_bg,tree_info_border,theme} = useAppSelector(state => state.theme)

    const tree_info_style = {
        backgroundColor:tree_info_bg,
        boxShadow: theme === "light" ? `5px 4px 5px ${tree_info_border}`: "",
        borderBottom : theme === "dark" ? `2px solid ${tree_info_border}`: "",
        borderRight : theme === "dark" ? `2px solid ${tree_info_border}`: ""
    }

    return (
        <div className="tree-info" style={tree_info_style}>
            <img className="tree-svg" src={src}/>
            <div>{title}</div>
        </div>
    )
}