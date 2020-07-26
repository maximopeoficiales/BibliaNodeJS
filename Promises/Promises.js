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
/* al ser una promesa tiene dos parametros  */
function GetBookForKey(id) {
  return new Promise((resolve, reject) => {
    const book = library.find((book) => book.id === id);
    if (!book) {
      const error = new Error();
      error.message = "Id no valido " + id;
      reject(error); /* si ocurre un error */
    }
    resolve(book); /* si todo sale correcto */
  });
}
function GetAuthorForKey(id) {
  return new Promise((resolve, reject) => {
    const author = authors.find((author) => author.id === id);
    if (!author) {
      const error = new Error();
      error.message = "Id del autor no es  valido: " + id;
      reject(error);
    }
    resolve(author);
  });
}
GetBookForKey(2)
  .then((book) => {
    console.log(book);
    /* al ponerle return podemos usar el siguiente then de respuesta */
    return GetAuthorForKey(book.authorId);
  })
  .then((author) => {
    console.log(author);
  })
  .catch((error) => {
    console.log(error);
  });
