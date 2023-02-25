"use strict";

// let input = document.querySelector("#products input");

// let button = document.querySelector("#products button")

// let ul = document.querySelector("#products ul");

// button.addEventListener("click", function () {
//     let inputValue = input.value;

//     if (inputValue == "") {
//         alert("Dont empty");
//         return;
//     }


//     let list = document.querySelectorAll("#products li");

//     for (const item of list) {
//         if (item.innerText == inputValue) {
//             alert("Item already exist");
//             input.value = "";
//             return;
//         }
//     }

//     let li = document.createElement("li");

//     li.className = "list-group-item my-1";

//     let icon = document.createElement("i");

//     let span = document.createElement("span");

//     span.innerText = inputValue;

//     icon.className = "fa-solid fa-circle-xmark float-end";

//     li.append(span, icon);

//     ul.append(li);

//     checkAlert();

//     input.value = "";

//     removeElem(li, icon);

// })

// function removeElem(removeElem, icon) {
//     icon.addEventListener("click", function () {
//         removeElem.remove();
//         checkAlert();
//     })
// }

// document.querySelector(".delete-all").addEventListener("click", function () {
//     ul.innerHTML = "";
//     checkAlert();
// })

// function checkAlert(){
//     if(ul.innerHTML.trim() == ""){
//         document.querySelector(".alert-warning").classList.remove("d-none");
//         return;
//     }
//     document.querySelector(".alert-warning").classList.add("d-none");
// }

// checkAlert();


// let sidebar = document.querySelector(".sidebar");

// let closeIcon = document.querySelector(".sidebar .close");

// let openIcon = document.querySelector(".sidebar .open");

// openIcon.addEventListener("click",function(){
//     sidebar.classList.remove("hide");
//     this.classList.add("d-none");
//     closeIcon.classList.remove("d-none");
// })

// closeIcon.addEventListener("click",function(){
//     sidebar.classList.add("hide");
//     this.classList.add("d-none");
//     openIcon.classList.remove("d-none")
// })


// let button = document.querySelector("button");

// console.log(button.parentNode.parentNode)
// console.log(button.previousElementSibling.innerHTML)
// console.log(button.nextElementSibling)

// let elems = button.parentNode.children;

// for (const item of elems) {
//     if(item.innerText == "Hello"){
//         item.style.color = "red";
//     }
// }

// console.log(button.closest(".heads"))

// let elem1 = document.querySelector(".gultac");

// console.log(elem.parentNode.parentNode.parentNode.parentNode.lastElementChild.innerText)
// console.log(elem1.closest(".head").lastElementChild.innerHTML)

// let elem2 = document.querySelector(".anar");

// console.log(elem2.closest(".head").previousElementSibling.firstElementChild.firstElementChild.firstElementChild.innerHTML)

// let elem3 = document.querySelector(".novreste");

// console.log(elem3.closest(".container").previousElementSibling.children[1].innerHTML)

let elemInput = document.querySelector("input");

// function inputEvent() {
//     console.log("input event")
// }

// elemInput.addEventListener("keydown", inputEvent);

// document.getElementById("test").addEventListener("change", function (e) {
//     if (e.target.value == "1") {
//         elemInput.value = "Html";
//     }
// })

elemInput.addEventListener("keyup",function(e){

    if(e.keyCode === 13)
    document.querySelector("button").click();
});

document.querySelector("button").addEventListener("click", function(e){
    alert(e.target.previousElementSibling.value)
})