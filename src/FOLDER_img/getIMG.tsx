import Dapp from "./Dapp.png"
import resister from "./resister.png"
import musicApp from "./music.png"
import memo from "./memo.png"
import timeline from "./timeline.png"

type GetIMG_type = {
    src:string
}

function GetIMG({src}:GetIMG_type){

    let src_ = ""
    if(src === "Dapp")
        src_ = Dapp
    else if(src === "resister")
        src_ = resister
    else if(src === "music")
        src_ = musicApp
    else if(src === "memo")
        src_ = memo
    else if(src === "timeline")
        src_ = timeline
    return (
        <img src={src_}/>
    )
}

export default GetIMG