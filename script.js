//button event listeners for create new book, add new book to page, close popup
const addBtn = document.querySelector('#addBtn');
addBtn.addEventListener('click', addBookToLibrary);

const newBookBtn = document.querySelector('#newBtn');
newBookBtn.addEventListener('click', () => popUpForm.style.display = 'block');

const popUpForm = document.getElementById('popUp');
const closePopUp = document.getElementsByTagName('span')[0];
closePopUp.addEventListener('click', () => popUpForm.style.display = 'none');


// the book constructor
function Book( title,author,pages,read){
  this.title = form.title.value;
  this.author = form.author.value;
  this.pages = form.pages.value + 'pages';
  this.read = form.read.checked
  }
  
let myLibrary = [];


// add book with values from form into the library
function addBookToLibrary() {
event.preventDefault();
popUpForm.style.display = 'none';
const book = new Book(title,author,pages,read);
myLibrary.unshift(new Book);
form.reset();
createCard();
console.log(myLibrary)
}

// creates the card for the book
function createCard(item){
  const cardDiv = document.createElement('div');
  const titleDiv = document.createElement('div');
  const authDiv = document.createElement('div');    
  const pageDiv = document.createElement('div');
  const removeBtn = document.createElement('button');
  const readBtn = document.createElement('button');

  cardDiv.classList.add('book');
  cardDiv.setAttribute('id', myLibrary.indexOf(item));

  // setting the classes for the div's
  cardDiv.classList.add('card')
  titleDiv.classList.add('title')
  authDiv.classList.add('author')
  pageDiv.classList.add('pages')
  readBtn.classList.add('read')
  removeBtn.classList.add('remove')


  //putting the content to equal the form submission
  titleDiv.innerHTML = `"${myLibrary[0].title}"`
  cardDiv.appendChild(titleDiv);

  authDiv.innerHTML = myLibrary[0].author
  cardDiv.appendChild(authDiv);

  pageDiv.innerHTML = myLibrary[0].pages
  cardDiv.appendChild(pageDiv);

  cardDiv.appendChild(readBtn)
  if(read===true) {
    readBtn.textContent = 'Read';
    readBtn.style.backgroundColor = '#63da63';
  }

  else {
    readBtn.textContent = 'Not Read';
    readBtn.style.backgroundColor = '#e04f63';
  }

  removeBtn.textContent = 'Remove'; 
  cardDiv.appendChild(removeBtn)
  removeBtn.addEventListener('click', () => {
    parentNode.removeChild(parentNode)
  });

  let library = document.querySelector('.cards-container');
  library.appendChild(cardDiv)

}