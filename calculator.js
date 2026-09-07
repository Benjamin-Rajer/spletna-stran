const display = document.getElementById("display");
let acceptingInput = true;

function appendToDisplay(input){
    if (!acceptingInput) return;

    display.value += input;
}

function calculate(){
    try {
        display.value = eval(display.value);

        if (display.value === "undefined") {
            acceptingInput = false;
        }
    }
    catch(error){
        display.value = "Error";
        acceptingInput = false;
    }

}

function clearDisplay(){
    display.value = "";
    acceptingInput = true;
}