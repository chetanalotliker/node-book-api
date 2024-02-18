const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());

app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}/`)
)

const book = [
    {
        id: '1234',
        name: 'Mock Book Name',
        author: 'Mock Book Author Name'
    }
];

app.get('/book', (req, res) => {
    res.status(200).send(book)
})

app.post('/book/:id', (req, res) => {
    const { id } = req.params;
    const { concept } = req.body;

    if (!concept) {
        res.status(418).send({ message: 'We have a book concept!' });
    }

    res.send({
        book: `Book with ${concept} and Book ID of ${id}`
    })
})

app.delete('/book', (req, res) => {
    res.status(200).send("Book Deleted Successfully")
})

app.put('/book/:id', (req, res) => {
    const { id } = req.params;
    const { name, author } = req.body;

    if (book[0].id === id) {
        book[0].name = name;
        book[0].author = author;
        res.status(200).send(`Book Details Updated Successfully`);
    } else {
        res.status(404).send(`Book Not Found`);
    }
})
