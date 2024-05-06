import GetSVG from "../../../../../FOLDER_svg/getSVG"
import "./viewINFO.scss"
import { projectInformation_type, project_information } from "../../../../../projectInformation"

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
                    {(project_information && project_information.length > 0) 
                        && project_information.map((item,idx)=>(
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
    projectInformation:projectInformation_type
}

function ProejectINFOParts({
    idx,
    informationRef,
    projectInformation
}:ViewINFOParts_interface){
    const {link,info,title,frontend,backend,versionControl} = projectInformation
    return(
        <div className="f-c-c-c" ref={el => informationRef.current[idx] = el}>
        <div className="projectView-info-in f-c-c-c">
            <span className="projectView-in-title">{title}</span>
            
            <div className="f-c-c-c">
                {
                    (info && info.length > 0) && info.map((item,idx)=>(
                        <span key={idx}>{item}</span>
                    ))
                }
            </div>
        </div>

        <div className="projectView-info-link f-r-c-s">
           <span>link:</span>
           <span>{link}</span>
        </div>

        <div className="projectView-info-skill-set f-c-s-s">
            {
                frontend && (
                    <div className=" f-r-c-s">
                        {
                            frontend.map((item,idx)=>(
                                <span key={idx} className="f-r-c-c">
                                    <GetSVG src={item} />
                                    <span>{item}</span>
                                </span>   
                            ))
                        }
                           
                    </div>
                )
            }
                
            {
                backend && (
                    <div className=" f-r-c-s">
                        {
                            backend.map((item,idx)=>(
                                <span key={idx} className="f-r-c-c">
                                    <GetSVG src={item} />
                                    <span>{item}</span>
                                </span>   
                            ))
                        }
                           
                    </div>
                )
            }
            {
                versionControl && (
                    <div className=" f-r-c-s">
                        {
                            versionControl.map((item,idx)=>(
                                <span key={idx} className="f-r-c-c">
                                    <GetSVG src={item} />
                                    <span>{item}</span>
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