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

    const handleScroll = (e:React.SyntheticEvent<HTMLDivElement>) => {
        e.stopPropagation(); // 이벤트 버블링 중지
      }

    return (
      <ReactModal style={customModalStyles} isOpen={modal} onRequestClose={()=>dispatch(modal_close())}>
        <div className="container-modal fccs" onScroll={handleScroll}>
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
                        <span>project-summary</span>
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
                        <span>project-summary</span>
                    </div>
                        <div className="li-info fcsc">
                            <div className="frcs">
                                <span>1</span>배달앱/웹의 전반적인 기능을 구현해보기 위해서 만든 사이트입니다. <br/>
                            </div>
                            <div className="frss">
                                <span>2</span>새로 학습한 React와 api를 활용한 동적 요소 생성을 경험해 보기 위해서 프로젝트를 진행했고
                            같이 작업한 선배는 스프링 프레임 워크를 학습하기 위해서 같이 프로젝트를 진행했습니다.
                            </div><div className="frss">
                                <span>3</span>새로 학습한 React와 api를 활용한 동적 요소 생성을 경험해 보기 위해서 프로젝트를 진행했고
                            같이 작업한 선배는 스프링 프레임 워크를 학습하기 위해서 같이 프로젝트를 진행했습니다.
                            </div><div className="frss">
                                <span>4</span>새로 학습한 React와 api를 활용한 동적 요소 생성을 경험해 보기 위해서 프로젝트를 진행했고
                            같이 작업한 선배는 스프링 프레임 워크를 학습하기 위해서 같이 프로젝트를 진행했습니다.
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

// base-white-svg

type ModalStackSvg_type = {
    src:string
    title:string
    class_name?:string
}

function ModalStackSvg({src,title,class_name}:ModalStackSvg_type){
    return (
        <div className="modal-stack-svg frcc">
            <GetSVG class_name={class_name} src={src}/>
            <span>{title}</span>
        </div>
    )
}