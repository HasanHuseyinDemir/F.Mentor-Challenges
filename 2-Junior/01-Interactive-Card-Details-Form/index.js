import { Attribution } from "./Components/Attribution.js"
import { Right } from "./Components/Right.js"
import { Left } from "./Components/Left.js"

const Main=()=>{
    return html/*jsx*/`
    <>
        <div id="main">
            <Left/>
            <Right/>
        </div>
        <Attributio/>
        
        <style>
        #main{
        height: 100vh;
        width: 100vw;
        display: flex;
        }
        #main-left{
        width: 30vw;
        height: 100vh;
        background-image: url("./images/bg-main-desktop.png");
        }
        </style>
    </>
        `
}

document.querySelectorAll("#app").render(Main)