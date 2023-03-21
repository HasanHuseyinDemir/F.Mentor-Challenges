import { store } from "../store.js";

export const ThankYou=()=>{
    //Alternative Usage with store : H(store,html)
    return H(
        store,
        html`
        <div class="container">
            <div class="center"><img id="thank-image" src="./images/illustration-thank-you.svg"/></div>
            <div class="center"><span class="text">You selected {{rate}} out of 5</span></div>
            <h1 align="center">Thank you!</h1>
            <p class="text">We appreciate you taking the time to give a rating. If you ever need more support, 
            don’t hesitate to get in touch!</p>
        </div>    
    `)
}