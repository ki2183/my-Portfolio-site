import ReactModal from "react-modal"
import "./modal.scss"
import "../../flex.scss"
import "../../font.scss"
import { useDispatch } from "react-redux"
import { useAppSelector } from "../../REDUX/hooks"
import { modal_close } from "../../REDUX/Slices/modalSlice"
import GetSVG from "../../FOLDER_svg/getSVG"
import React, { useEffect, useRef } from "react"
import { features } from "process"
import { project_information_dto } from "../../projectInformation"

function ViewModal(){
    const modal = useAppSelector(state => state.modal)
    const viewNum = useAppSelector(state => state.viewNum)
    const {window} = useAppSelector(state => state.theme)
    const dispatch = useDispatch()
    const customModalStyles: ReactModal.Styles = {
        overlay: {
          backgroundColor: " rgba(0, 0, 0, 0.4)",
          width: "100%",
          height: "100vh",
          zIndex: "10",
          position: "fixed",
          top: "0",
          left: "0",
        },
        content: {
          width: "50vw",
          height: "90vh",
          maxWidth:"900px",
          maxHeight:"1000px",
          padding:"0rem",
          paddingTop:"1rem",
          paddingBottom:"1rem",
          zIndex: "150",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          borderRadius: "10px",
          boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
          background:window,
          justifyContent: "center",
          overflow: "hidden",
        },
      };

    const ref = useRef<HTMLOListElement>(null)
    
    return (
      <ReactModal style={customModalStyles} isOpen={modal} onRequestClose={()=>dispatch(modal_close())}>
        <div className="container-modal fccs" onScroll={e=>{
            e.stopPropagation()
        }}>
            <ModalTitle title={project_information_dto[viewNum].title}/>
            <div className="modal-line"/>
            <ol className="fcsc" ref={ref}>
                <ModalLink link={project_information_dto[viewNum].link}/>
                <ModalReason reason={project_information_dto[viewNum].reason}/>
                <ModalManufacturing manufacturing={project_information_dto[viewNum].feature}/>
                <ModalStack frontends={project_information_dto[viewNum].stacks.frontends} backends={project_information_dto[viewNum].stacks.backends} versionControls={project_information_dto[viewNum].stacks.versionControls}/>
                <ModalReflection reflection={project_information_dto[viewNum].reflection}/>
            </ol>
        </div>
      </ReactModal>
    )
}

export default ViewModal

export type ModalStackSvg_type = {
    src:string
    title:string
    class_name?:string
    not_mine?:boolean
}

function ModalStackSvg({src,title,class_name,not_mine}:ModalStackSvg_type){
    return (
        <div className="modal-stack-svg frcc">
            <GetSVG class_name={class_name} src={src}/>
            <span className={not_mine ? "modal-not-mine" : ""}>{title}</span>
        </div>
    )
}

export type ModalTitle_type = {
    title:string
}
function ModalTitle({title}:ModalTitle_type){
    return (
        <h1>{title}</h1>
    )
}

export type ModalLink_type = {
    link:string
}
function ModalLink({link}:ModalLink_type){
    const click_link = () => {
        window.location.href = link
    }
    return (
        <li className="fcsc conatiner-modal-li">
                    <div className="frcs">
                        <span className="material-symbols-outlined link-svg clip-svg">
                            link
                        </span>
                        <span>project-link</span>
                    </div>
                   <ol className="modal-link-ol">
                    <li>
                        <span>1</span>
                        <a onClick={click_link} className="link-project">
                            {link}
                        </a>
                    </li>
                    
                   </ol>
                    
                </li>
    )
}
export type ModalFeature_type = {
    feature:string[]
}

export type ModalReason_type = {
    reason:string[]
}
function ModalReason({reason}:ModalReason_type){
    return(
        <li className="fcsc conatiner-modal-li">
                    <div className="frcs">
                        <span className="material-symbols-outlined link-svg">
                            edit
                        </span>
                        <span>project-reason</span>
                    </div>
                        <div className="li-info fcsc">
                            {
                                (reason && reason.length>0) && reason.map((item,idx)=>(
                                    <div className="frcs" key={idx}>
                                        <span>{idx+1}</span>{item}<br/>
                                    </div>
                                ))
                            }
                        </div>
                        
                    <div/>
                </li>
    )
}
export type ModalManufacturing_type = {
    manufacturing:string[]
}
function ModalManufacturing({manufacturing}:ModalManufacturing_type){
    return (
        <li className="fcsc conatiner-modal-li">
                    <div className="frcs">
                        <span className="material-symbols-outlined link-svg">
                            manufacturing
                        </span>
                        <span>project-features</span>
                    </div>
                        <div className="li-info fcsc">
                            {
                                (manufacturing && manufacturing.length>0) && manufacturing.map((item,idx)=>(
                                    <div className="frcs" key={idx}>
                                        <span>{idx}</span>{item}
                                    </div>
                                ))
                            }
                        </div>
                        
                    <div/>
                </li>
    )
}

export type ModalStack_type = {
    frontends:ModalStackSvg_type[]
    backends:ModalStackSvg_type[]
    versionControls:ModalStackSvg_type[]
}

function ModalStack({frontends,backends,versionControls}:ModalStack_type){
    return(
        <li className="fcsc conatiner-modal-li">
        <div className="frcs">
            <span className="material-symbols-outlined link-svg">
                account_tree
            </span>
            <span>project-stacks</span>
        </div>
            <div className="li-info fcsc">
                <div className="frcs">
                    <span>frontend:</span>
                    <div className="frcs">
                        {
                            (frontends && frontends.length > 0)&&frontends.map((item,idx)=>(
                                <ModalStackSvg
                                    key={idx}
                                    src={item.src} 
                                    title={item.title} 
                                    class_name={item.class_name} 
                                    not_mine={item.not_mine}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className="frcs">
                    <span>backend:</span>
                    <div className="frcs">
                    {
                            (backends && backends.length > 0) && backends.map((item,idx)=>(
                                <ModalStackSvg
                                    key={idx}
                                    src={item.src} 
                                    title={item.title} 
                                    class_name={item.class_name} 
                                    not_mine={item.not_mine}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className="frcs">
                    <span>version_control:</span>
                    <div className="frcs">
                        {
                            (versionControls && versionControls.length > 0) && versionControls.map((item,idx)=>(
                                <ModalStackSvg
                                    key={idx}
                                    src={item.src} 
                                    title={item.title} 
                                    class_name={item.class_name} 
                                    not_mine={item.not_mine}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
            
        <div/>
    </li>
    )
}
export type ModalReflection_type = {
    reflection:string[]
}
function ModalReflection({reflection}:ModalReflection_type){
    return (
        <li className="fcsc conatiner-modal-li">
                    <div className="frcs">
                        <span className="material-symbols-outlined link-svg">
                            book_2
                        </span>
                        <span>project-reflection</span>
                    </div>
                        <div className="li-info fcsc">
                            {
                                (reflection && reflection.length > 0) && 
                                    reflection.map((item,idx)=>(
                                        <div className="" key={idx}>
                                            <span>{idx+1}</span>
                                            <div>
                                                {item}
                                            </div>
                                        </div>
                                    ))
                            }
                        </div>
                        
                    <div/>
                </li>          
    )
}