export const Expiration=()=>{
    let Page=html/*html*/`
    <div class="form-field" id="expiration">
    <p>Exp. Date (MM/YY) </p> 
    <div id="expiration-inputs">
    <input class="my-input" placeholder="MM" $oninput="e_month_Input"> 
    <input type="number" placeholder="YY" class="my-input"  $oninput="e_year_Input">
    </div>
    </div>`

    return Page;
}
RegisterComponent(Expiration);