import { store } from "./store.js";

export const Rating = () => {
  let Page= html`
    <div class="container">
    <!-- Rating state start -->

        <div id="star-container">
        
        <div id="star"><img id="rating-image" src="./images/icon-star.svg"></div>
        
        </div>
        <h1 id="rating-title">How did we do?</h1>

        <p id="rating-p">Please let us know how we did with your support request. All feedback is appreciated 
        to help us improve our offering!</p>

        <div id="rates">
        <div class="rate" $class="isEnabled(1)" $onclick="setRate(1)">1</div>
        <div class="rate" $class="isEnabled(2)" $onclick="setRate(2)">2</div>
        <div class="rate" $class="isEnabled(3)" $onclick="setRate(3)">3</div>
        <div class="rate" $class="isEnabled(4)" $onclick="setRate(4)">4</div>
        <div class="rate" $class="isEnabled(5)" $onclick="setRate(5)">5</div>
        </div>

        <div id="button-container">
        <button id="rating-submit" $class="isRated" $onclick="submit">Submit</button>
        </div>
    <!-- Rating state end -->
    </div>
    `;
    Page.registerStore(store)
    Page.methods({
        submit(){
            if(store.rate){
                document.querySelectorAll("#app").render(ThankYou);
            }else{
                alert("Please don't forget to rate")
            }
        }
    })
    
    return Page
};

export const ThankYou=()=>{
    let Page= html`
    <div class="container">
    <!-- Thank you state start -->

        <div class="center"><img id="thank-image" src="./images/illustration-thank-you.svg"/></div>
        <div class="center"><span class="text">You selected {{rate}} out of 5</span></div>

        <h1 align="center">Thank you!</h1>

        <p class="text">We appreciate you taking the time to give a rating. If you ever need more support, 
        don’t hesitate to get in touch!</p>

    <!-- Thank you state end -->
    </>    
    `
    Page.registerStore(store);

    return Page
}

document.querySelectorAll("#app").render(Rating)