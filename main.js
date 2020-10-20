let myLibrary = [];

//DOM Elements
const addBtn = document.querySelector();


//the constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}

//do stuff
function addBookToLibrary() {
    let title = document.getElementById("Title").nodeValue;
    let author = document.getElementById("Author").nodeValue;
    let pages = document.getElementById("pages").nodeValue;
    let read = document.getElementById("read").nodeValue;
    myLibrary.push(new Book(title,author,pages,read))
    document.getElementById('#bookForm').reset()
}