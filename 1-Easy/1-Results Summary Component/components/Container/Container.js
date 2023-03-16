import { Summary } from "./Summary.js";
import { Result } from "./Result.js";

export const Container=()=>{
    return html/*jsx*/`
    <div id="container">

    <Result/>
    <Summary/>

    </div>
    `
}

RegisterComponent(Container)