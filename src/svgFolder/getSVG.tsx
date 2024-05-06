import html from "./html.svg"
import css from "./css.svg"
import js from "./js.svg"
import git from "./git.svg"
import github from "./github.svg"
import jira from "./jira.svg"
import mysql from "./mysql.svg"
import h2 from "./h2.svg"
import react from "./react.svg"
import vercel from "./vercel.svg"
import spring from "./spring.svg"
import nodejs from "./nodejs.svg"
import Redux from "./Redux.svg"
import reactQurey from "./reactquery.svg"
import aws from "./aws.svg"
import tailwind from "./tailwind.svg"
import mongoDB from "./mongodb.svg"
import typescript from "./typescript.svg"
import scss from "./scss.svg"
import ec2 from "./aws.svg"
import mongodb from "./mongodb.svg"
import velog from "./velog.svg"
import { useEffect } from "react"

type GetSVG_type = {
    src:string
}

function GetSVG({src}:GetSVG_type){

    let src_ = ""

    useEffect(()=>{
        if (src === "html"){
            src_ = html
        }
        else if (src === "css"){
            src_ = css
        }
        else if (src === "js"){
            src_ = js
        }
        else if (src === "git"){
            src_ = git
        }
        else if (src === "github")
            src_ = github
        else if (src === "jira")
            src_ = jira
        else if (src === "mysql")
            src_ = mysql
        else if (src === "h2")
            src_ = h2
        else if (src === "react")
            src_ = react
        else if (src === "vercel")
            src_ = vercel
        else if (src === "spring")
            src_ = spring
        else if (src === "nodejs")
            src_ = nodejs
        else if (src === "Redux")
            src_ = Redux
        else if (src === "reactQuery")
            src_ = reactQurey
        else if (src === "aws")
            src_ = aws
        else if (src === "tailwind")
            src_ = tailwind
        else if (src === "mongoDB")
            src_ = mongodb
        else if (src === "typescript")
            src_ = typescript
        else if (src === "scss")
            src_ = scss
        else if (src === "ec2")
            src_ = ec2
        else if (src === "velog"){
            src_ = velog
        }
    })
    

    return(
        <img
            src={src_}
        />
    )
}

export default GetSVG