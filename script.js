const ul = document.querySelector("#ul");
const list = document.querySelectorAll("li");
const start = document.querySelector("#start");
const finish = document.querySelector("#finish");

const red = "#ff0000";
let magicNumber;
let arr = [];

ul.addEventListener("click", choose);

list.forEach((element) => {
    arr.push(element.innerHTML);
});
console.log(arr);


function choose(event) {
    magicNumber = Number(event.target.innerText);
    console.log(event);

    if (event.target.id == "ul") {
        return;
    } else if (event.target.id == !"wall") {
        event.target.style.backgroundColor = red;
        event.target.classList.add("target");

        for (let i = 0; i < list.length; i++) {

            /* geriden sayma yapmak için hep 100'den indexi çıkaracak. örnek: 56. indexte ise i, j = 100-56 olacak */
            let j = list.length - i;

            /* hangi koşulda ne olacağını belirlemek için */
            if ( arr[i] == event.target.innerText ) {
                console.log(list[i].innerHTML);
            }     
            
        }
    }
}
