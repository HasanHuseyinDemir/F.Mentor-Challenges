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
    }
})