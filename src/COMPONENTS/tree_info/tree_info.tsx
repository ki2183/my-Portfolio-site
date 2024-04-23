import "./tree_info.scss"
import { useAppSelector } from "../../REDUX/hooks"

type TreeInfo_type = {
    src:string,
    title:string
}

export function TreeInfo({src,title}:TreeInfo_type){

    const {tree_info_bg,tree_info_border,theme} = useAppSelector(state => state.theme)

    const tree_info_style = {
        backgroundColor:tree_info_bg,
        boxShadow: theme === "light" ? `5px 4px 5px ${tree_info_border}`: "",
        borderBottom : theme === "dark" ? `2px solid ${tree_info_border}`: `2px solid transparent`,
        borderRight : theme === "dark" ? `2px solid ${tree_info_border}`: `2px solid transparent`
    }

    return (
        <div className="tree-info" style={tree_info_style}>
            <img className="tree-svg" src={src}/>
            <div>{title}</div>
        </div>
    )
}