export const Iban=()=>{
    let Page=html/*html*/`
    <div class="form-field" id="form-card-number">
        <p>Card Number</p> 
        <input maxlength="16" placeholder="e.g. 1234 5678 9123 0000" $oninput="ibanInput"/>
    </div>
    `
    return Page;
}
RegisterComponent(Iban);