const ul = document.querySelector("#ul");
const ul1 = document.querySelector("#ul").children;
const start = document.querySelector("#start");
const finish = document.querySelector("#finish");

const red = "#ff0000";
let magicNumber;


function choose(event) {
     magicNumber = Number(event.target.innerText);
     console.log(event)

    if (event.target.id == "ul") {
        return;
    } else if (event.target.id == !"wall") {
            event.target.style.backgroundColor = red;
             event.target.classList.add("target"); 
        }
    

    for (let i = 0; i < ul1.length; i++) {

        


          if (ul1[i].innerText == magicNumber && magicNumber > 0 && ul1[i].id== !"wall") {
            magicNumber--;
            console.log(magicNumber);
            console.log(ul1[i]);
            
        
        if (ul1[i].className == "target") {
            console.log(i);
        }
            
        } 




/*         if (ul1[i].innerHTML == "hi") {
            console.log(ul1[i - 1].innerHTML);

            for (let index = 100; index > -0; index--) {

                if (i - index > 0 && ul1[index].id == !"wall") {

                     if (Number(ul1[index].innerHTML) < Number(ul1[i].innerHTML) ) {
                       ul1[index].innerHTML = ul1[i].innerHTML;   
                    } 
                    ul1[index].innerHTML = ul1[i].innerHTML;
                }
                
            }
        } */

        /* if (Number(ul1[i].innerHTML) + 1 == event.target.innerHTML) {

                console.log("idene");
                console.log(event.target.style);
                ul1[i].style.backgroundColor= "#ff0000";

             }  */
    }
}

ul.addEventListener("click", choose);

/* if (finish.innerHTML == "0") {
    ul[88].innerHTML += Number(finish.innerHTML) + 1;
    console.log(ul[89].innerHTML);
} */

/* for (let index = 0; index < ul.length; index++) {
    if (ul[index].id == "wall") {
        ul[index].innerHTML = 0;
    } else {
        ul[index].innerHTML = 1;

        if (ul[index].innerHTML == 1) {
            ul[index].innerHTML =
                Number(ul[index - 1].innerHTML) + Number(ul[index].innerHTML);

            if (
                Number(ul[index].innerHTML) < Number(ul[index - 10].innerHTML)
            ) {
                ul[index].innerHTML = Number(ul[index - 10].innerHTML) + 1;
            }
        }
    }
} */

/* for (let i = 0; i < ul.length; i++) {
    console.log(ul[37]);
    if (Number(ul[i].innerHTML) - 1 > Number(ul[i - 1].innerHTML)) {
        console.log("oldu");
    }
} */

/*   if (ul[index].id == "wall") {
        ul[index].innerHTML = 0;
    } else if (ul[index - 1].innerHTML >= 0) {
        if (
            parseInt(ul[index - 10].innerHTML) >=
            parseInt(ul[index - 1].innerHTML)
        ) {
            ul[index].innerHTML = parseInt(ul[index - 10].innerHTML) + 1;
        } else if (
            parseInt(ul[index - 1].innerHTML) >=
            parseInt(ul[index - 10].innerHTML)
        ) {
            ul[index].innerHTML = parseInt(ul[index - 1].innerHTML) + 1;
        }
    } */
