const addBook = document.querySelector(".addBook");
const submit = document.getElementById("submitBtn");
const cancel = document.getElementById("cancelBtn");
const inputBook = document.querySelector(".inputBook");
const bookDisplay = document.querySelector(".book-display");

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
  library = JSON.parse(localStorage.getItem("books"));
  displayLibrary(library);
} else {
  library = [];
}

addBook.addEventListener("click", () => {
  inputBook.classList.toggle("inputBookActive");
  inputBook.reset();
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
    addBookToLibrary();
  }
});
cancel.addEventListener("click", (e) => {});

function addBookToLibrary() {
  let book = new Book(
    document.getElementById("title").value,
    document.getElementById("author").value,
    document.getElementById("pages").value,
    document.getElementById("isRead").checked
  );

  library.push(book);
  localStorage.setItem("books", JSON.stringify(library));
  inputBook.classList.toggle("inputBookActive");
  displayLibrary(library);
}
function displayLibrary(library) {
  bookDisplay.innerHTML = "";
  for (i = 0; i < library.length; i++) {
    number = document.createElement("div");
    classname = "book-number-" + i;
    number.classList.add(classname);
    bookDisplay.appendChild(number);

    // setting up the title
    title = document.createElement("p");
    classname = "title-book-number-" + i;
    title.classList.add(classname);
    title.textContent = library[i].title;
    number.appendChild(title);

    // setting up the author
    author = document.createElement("p");
    classname = "author-book-number-" + i;
    author.classList.add(classname);
    author.textContent = library[i].author;
    number.appendChild(author);

    //setting up the Number of pages
    pages = document.createElement("p");
    classname = "pages-book-number-" + i;
    pages.classList.add(classname);
    pages.textContent = library[i].pages;
    number.appendChild(pages);

    isRead = document.createElement("p");
    classname = "isRead-book-number-" + i;
    isRead.classList.add(classname);
    isRead.textContent = library[i].isRead ? "Read" : "Not read";
    number.appendChild(isRead);

    readToggle = document.createElement("button");
    classname = "readToggle-book-number-" + i;
    readToggle.classList.add(classname);
    readToggle.textContent = "Read or not ?";
    number.appendChild(readToggle);
  }
}
