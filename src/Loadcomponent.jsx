import racoonread from '/imgs/racoon_learn.jpg'

// The overlay's z-index must NOT be animated (index.css puts `transition: all`
// on .texttit, which used to tween z-index through every value between the
// hidden and visible layers — that is what made the loader flicker behind the
// page). Instead: fade opacity, and only drop the layer once the fade is done.
const FADE_MS = 400

const LoadComponent=({opacity,indexed,mainlogo})=>{
    const visible = opacity > 0
    return (
        <div
            className="texttit"
            id="waiting"
            aria-hidden={!visible}
            style={{
                zIndex: indexed,
                opacity,
                transition: `opacity ${FADE_MS}ms ease, z-index 0s linear ${visible ? 0 : FADE_MS}ms`,
            }}
        >
        <div className="mtitle" id="waittxt" style={{opacity:opacity}}>
            <div className="rbackdrop"></div>
            <img src={racoonread} className="racoonload" alt="" />
            <div className="loading">
                <div className="logo"><img src={mainlogo} width="120" alt=""/></div>
    <div className="loadtext" id="loadtext" data-text="Loading...."> Loading....</div>
            </div>
<span style={{color:"rgba(205,205,245,.3)"}}>
    Questions for various course codes        
    </span>
    </div>  
       </div> 
    )
}

export default LoadComponent
