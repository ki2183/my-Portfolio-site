import "./myBlog.scss"
import "../../../flex.scss"
import GetSVG from "../../../FOLDER_svg/getSVG"
import velog from "../../../svgFolder/velog.svg"
function MyBlog(){
    return(
        <div className="container-myBlog frcc">
            <div className="fcsc">
                <span className="myBlog-svg frcc">
                    <GetSVG src="github"/>
                    <span>GitHub</span>
                </span>
                <span className="blog-link">https://github.com/ki2183</span>
                <li>과거 진행했던 프로젝트 코드</li>
                <li>클론 코드</li>
                <li>학습 코드</li>
                <li>과제 코드</li>
            </div>
            <div className="fcsc">
            <span className="myBlog-svg frcc">
                    <img src={velog}></img>
                    <span>velog</span>
                </span>
                <span className="blog-link">https://velog.io/@ki2183/posts</span>
                <li>학습하고 내용을 공유</li>
                <li>설정이나 오류 해결</li>
                <li>쓰고 싶을 때</li>
            </div>
        </div>
    )
}

export default MyBlog