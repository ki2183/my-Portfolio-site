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
import { ProjectExplanation_type, SmallTreeComponent_type } from "./proejctInfo"
const react_hook_form_SVG  = "https://react-hook-form.com/images/logo/react-hook-form-logo-only.svg"


export type viewTree_type = {
        treeTitle:string,
        viewTree:SmallTreeComponent_type[]
    }[]

export type projectInfoDto_type = {
    src:string,
    viewTree:viewTree_type,
    projectInfo:ProjectExplanation_type 
}

export function projectInfoDto():projectInfoDto_type[]{




    const projectInfo = [
        {
            src:resister_bg,
            projectInfo:{
                title:"한신대 수강신청 추천 웹",
                reason:"제가 다니는 학교에는 수강신청 추천 앱이나 웹사이트가 없었습니다. 그래서 저는 학생들이 수강신청을 더 효과적으로 할 수 있도록 도와주는 웹사이트를 만들기로 결정했습니다.",
                point:"이 웹사이트는 애니메이션 라이브러리를 활용하여 동적으로 구현되었습니다. UI/UX 측면에서 많은 고민을 했고, 그 결과로 사용자 친화적인 디자인을 구현할 수 있었습니다. 당시 MBTI가 유행하던 시기였기 때문에, 학생들에게 친숙한 MBTI 사이트를 참고하여 디자인했습니다.",
                result:"스크롤이 가로라면 많은 질문이 한 번에 들어와 집중력이 분산되기에 사용자가 질문에 집중할 수 있도록 스크롤 형식을 가로로 구현했습니다. 또한, 사용자가 빈 질문을 놓치지 않도록, 빈 질문이 있으면 자동으로 해당 질문으로 스크롤이 이동하도록 만들었습니다. 이를 통해 사용자 중심의 웹사이트를 만드는 경험을 쌓을 수 있었습니다."
            },
            viewTree:[
                {
                    treeTitle:"Frontend",
                    viewTree:[
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
                },{
                    treeTitle:"Backend",
                    viewTree:[
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
                },{
                    treeTitle:"Version Control",
                    viewTree:[
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
                }
            ]
        }
    ] as projectInfoDto_type[]

    return projectInfo
}