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
async function GetBookForKey(id) {
  const book = library.find((book) => book.id === id);
  if (!book) {
    const error = new Error();
    error.message = "Id no valido " + id;
    throw error; /* error */
  }
  return book; /* retonar el libro */
}
async function GetAuthorForKey(id) {
  const author = authors.find((author) => author.id === id);
  if (!author) {
    const error = new Error();
    error.message = "Id del autor no es  valido: " + id;
    throw error;
  }
  return author;
}
async function init() {
  try {
    /* si no pones el await seria un promise por ende usarias .then */
    const book = await GetBookForKey(1);
    const author = await GetAuthorForKey(book.authorId);
    console.log(`El libro es: ${book.theme}`);
    console.log(`El Author del Libro es: ${author.name}`);
  } catch (error) {
    console.log(error);
  }
}

init();
