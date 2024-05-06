import Dapp from "./Dapp.png"
import resister from "./resister.png"

type GetIMG_type = {
    src:string
}

function GetIMG({src}:GetIMG_type){

    let src_ = ""
    if(src === "Dapp")
        src_ = Dapp
    else if(src === "resister")
        src_ = resister

    return (
        <img src={src_}/>
    )
}

export default GetIMG