const ul = document.querySelector("#ul").children;
const start = document.querySelector("#start");
const finish = document.querySelector("#finish");

finish.innerHTML = "0";
start.innerHTML = "start";

function findPath(arr, index) {
    // exit
    if (arr[11].innerHTML == Number && arr[index].id != "wall") {
        return console.log("buldum");
    }
    // main
    if (arr[index].innerHTML > 0) {
        arr[index].innerHTML = "deneme";
    }

   return findPath(index+1);
}

findPath(ul, 0);


































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
