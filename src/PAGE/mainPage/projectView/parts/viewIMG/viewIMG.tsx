import "./viewIMG.scss"
import GetIMG from "../../../../../FOLDER_img/getIMG"
import { projectInformation_type, project_information } from "../../../../../projectInformation"
type ViewIMG_type ={
    imgRef: React.MutableRefObject<(HTMLDivElement | null)[]>
}

function ViewIMG({
    imgRef,

}:ViewIMG_type){
    return (
        <>
            <div className="frame-projectView-img f-c-c-c" >
                <div>
                    {
                        (project_information && project_information.length > 0) &&
                            project_information.map((item,idx)=>(
                                <ViewIMGPart
                                    key={idx}
                                    idx={idx}
                                    src={item.img}
                                    imgRef={imgRef}                                           
                                />
                            ))
                    }
                </div>
            </div>
        </>
    ) 
}

export default ViewIMG

interface ViewIMGPart_type extends ViewIMG_type {
    src:string
    idx:number
}

function ViewIMGPart({
    idx,
    src,
    imgRef
}:ViewIMGPart_type){
    return (
        <div className="projectView-img" ref={el => imgRef.current[idx] = el}>
            <div>
                <GetIMG src={src}/>
                <GetIMG src={src}/>
            </div>
        </div>
    )
}