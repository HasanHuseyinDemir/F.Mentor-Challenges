import { Attribution } from "./Attribution.js"
import { Container } from "./Container/Container.js"


const Index=()=>{
    return html/*jsx*/`
    <>
        <Container/>
        <Attribution/>
    </>
    `
}

document.querySelectorAll("#app").render(Index)