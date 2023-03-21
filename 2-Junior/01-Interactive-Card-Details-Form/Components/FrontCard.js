import { store } from "../store.js"

export const FrontCard=()=>{
    return H(
    store,
    html`
    <div id="card-front" class="card">
        <img id="logo" src="./images/card-logo.svg"/>
        <p class="card-iban">{{iban}}</p>
        <div id="card-front-bottom"><span id="card-holder">{{cardholder_name}}</span> <span id="card-expiration">{{expiration_month}}/{{expiration_year}}</span></div>
    </div>
    `
    )
}
// <FrontCard/>
RegisterComponent(FrontCard)