import { ThankYou } from "./Components/ThankYou.js";

export const store=createStore({
    rate:0,
    setRate(arg){
        this.rate=arg;
    },
    isEnabled(arg){
        if(arg==this.rate){
            return "enabled"
        }
    },
    isRated(){
        if(this.rate){
            return "rated"
        }else{
            return "not-rated"
        }
    },
    submit(){
        if(this.rate){
            document.querySelectorAll("#app").render(ThankYou);
        }else{
            alert("Please don't forget to rate")
        }
    }
})