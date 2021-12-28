const addBook = document.querySelector(".addBook");
const submit = document.getElementById("submitBtn");
const cancel = document.getElementById("cancelBtn");
const inputBook = document.querySelector(".inputBook");
const bookDisplay = document.querySelector(".book-display");
const input = document.querySelector("#input");

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
  
  displayLibrary(library);
}
function displayLibrary(library) {
  bookDisplay.innerHTML = "";
  for (i = 0; i < library.length; i++) {
    number = document.createElement("div");
    number.classList.add((classname = "book-number-" + i));
    bookDisplay.appendChild(number);

    // setting up the title
    title = document.createElement("p");
    title.classList.add("title-book-number-" + i);
    text = document.createElement("div");
    text.classList.add("book-text");
    bold = document.createElement("strong");
    bold.textContent="title : ";
    title.textContent = library[i].title;
    text.appendChild(bold);
    text.appendChild(title);
    number.appendChild(text);


    // setting up the author
    author = document.createElement("p");
    author.classList.add("author-book-number-" + i);
    text = document.createElement("div");
    text.classList.add("book-text");
    bold = document.createElement("strong");
    bold.textContent="author : ";
    author.textContent =  library[i].author;
    text.appendChild(bold);
    text.appendChild(author);
    number.appendChild(text);
    //setting up the Number of pages
    pages = document.createElement("p");
    pages.classList.add("pages-book-number-" + i);
    text = document.createElement("div");
    text.classList.add("book-text");
    bold = document.createElement("strong");
    bold.textContent="number of pages :";
    pages.textContent = library[i].pages;
    text.appendChild(bold);
    text.appendChild(pages);
    number.appendChild(text);

   // isRead = document.createElement("p");
    //isRead.classList.add("isRead-book-number-" + i);
    buttonDiv = document.createElement("div");
    buttonDiv.classList.add("btn-div");
    number.appendChild(buttonDiv);


    readToggle = document.createElement("button");
    readToggle.classList.add("btn", "btn-success","btn-toggle-" + i);
    readToggle.setAttribute("data-book-index", i);
      if(library[i].isRead){   
         readToggle.textContent = "Read";
        }else{
          readToggle.classList.toggle("btn-danger");
          readToggle.textContent = "Not read";
      }

    buttonDiv.appendChild(readToggle);
    readToggle.addEventListener("click", (e) => {
      toggle(e);
    });

    removeBook = document.createElement("button");
    removeBook.classList.add("btn", "btn-remove","btn-secondary");
    removeBook.setAttribute("data-book-index", i);
    removeBook.textContent = "Remove";
    buttonDiv.appendChild(removeBook);
    removeBook.addEventListener("click", (e) => {
      remove(e);
    });
  }
}

function remove(e) {
  const index = e.target.dataset.bookIndex;
  library.splice(index, 1);
  displayLibrary(library);
  localStorage.setItem("books", JSON.stringify(library));
}

function toggle(e) {
  const index = e.target.dataset.bookIndex;
  const book = document.querySelector(".btn-toggle-" + index);

  if (library[index].isRead) {
    library[index].isRead = false;
    book.textContent = "Not read";
    book.classList.toggle("btn-danger");

    
  } else {
    library[index].isRead = true;
    book.textContent = "Read";
    book.classList.toggle("btn-danger");

   
  }
}
