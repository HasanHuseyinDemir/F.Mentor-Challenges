import { Attribute } from "./Attribute.js"

export const Summary=()=>{
    return html/*jsx*/`
    <div class="summary">
    <h2>Summary</h2>
    
    
    [- Attributes -]
    <div id="attributes">
    <Attribute color="red" title="Reaction" point="80" />
    <Attribute color="yellow" title="Memory" point="92" />
    <Attribute color="green" title="Verbal" point="61" />
    <Attribute color="blue" title="Visual" point="72" />
    </div>
  
    <div id="continue">
    Continue
    </div>

    </div>
    
    `
}

RegisterComponent(Summary)