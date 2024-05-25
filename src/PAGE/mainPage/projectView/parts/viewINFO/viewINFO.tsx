import GetSVG from "../../../../../FOLDER_svg/getSVG"
import "./viewINFO.scss"
import { InfoModal_type, projectInformation_type, project_information_dto } from "../../../../../projectInformation"

type ViewINFO_type = {
    informationRef: React.MutableRefObject<(HTMLDivElement | null)[]>
}
interface ViewINFO_interface extends ViewINFO_type{
    wh:{
        w:number
        h:number
    }
}
function ViewINFO({
    wh,
    informationRef
}:ViewINFO_interface){
    return(
        <div className="frame-projectView-info">
            <div className="frame-projectView-info-in f-c-c-s">
                <div className="f-c-c-s projectView-info" style={{marginTop:wh.h/2,gap:"48px"}}>
                    {(project_information_dto && project_information_dto.length > 0) 
                        && project_information_dto.slice().reverse().map((item,idx)=>(
                                <ProejectINFOParts
                                    key={idx}
                                    idx={idx}
                                    informationRef={informationRef}
                                    projectInformation={item}
                                />
                        )
                    )}
                </div>
             </div>
        </div>
    )
}

export default ViewINFO

interface ViewINFOParts_interface extends ViewINFO_type{
    idx:number
    projectInformation:InfoModal_type
}

function ProejectINFOParts({
    idx,
    informationRef,
    projectInformation
}:ViewINFOParts_interface){
    // const {link,info,title,frontend,backend,versionControl} = projectInformation
    const {link,title,stacks,reason,date} = projectInformation
    const {backends,frontends,versionControls} = stacks

    const click_link = () =>{
        window.location.href = link
    }

    return(
        <div className="f-c-c-c" ref={el => informationRef.current[idx] = el}>
        <div className="projectView-info-in f-c-c-c">
            <span className="projectView-in-title">{title}</span>
            <div className="f-c-c-c">
                <span>{reason[1]}</span>
            </div>
        </div>

        <div className="projectView-info-link f-r-c-s">
           <span>link:</span>
           <span onClick={e=>click_link()}>{link}</span>
           
        </div>
        <div className="projectView-info-date f-r-c-s">
            <span>기간:</span>
            <span>{date}</span>
        </div>
        <div className="projectView-info-skill-set f-c-s-s">
            {
                frontends && (
                    <div className=" f-r-c-s">
                        {
                            frontends.map((item,idx)=>(
                                <span key={idx} className="f-r-c-c">
                                    <GetSVG src={item.src} class_name={item.class_name}/>
                                    <span className={item.not_mine ? "modal-not-mine":""}>{item.title}</span>
                                </span>   
                            ))
                        }
                           
                    </div>
                )
            }
                
            {
                backends && (
                    <div className=" f-r-c-s">
                        {
                            backends.map((item,idx)=>(
                                <span key={idx} className="f-r-c-c">
                                    <GetSVG src={item.src} class_name={item.class_name}/>
                                    <span className={item.not_mine ? "modal-not-mine":""}>{item.title}</span>
                                </span>   
                            ))
                        }
                           
                    </div>
                )
            }
            {
                versionControls && (
                    <div className=" f-r-c-s">
                        {
                            versionControls.map((item,idx)=>(
                                <span key={idx} className="f-r-c-c">
                                    <GetSVG src={item.src} class_name={item.class_name}/>
                                    <span>{item.title}</span>
                                </span>   
                            ))
                        }
                           
                    </div>
                )
            }
            </div>
        
    </div>
    )
}