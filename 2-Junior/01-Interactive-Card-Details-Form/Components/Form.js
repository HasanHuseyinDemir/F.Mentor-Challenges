import { Cardholder } from "./Form/CardHolder.js";
import { Iban } from "./Form/Iban.js";
import { Expiration } from "./Form/Expiration.js";

export const Form=()=>{
    return html/*jsx*/`
    <div id="form">
        <Cardholder/>
        <Iban/>
        <Expiration/>
        <Submit/>
    </div>    
    `
}
RegisterComponent(Form);