import { store } from "../store.js";

export const Rating = () => {
      return H(
        store
        ,
        html`
        <div class="container">
            <div id="star-container"><div id="star"><img id="rating-image" src="./images/icon-star.svg"></div></div>
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
        </div>
        `)
  };