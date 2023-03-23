import { BackCard } from "./Left/BackCard.js";
import { FrontCard } from "./Left/FrontCard.js";

export const Left=()=>{
    return html/*jsx*/`
    <>
    <div id="main-left">
        <FrontCard/>
        <BackCard/>
    </div>
    <style>
    #main-left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    }
    #card-front{
        margin-bottom: 6vh;
        margin-left: 20vh;
    }
    #card-back{
        margin-left: 33vh;
    }
    </style>
    
    </>
    `
}
RegisterComponent(Left);