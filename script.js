//your code here!
// script.js

const list = document.getElementById("infi-list");

// function to create and append new list items
let count = 1;
function addItems(num) {
  for (let i = 0; i < num; i++) {
    const li = document.createElement("li");
    li.textContent = "Item " + count;
    list.appendChild(li);
    count++;
  }
}

// initially add 10 items
addItems(10);

// listen for scroll on the list
list.addEventListener("scroll", function () {
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    // reached bottom → add 2 more items
    addItems(2);
  }
});

