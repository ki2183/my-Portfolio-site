import React, { ReactNode } from "react"
import "./initial_frame.scss"
import Nav from "../nav/nav"

type InitialFrame_type = {
    children?: ReactNode
}

export function InitialFrame({children}:InitialFrame_type){
    return(
        <div className="container-initialFrame">
            <Nav/>
            {children}
            <div className="null-box"/>
        </div>
    )
}