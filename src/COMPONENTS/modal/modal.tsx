import ReactModal from "react-modal"
import "./modal.scss"
import "../../flex.scss"
import "../../font.scss"
import { useDispatch } from "react-redux"
import { useAppSelector } from "../../REDUX/hooks"
import { modal_close } from "../../REDUX/Slices/modalSlice"
import GetSVG from "../../FOLDER_svg/getSVG"
import React, { useEffect, useRef } from "react"



function ViewModal(){
    const modal = useAppSelector(state => state.modal)
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
        //   backgroundColor: "#151515",
          background:window,
          justifyContent: "center",
          overflow: "auto",
        },
      };

    const ref = useRef<HTMLOListElement>(null)

    return (
      <ReactModal style={customModalStyles} isOpen={modal} onRequestClose={()=>dispatch(modal_close())}>
        <div className="container-modal fccs" onScroll={e=>{
            e.stopPropagation()
        }}>
            <h1>배달웹 프로젝트</h1>
            <div className="modal-line"/>
            <ol className="fcsc" ref={ref}>
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
                        <a className="link-project">
                            https://resister-course-vercel.vercel.app/
                        </a>
                    </li>
                    
                   </ol>
                    
                </li>

                <li className="fcsc conatiner-modal-li">
                    <div className="frcs">
                        <span className="material-symbols-outlined link-svg">
                            edit
                        </span>
                        <span>project-summary</span>
                    </div>
                        <div className="li-info fcsc">
                            <div className="frcs">
                                <span>1</span>배달앱/웹의 전반적인 기능을 구현해보기 위해서 만든 사이트입니다. <br/>
                            </div>
                            <div className="frss">
                                <span>2</span>새로 학습한 React와 api를 활용한 동적 요소 생성을 경험해 보기 위해서 프로젝트를 진행했고
                            같이 작업한 선배는 스프링 프레임 워크를 학습하기 위해서 같이 프로젝트를 진행했습니다.
                            </div>
                        </div>
                        
                    <div/>
                </li>
                
                <li className="fcsc conatiner-modal-li">
                    <div className="frcs">
                        <span className="material-symbols-outlined link-svg">
                            manufacturing
                        </span>
                        <span>project-features</span>
                    </div>
                        <div className="li-info fcsc">
                            <div className="frcs">
                                <span>1</span>로그인
                            </div>
                            <div className="frcs">
                                <span>2</span>정보수정
                            </div>
                            <div className="frcs">
                                <span>3</span>음식주문
                            </div>
                            <div className="frcs">
                                <span>4</span>장바구니
                            </div>
                            <div className="frcs">
                                <span>5</span>쿠폰
                            </div>
                        </div>
                        
                    <div/>
                </li>

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
                                    <ModalStackSvg src="html" title="html"/>
                                    <ModalStackSvg src="css" title="css"/>
                                    <ModalStackSvg src="js" title="javascript"/>
                                    <ModalStackSvg src="react" title="react"/>
                                </div>
                            </div>
                            <div className="frcs">
                                <span>backend:</span>
                                <div className="frcs">
                                    <ModalStackSvg src="aws" title="aws"/>
                                    <ModalStackSvg src="spring" title="spring"/>
                                    <ModalStackSvg src="h2" title="h2" class_name="base-black-svg"/>
                                </div>
                            </div>
                            <div className="frcs">
                                <span>version_control:</span>
                                <div className="frcs">
                                    <ModalStackSvg src="git" title="git"/>
                                    <ModalStackSvg src="github" title="github" class_name="base-white-svg"/>
                                    <ModalStackSvg src="jira" title="jira" />
                                </div>
                            </div>
                        </div>
                        
                    <div/>
                </li>

                <li className="fcsc conatiner-modal-li">
                    <div className="frcs">
                        <span className="material-symbols-outlined link-svg">
                            book_2
                        </span>
                        <span>project-reflection</span>
                    </div>
                        <div className="li-info fcsc">
                            <div className="">
                                <span>1</span>
                                <div>
                                    팀원 활동시간대가 맞지 않아 소통이 원활하지 않기에 jira를 이용하여 이슈를 올려 체크하고 수정하는 방법을 채택하고, 처음 체계적으로 팀원과 소통하여 개발했습니다.
                                </div>
                            </div>
                            <div className="frss">
                                <span>2</span>
                                <div>
                                처음으로 외부 API데이터를 매핑하여 동적요소를 생성하는 경험을 하고 덕분에 react의 state component 방식에 익숙해지는 계기가 되었습니다.
                                </div>
                            </div>
                        </div>
                        
                    <div/>
                </li>                
            </ol>
        </div>
      </ReactModal>
    )
}

export default ViewModal

type ModalStackSvg_type = {
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

type ModalTitle_type = {
    title:string
}
function ModalTitle({title}:ModalTitle_type){
    return (
        <h1>{title}</h1>
    )
}

type ModalLink_type = {
    link:string
}
function ModalLink({link}:ModalLink_type){
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
                        <a className="link-project">
                            {link}
                        </a>
                    </li>
                    
                   </ol>
                    
                </li>
    )
}
type ModalSummary_type = {
    summary:string[]
}
function ModalSummary({summary}:ModalSummary_type){
    return(
        <li className="fcsc conatiner-modal-li">
                    <div className="frcs">
                        <span className="material-symbols-outlined link-svg">
                            edit
                        </span>
                        <span>project-summary</span>
                    </div>
                        <div className="li-info fcsc">
                            {
                                (summary && summary.length>0) && summary.map((item,idx)=>(
                                    <div className="frcs" key={idx}>
                                        <span>{idx}</span>{item}<br/>
                                    </div>
                                ))
                            }
                        </div>
                        
                    <div/>
                </li>
    )
}
type ModalManufacturing_type = {
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

type ModalStack_type = {
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
type ModalReflection_type = {
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