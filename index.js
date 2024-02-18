const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());

app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}/`)
)

const book = {
    name: 'Mock Book Name',
    author: 'Mock Book Author Name'
}

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
