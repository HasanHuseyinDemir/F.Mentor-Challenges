let log=console.log;

let control=(e)=>parseInt(e.value)&&(e.value.length==2)

let error={
    cardExpired(){
        log("card-expired")
    },
    nameError(){
        log("name-error")
    },
    cvc(){
        log("wrong-cvc")
    },
    negativeMonth(){
        log("negative-month")
    },
    ibanNumber(){
        log("wrong-iban")
    }
}

let year=new Date().getFullYear()%2000;

export const store=createStore({
    iban:"0000000000000000",
    cardholder_name:"Jane Appleseed",
    expiration_year:year,
    expiration_month:new Date().getMonth(),
    twoDigit(arg){
        let selected=parseInt(arg=="year"?this.expiration_year:this.expiration_month)
        if(selected>1){
            if(selected<10){
                return "0"+selected
            }else{
                return selected
            }
        }else{
            if(arg=="year"){
                this.expiration_year=year;
                return year
            }else{
                this.expiration_month=1;
                return "01"
            }
        }

    },
    cvc:"222",
    ibanPart(arg){
        //returns [arg==1]:0000 [arg==2]:0000 ....
        return this.iban.substring(arg*4-4,arg*4)
    },
    e_year_Input(e){
        if(control(e)){
            this.expiration_year=parseInt(e.value)
        }else if(e.value>year){
            e.value=this.expiration_year
        }else{
            error.cardExpired();
        }
    },
    e_month_Input(e){
        if(control(e)||parseInt(e.value)<=12){
                this.expiration_month=parseInt(e.value)
        }
        if(e.value.length>2||parseInt(e.value>12)||this.expiration_month>12){
            e.value=1;
            this.expiration_month=1;
        }
    },
    ibanInput(e){
        if(!isNaN(e.value)){
            console.log("number",e.value);
            this.iban=e.value
            //e.value=this.iban
        }else{
            error.ibanNumber();
        }
        
    },
    nameInput(){
        if(this.cardholder_name.length<2){
            error.nameError()
        }
    }
})