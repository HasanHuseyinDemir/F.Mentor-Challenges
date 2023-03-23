import { store } from "../../store.js"

export const BackCard=()=>{
    return H( store, html`
    <div id="card-back" class="card">
        <div></div>
        <div id="card-band"></div>
        <div></div>
        <div id="card-cvc"><span id="cvc">{{cvc}}</span></div>
        <div></div>
        <div id="card-other"></div>
        <div></div>
    </div>
    `)
}
// <BackCard/>
RegisterComponent(BackCard)