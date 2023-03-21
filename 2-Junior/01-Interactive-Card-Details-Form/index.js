import { store } from "./store.js"
import { FrontCard } from "./Components/FrontCard.js"
import { BackCard } from "./Components/BackCard.js"

const Main=()=>{
    return H(
        store,
        html/*jsx*/`
        <FrontCard/>
        <BackCard/>
        `
    )
}

document.querySelectorAll("#app").render(Main)