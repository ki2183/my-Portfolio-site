import { useAppSelector } from "../../../REDUX/hooks"
import "./proejctInfo.scss"
import resister_bg from "./projectImgs/resister_img.png"
import techTree from "./projectImgs/techTree.svg"
import htmlSVG from '../../../svgFolder/html.svg'
import cssSVG from '../../../svgFolder/css.svg'
import jsSVG from '../../../svgFolder/js.svg'
import reactSVG from '../../../svgFolder/react.svg'
import gitSVG from '../../../svgFolder/git.svg'
import githubSVG from '../../../svgFolder/github.svg'
import jiraSVG from '../../../svgFolder/jira.svg'
import h2SVG from '../../../svgFolder/h2.svg'
import awsSVG from '../../../svgFolder/aws.svg'
import springSVG from '../../../svgFolder/spring.svg'
const react_hook_form_SVG  = "https://react-hook-form.com/images/logo/react-hook-form-logo-only.svg"


export function ProejctInfo(){
    return (
        <div className="container-projectInfo">
            <ProjectView/>
        </div>
    )
}


function ProjectView(){
    return (
        <div className="container-proeject-view">
            <div>
                <ProjectImg src={resister_bg} />
                <ProejectStacks/>
            </div>
                <ProjectExplanation/>

        </div>
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

function ProejectStacks(){

    const treeDto_front = [
        {
            src:htmlSVG,
            title:"HTML"
        },{
            src:cssSVG,
            title:"CSS"
        },{
            src:jsSVG,
            title:"JavaScript"
        },{
            src:reactSVG,
            title:"React"
        },{
            src:react_hook_form_SVG,
            title:"React Hook Form"
        }
    ]

    const treeDto_back = [
        {
            src:awsSVG,
            title:"AWS",
            active:false
        },{
            src:springSVG,
            title:"Spring",
            active:false
        },{
            src:h2SVG,
            title:"h2",
            active:false
        }
    ]

    const treeDto_version = [
        {
            src:gitSVG,
            title:"git"
        },{
            src:githubSVG,
            title:"github"
        },{
            src:jiraSVG,
            title:"Jira"
        }
    ]

    return (
        <div className="container-projectStacks Noto">
            <TreesView
                key={0}
                tree_dto={treeDto_front} 
                treeTypeName="Frontend"
            />

            <TreesView
                key={1}
                tree_dto={treeDto_back} 
                treeTypeName="Backend"
            />

            <TreesView
                key={2}
                tree_dto={treeDto_version} 
                treeTypeName="Version Control"
            />
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

type SmallTreeComponent_type = {
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

function ProjectExplanation(){
    return (
        <div className="container-project-explanation f-c-c-s">
            <span>배달 웹 프로젝트</span>
            <ol className="f-c-s-s">
                <div className="info">
                    배달 웹 사이트입니다. html css js만 다룰 줄 아는 상태에서 새로운 프레임워크와 db연동을 연습하고자 만들었어요.
                </div>
                <div className="info">
                    처음엔 jira ...................
                </div>
                <div className="info">
                    쓰고 후기
                </div>
            </ol>
        </div>
    )
}