let display = document.getElementById("display");

let buttons = document.querySelectorAll("button");

buttons.forEach(function(button){

    button.addEventListener("click", function(){

        let value = button.innerText;

        if(value === "C"){

            display.value = "";
        }

        else if(value === "DEL"){

            display.value = display.value.slice(0,-1);
        }

        else if(value === "="){

            try{

                display.value = eval(display.value);
            }

            catch{

                display.value = "Error";
            }
        }

        else{

            display.value += value;
        }

    });

});

document.addEventListener("keydown", function(event){

    let key = event.key;

    if(
        (key >= "0" && key <= "9") ||
        key === "+" ||
        key === "-" ||
        key === "*" ||
        key === "/" ||
        key === "." ||
        key === "%"
    ){

        display.value += key;
    }

    else if(key === "Enter"){

        try{

            display.value = eval(display.value);
        }

        catch{

            display.value = "Error";
        }
    }

    else if(key === "Backspace"){

        display.value = display.value.slice(0,-1);
    }

    else if(key === "Escape"){

        display.value = "";
    }

});
