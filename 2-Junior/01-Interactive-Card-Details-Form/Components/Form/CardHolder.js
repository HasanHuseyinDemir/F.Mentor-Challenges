export const Cardholder=()=>{
    let Page=html/*html*/`
    <div class="form-field" id="form-card-holder">
    <p>CARDHOLDER NAME</p> <input $oninput="nameInput" maxlength="30" placeholder="e.g. Jane Appleseed" $model="cardholder_name">
    </div>
    `
    return Page;
}
RegisterComponent(Cardholder);