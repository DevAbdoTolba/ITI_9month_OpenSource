console.log("Hello World");

let button = document.querySelector("button");
let div = document.querySelector("div");
let myxhr = new XMLHttpRequest(); 
// console.log(myxhr);
// status == 0 --> request not send / not complete / error 
// status == 200 ++ readystate == 4 

// get data from object only if req send and response is ready
button.addEventListener("click", function(){
    myxhr.open("GET", "std.txt");
    myxhr.send(); // network request
    console.log(myxhr);
    myxhr.onreadystatechange = function(){
        if(myxhr.status == 200 && myxhr.readyState == 4){
            console.log(myxhr.response);
            div.innerHTML = myxhr.response;
        }
    }

});