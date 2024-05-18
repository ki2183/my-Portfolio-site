import "./viewIMG.scss"
import GetIMG from "../../../../../FOLDER_img/getIMG"
import { project_information_dto } from "../../../../../projectInformation"
import { useAppDispatch } from "../../../../../REDUX/hooks"
import { modal_open } from "../../../../../REDUX/Slices/modalSlice"
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
                        (project_information_dto && project_information_dto.length > 0) &&
                            project_information_dto.slice().reverse().map((item,idx)=>(
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
    const dispatch = useAppDispatch()

    const modal_is_open = () =>{
        dispatch(modal_open())
    }

    return (
        <div className="projectView-img" ref={el => imgRef.current[idx] = el}>
            <div onClick={(()=>{modal_is_open()})}>
                <GetIMG src={src}/>
                <GetIMG src={src}/>
            </div>
        </div>
    )
}