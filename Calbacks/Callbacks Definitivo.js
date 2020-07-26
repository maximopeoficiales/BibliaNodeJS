function calculate(n1, n2, operation) {
  return operation(n1, n2);
}
/* function add(n1, n2) {
        return n1 + n2;
      } */

calculate(1, 5, (n1, n2) => {
  let variable = n1 + n2;
  console.log(variable);
});

const library = [
  {
    id: 1,
    theme: "La biblia de Node JS",
    authorId: 1,
  },
  {
    id: 2,
    theme: "Javascript EveryWhere",
    authorId: 2,
  },
  {
    id: 3,
    theme: "React JS ❤ ",
    authorId: 3,
  },
];
const authors = [
  { id: 1, name: "Ubaldo Acostaa" },
  { id: 2, name: "Juan de la Torre" },
  { id: 3, name: "Fernando Herrera" },
];

function GetBookForKey(id, callback) {
  const book = library.find((book) => book.id === id);
  /* si es null */
  if (!book) {
    /* no encontro el libro */
    const error = new Error();
    error.message = "Id no valido " + id;
    return error;
  }
  /* le pasa null este captura el error */
  callback(null, book);
}
function GetAuthorForKey(id, callback) {
  const author = authors.find((author) => author.id === id);
  /* si es null */
  if (!author) {
    /* no encontro el autor */
    const error = new Error();
    error.message = "Id del autor no es  valido: " + id;
    return error;
  }
  /* le pasa null este captura el error */
  callback(null, author);
}

/* esto es normalmente que pase pero es mejor evitarlo */
GetBookForKey(3, (error, book) => {
  if (error) {
    return console.log(error.message);
  }
  GetAuthorForKey(book.authorId, (error, author) => {
    if (error) {
      return console.log(error.message);
    }
    console.log(
      `El author del libro es: ${author.name} del libro : ${book.theme}`
    );
  });
  return book;
});
/* 
   function callback(item, index, array) {
     console.log(
       `${item.theme} y su indice es:${index}   y su objecto es: (${array[index].theme})`
     );
     console.log(array[index]);
   }
   library.forEach(callback); */
