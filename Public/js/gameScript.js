const socket = io();

var boxes = document.getElementsByClassName("box");

const winPatterns = []


// function findposition() {
//     const position = this.getAttribute("data-id");

//     // alert(position);

//     return position;
// }

function markBox() {
    const position = this.getAttribute("data-id");

    let box = document.querySelector(`[data-id="${position}"]`);
    box.innerHTML = "X";
}

//if 1, 2, 3 || 1, 5, 9 || 4, 5, 6 || ... === same value, return Victory();

// boxes.forEach(box => {
//     box.addEventListener("click", function () {
//         const dataId = this.getAttribute("data-id");
//         alert(dataId);
//     })
// })

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", markBox , false);
}