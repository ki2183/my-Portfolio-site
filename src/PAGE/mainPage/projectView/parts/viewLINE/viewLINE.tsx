import { useAppSelector } from "../../../../../REDUX/hooks"
import "./viewLINE.scss"

type ViewLINE_type = {
    bdFstRef: React.MutableRefObject<(HTMLDivElement | null)[]>
    bdSecRef: React.MutableRefObject<(HTMLDivElement | null)[]>
    bdTrdRef: React.MutableRefObject<(HTMLDivElement | null)[]>
}
interface ViewLINE_interface extends ViewLINE_type{
    num:number
}
function ViewLINE({
    num,
    bdFstRef,
    bdSecRef,
    bdTrdRef
}:ViewLINE_interface){
    return(
        <div className="frame-projectView-line">
            {
                Array.from({length:num},(_,idx)=>(
                    <ViewLINEBorder
                        key={idx}
                        idx={idx}
                        bdFstRef={bdFstRef}
                        bdSecRef={bdSecRef}
                        bdTrdRef={bdTrdRef}

                    />
                ))
            }    
        </div>
    )
}

export default ViewLINE

interface ViewLINEBorder_interface extends ViewLINE_type {
    idx: number
}

function ViewLINEBorder({
    idx,
    bdFstRef,
    bdSecRef,
    bdTrdRef,
}:ViewLINEBorder_interface){
    const {bg,text} = useAppSelector(state => state.theme)
    const tf = bdSecRef.current.length-1 === idx
    return(
        <div className="projectView-line">
            <div>
                <div style={{backgroundColor:idx === 0 ? "": text}} ref={el => bdFstRef.current[idx] = el} className="fst-line"/>
            </div>
            <div className="f-c-c-c">
                <div ref={el => bdSecRef.current[idx] = el} style={{backgroundColor:text}}   className="sec-line"/>
                <div className="f-c-c-c" style={{backgroundColor:bg}}>
                        {bdFstRef.current.length - idx}
                </div>
            </div>
            <div className="f-c-c-c">
                <div style={{backgroundColor:!tf ? text : ""}}  ref={el => bdTrdRef.current[idx] = el} className="trd-line"/>
            </div>
        </div>
    )
}