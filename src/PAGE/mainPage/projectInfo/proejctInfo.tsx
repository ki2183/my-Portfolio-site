import { useAppSelector } from "../../../REDUX/hooks"
import "./proejctInfo.scss"
import { projectInfoDto, viewTree_type } from "./proejctInfoDto"
const react_hook_form_SVG  = "https://react-hook-form.com/images/logo/react-hook-form-logo-only.svg"


export function ProejctInfo(){
    
    return (
        <div className="container-projectInfo f-c-c-s">
            <ProjectView/>
        </div>
    )
}


function ProjectView(){

    
    const projectInfo = projectInfoDto()
    console.log(projectInfo)

    return (
        <>
            {(projectInfo && projectInfo.length > 0) ? (
                projectInfo.map((item,idx)=>(
                    <div key={idx} className="container-proeject-view">
                    <div>
                        <ProjectImg src={item.src} />
                        <ProejectStacks treeDto={item.viewTree}/>
                    </div>
                        <ProjectExplanation 
                            title={item.projectInfo.title}
                            point={item.projectInfo.point}
                            reason={item.projectInfo.reason}
                            result={item.projectInfo.result}
                        />

                    </div>
                ))
            ) : null}
        </>
    )
}

type ProjectImg_type = {
    src:string
}
function ProjectImg({src}:ProjectImg_type){
    return <div className="frame-project-bg f-c-c-c">
        <img src={src}/>
    </div>
}
type projectStacks_type = {
    treeDto:viewTree_type
}
function ProejectStacks({treeDto}:projectStacks_type){
    
    return (
        <div className="container-projectStacks Noto">
            {(treeDto&&treeDto.length>0) && treeDto.map((item,idx)=>(
                <TreesView
                key={idx}
                tree_dto={item.viewTree} 
                treeTypeName={item.treeTitle}
            />
            ))}
        </div>
    )
}

type TreesView_type = {
    treeTypeName:string,
    tree_dto:SmallTreeComponent_type[]
}

function TreesView({treeTypeName,tree_dto}:TreesView_type){
    return (
        <div className="frame-projectStacks">
        <div className="fc">
            <span className="material-symbols-outlined techtree">
                    account_tree
            </span>
            <span>{treeTypeName}</span>
        </div>
        <div>
            <div className="tree-small-view f-r-c-s">
                {(tree_dto && tree_dto.length > 0) ? tree_dto.map((item,idx)=>(
                    <SmallTreeComponent src={item.src} title={item.title} active={item.active}/>
                )) : null}
               
            </div>
        </div>
    </div>    
    )
}

export type SmallTreeComponent_type = {
    src:string,
    title:string,
    active?: boolean
}
function SmallTreeComponent({src,title,active}:SmallTreeComponent_type){
    const theme = useAppSelector(state => state.theme)

    const style = {
        borderRight: theme.theme === "dark" ? `1px solid ${theme.tree_info_border}` : "",
        borderBottom:theme.theme === "dark" ? `1px solid ${theme.tree_info_border}` : "",
        boxShadow: theme.theme === "light" ? `5px 4px 5px ${theme.tree_info_border} ` : "",
        backgroundColor: theme.tree_info_bg
    }

    const titleStyle = {
        textDecoration: active === false ? "line-through" : ""
    }

    return (
        <div className="small-tree f-r-c-c" style={style}>
            <img src={src}/>
            <span style={titleStyle}>{title}</span>
         </div>
    )
}

export type ProjectExplanation_type = {
    title:string,
    reason:string,
    point:string,
    result:string
}

function ProjectExplanation({title,reason,point,result}:ProjectExplanation_type){
    return (
        <div className="container-project-explanation f-c-c-s">
            <span>{title}</span>
            <ol className="f-c-s-s">
                <div className="info">
                    {reason}
                </div>
                <div className="info">
                    {point}
                </div>
                <div className="info">
                    {result}
                </div>
            </ol>
        </div>
    )
}