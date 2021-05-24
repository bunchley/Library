"use strict";
let myLibrary = [
  new Book("Crime and Punnishment", "Dostoevsky", "878", "Want to Read"),
];

const form = document.querySelector(".add-form");
const libraryContainer = document.querySelector(".library-books");
const newBookFormContainer = document.querySelector(".top-half");

//constructr below
function Book(title, author, pages, haveRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.haveRead = haveRead;
}

Book.prototype.changeReadStatus = function (newStatus) {
  this.read = newStatus;
};

//adding user input to library
function addBookToLibrary() {
  let title = document.querySelector("[data-name=title]").value;
  let author = document.querySelector("[data-name=author]").value;
  let pages = document.querySelector("[data-name=page]").value;
  let haveRead = document.querySelector("[data-name=read]").checked;
  if (haveRead === true ? (haveRead = "Already read") : (haveRead = "Read"))
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
function toggleReadBook(id) {
  myLibrary[id].read === true ? false : true;
}

newBookFormContainer.addEventListener("click", (e) => {
  //prevents a reload
  e.preventDefault();
  //display the add book to library form
  if (e.target.classList.contains("add-button")) {
    form.style.display = "block";
  }
  //trigger adding book to array
  else if (e.target.classList.contains("addNewBook")) {
    addBookToLibrary();
    render();
  }
  //close add new book form
  else if (e.target.classList.contains("close")) {
    form.style.display = "none";
  }
});

//delete and read status handler for library
libraryContainer.addEventListener("click", (e) => {
  //prevents a reload
  e.preventDefault();

  //delete button lsitener
  if (e.target.classList.contains("delete")) {
    let buttonArrayPosition = e.target.getAttribute("data-num");
    myLibrary.splice(buttonArrayPosition, 1);
    render();
  }
  //read status toggler
  else if (e.target.classList.contains("read-status")) {
    let buttonArrayPosition = e.target.getAttribute("data-num");
    if (e.target.innerText === "Want to Read") {
      myLibrary[buttonArrayPosition].changeReadStatus("Read");
    } else {
      myLibrary[buttonArrayPosition].changeReadStatus("Want to Read");
    }
    e.target.innerText = myLibrary[buttonArrayPosition].read;
    // toggleReadBook(buttonArrayPosition); //<______________________where you left off.
    // render();
  }
});

//display Library
function render() {
  let tableElement = "<tbody>";
  let i = 0;
  for (; i < myLibrary.length; i++) {
    tableElement += "<tr>";
    tableElement += "<td>" + myLibrary[i].title + "</td>";
    tableElement += "<td>" + myLibrary[i].author + "</td>";
    tableElement += "<td>" + myLibrary[i].pages + "</td>";
    tableElement +=
      "<td>" +
      `<button class='read-status' data-num=${i}>${myLibrary[i].haveRead}</button>` +
      "</td>";
    tableElement +=
      "<td>" + `<button class='delete' data-num=${i}>Delete</button>` + "</td>";
    tableElement += "</tr>";
  }
  tableElement += "</tbody>";
  libraryContainer.innerHTML = tableElement;
}
render();
