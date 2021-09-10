const things=document.querySelectorAll(".err");
const email=document.querySelector(".email");

function validateEmail(input){
    var validRegex = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    if(!input.match(validRegex)){
        return false;
    }else{
        return true;
    }
}


email.addEventListener("change",(event)=>{
    const input=event.target.value;
    console.log(input);
    if(!validateEmail(input)){
        things.forEach(element => {
            element.classList.toggle('hide');
        });
    }
});


