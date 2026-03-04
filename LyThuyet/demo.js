console.log({document});

// Element: cac the
//Cach truy xuat
let idElement = document.getElementById("item_1");
console.log(idElement);

let classElement = document.getElementsByClassName("item");
console.log(classElement);
console.log(classElement.length);
Array.from(classElement).forEach(item => {
    console.log(item);
});

let divElement = document.getElementsByTagName("div");
console.log(divElement);

let firstElement = document.querySelector("#item_1");
console.log(firstElement);

let itemElementQuery = document.querySelectorAll(".item");
console.log(itemElementQuery);

let listElement = document.getElementById("list");
console.log(listElement.innerText);
console.log(listElement.innerHTML);
console.log(listElement.textContent); //Khac innerText o cho khong bi anh huong boi css

firstElement.innerText = "Xem phim";

console.log(firstElement.classList);

firstElement.classList.add("delete");
firstElement.classList.remove("item");
console.log(firstElement.classList.contains("delete"));
firstElement.classList.toggle("first_element");

firstElement.style.color = "blue";
firstElement.style.marginLeft = "50px";

console.log(listElement.lastElementChild);
