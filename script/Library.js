"use strict";
let myLibrary = [new Book("Crime and Punnishment", "Dostoevsky", "878", "Yes")];

const displayFormButton = document.querySelector(".add-button");
const closeButton = document.querySelector(".close");
const addBookButton = document.querySelector(".addNewBook");
const form = document.querySelector(".add-form");
const deleteBookButton = document.querySelectorAll(".delete");

function Book(title, author, pages, haveRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.haveRead = haveRead;
}

//adding user input to library
function addBookToLibrary() {
  let title = document.querySelector("[data-name=title]").value;
  let author = document.querySelector("[data-name=author]").value;
  let pages = document.querySelector("[data-name=page]").value;
  let haveRead = document.querySelector("[data-name=read]").checked;
  if (haveRead ? (haveRead = "Yes") : (haveRead = "No"))
    if ((title === "") | (author === "") | (pages === "")) {
      //provide an error
      console.log(
        "something went wrong adding to library",
        title,
        author,
        pages,
        haveRead
      );
    } else {
      let newBook = new Book(title, author, pages, haveRead);
      myLibrary.push(newBook);
    }
}
//display the add book to library form
displayFormButton.addEventListener("click", function(e) {
  e.preventDefault();
  form.style.display = "block";
  //displayFormButton.style.display = "none";
});
//trigger adding book to array
addBookButton.addEventListener("click", function(e) {
  e.preventDefault();
  addBookToLibrary();
  render();
});

//closes form
closeButton.addEventListener("click", function(e) {
  e.preventDefault();
  form.style.display = "none";
});

//delete row button activation function
deleteBookButton.forEach(item => {
  item.addEventListener("click", e => {
    e.preventDefault();
    e.target.closest();
    console.log(e.target.closest());
  });
});

//display Library
function render() {
  let tableElement = "<tbody>";
  for (let i = 0; i < myLibrary.length; i++) {
    tableElement += "<tr>";
    tableElement += "<td>" + myLibrary[i].title + "</td>";
    tableElement += "<td>" + myLibrary[i].author + "</td>";
    tableElement += "<td>" + myLibrary[i].pages + "</td>";
    tableElement += "<td>" + myLibrary[i].haveRead + "</td>";
    tableElement += "<td>" + "<button class='delete'>Delete</button>" + "</td>";
    tableElement += "</tr>";
  }
  tableElement += "</tbody>";
  document.querySelector(".library-books").innerHTML = tableElement;
}
render();
