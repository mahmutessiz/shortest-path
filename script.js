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
            let j = i - 1;
            let k = i - 10;

            /* hangi koşulda ne olacağını belirlemek için */
            if (arr[i] == magicNumber) {
                if (event.target.innerText != "") {
                    console.log(j, i);

                    if (list[j].innerHTML != "") {
                        list[j].style.backgroundColor = "#ff0000";
                    }
                }
            }
        }
    }
}
