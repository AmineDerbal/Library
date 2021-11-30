const addBook = document.querySelector(".addBook");
const submit = document.getElementById("submitBtn");
const cancel = document.getElementById("cancelBtn");
const inputBook = document.querySelector(".inputBook");

class Book {
  constructor(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }
}
let library;

if (localStorage.getItem("books")) {
  library = JSON.Parse(localStorage.getItem("books"));
  displayLibrary(library);
} else {
  library = [];
}

addBook.addEventListener("click", () => {
  inputBook.classList.toggle("inputBookActive");
});

submit.addEventListener("click", (e) => {
  e.preventDefault();

  if (
    !document.getElementById("title").value ||
    !document.getElementById("author").value ||
    !document.getElementById("pages").value
  ) {
    alert("there is nothing to see");
  } else {
    let book = new Book(
      document.getElementById("title").value,
      document.getElementById("author").value,
      document.getElementById("pages").value,
      document.getElementById("isRead").checked
    );
    library.push(book);
    localStorage.setItem("books", JSON.stringify(library));

    displayLibrary(library);
  }

  cancel.addEventListener("click", (e) => {});

  function displayLibrary(library) {}
});
