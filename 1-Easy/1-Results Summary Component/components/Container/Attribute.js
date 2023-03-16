export const Attribute=(props)=>{
    let colors={
        red:"0, 100%, 67%",
        yellow:"39, 100%, 56%",
        green:"166, 100%, 37%",
        blue:"234, 85%, 45%"
    }

    let color=colors[props.color];
    let style=`color:hsl(${color});  background-color:hsla(${color},10%)`
    let src=`./assets/images/icon-${props.title.toLowerCase()}.svg`


    return html`
    <div style="${style}" class="label">

    <div class="info-label">
    <img src="${src}"/>
    <span class="label-title">${props.title}</span>
    </div>
    
    <div class="label-point">
        <span class="point">${props.point}</span> / 100
    </div>
    
    </div>
    `
}

RegisterComponent(Attribute)