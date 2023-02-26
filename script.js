const ul = document.querySelector("#ul").children;
const start = document.querySelector("#start");
const finish = document.querySelector("#finish");



for (let index = 0; index < ul.length; index++) {
    if (ul[index].id == "wall") {
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
    }

   /*  if (parseInt(ul[index].innerHTML) > parseInt(ul[index - 1].innerHTML) && parseInt(ul[index].innerHTML) > parseInt(ul[index - 10].innerHTML)  ) {
        console.log("deneme");
    } */
}

/*     if (ul[index].id == "wall"){    
        ul[index].innerHTML = 0;
    } else{
        if (ul[index-1].innerHTML == 0) {

          ul[index].innerHTML = 1;  

        }
         else if (ul[index-1].innerHTML > ul[index-10].innerHTML) {

            ul[index].innerHTML = parseInt(ul[index-1].innerHTML) + 1;

        } else if (ul[index-10].innerHTML >= ul[index-1].innerHTML) {
            ul[index].innerHTML = parseInt(ul[index-10].innerHTML) + 1;
        }
    } */
