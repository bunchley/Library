let myLibrary = [new Book("Crime and Punnishment", "Dostoevsky", "878", "Yes")];

const addBookButton = document.querySelector(".add-button");

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
  let haveRead = document.querySelector("[data-name");
  myLibrary = new Book(title, author, pages, haveRead);
}
//add
function showBookForm() {
  addBookButton.addEventListener("click", e => {
    let form = document.querySelector(".add-form");
    form.style.display = "block";
    addBookButton.style.display = "none";
    console.log("clicked");
    render();
  });
}

//display Library
function render() {
  let tableElement = "<tbody>";
  for (i = 0; i < myLibrary.length; i++) {
    tableElement += "<tr>";
    tableElement += "<td>" + myLibrary[i].title + "</td>";
    tableElement += "<td>" + myLibrary[i].author + "</td>";
    tableElement += "<td>" + myLibrary[i].pages + "</td>";
    tableElement += "<td>" + myLibrary[i].haveRead + "</td>";
  }
  tableElement += "</tbody>";
  console.log("table Element", tableElement);
  document.querySelector(".library-books").innerHTML = tableElement;
}
render();
showBookForm();
