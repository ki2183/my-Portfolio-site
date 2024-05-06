export type projectInformation_type = {
    title:string
    info:string[]
    img:string,
    link:string,
    frontend:string[],
    backend?:string[],
    versionControl:string[]
}

export const project_information = [
    {
        title:"배달 웹 사이트",
        img:"Dapp",
        link:"",
        info:[
            "한신대 수강신청 추천 웹 사이트 입니다. 일부 학교에는 수강신청을 도와주는 웹 또는 앱이 있지만, 한신대학교에는 없어서 만들어 보았습니다. 여러 개의 질문을 응답한 뒤에 시간표를 받습니다. 받은 시간표를 본인에게 맞게 변경할 수 있는 웹사이트입니다.",
            "만드는 과정에서 사용자 친화적인 ui/ux를 구성했다는 것에도 의미가 있었으나, react와 애니메이션 라이브러리를 같이 사용햐여 동적인 사이트를 만들었고, react hook의 개념을 다 잡는 경험을 가질 수 있었습니다."
        ],
        frontend:[
            "html","css","js","react",
        ],
        backend:[
            ""
        ],
        versionControl:[
            "jira","git","github"
        ]

    },{
        title:"한신대 수강신청 추천 웹 사이트",
        img:"resister",
        link:"https://resister-course-vercel.vercel.app/",
        info:[
            "한신대 수강신청 추천 웹 사이트 입니다. 일부 학교에는 수강신청을 도와주는 웹 또는 앱이 있지만, 한신대학교에는 없어서 만들어 보았습니다. 여러 개의 질문을 응답한 뒤에 시간표를 받습니다. 받은 시간표를 본인에게 맞게 변경할 수 있는 웹사이트입니다.",
            "만드는 과정에서 사용자 친화적인 ui/ux를 구성했다는 것에도 의미가 있었으나, react와 애니메이션 라이브러리를 같이 사용햐여 동적인 사이트를 만들었고, react hook의 개념을 다 잡는 경험을 가질 수 있었습니다."
        ],
        frontend:[
            "html","css","js","react",
        ],
        versionControl:[
            "git","github"
        ]
    },{
        title:"뮤직 플레이어",
        img:"resister",
        link:"https://resister-course-vercel.vercel.app/",
        info:[
            "한신대 수강신청 추천 웹 사이트 입니다. 일부 학교에는 수강신청을 도와주는 웹 또는 앱이 있지만, 한신대학교에는 없어서 만들어 보았습니다. 여러 개의 질문을 응답한 뒤에 시간표를 받습니다. 받은 시간표를 본인에게 맞게 변경할 수 있는 웹사이트입니다.",
            "만드는 과정에서 사용자 친화적인 ui/ux를 구성했다는 것에도 의미가 있었으나, react와 애니메이션 라이브러리를 같이 사용햐여 동적인 사이트를 만들었고, react hook의 개념을 다 잡는 경험을 가질 수 있었습니다."
        ],
        frontend:[
            "html","css","js","react",
        ],
        versionControl:[
            "git","github"
        ]
    }
    
] as projectInformation_type[]