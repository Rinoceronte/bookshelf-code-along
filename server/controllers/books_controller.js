let books = [];
let id = 0;

module.exports = {
    read: (req, res) => {
        res.status(200).send(books);
    },
    create: (req, res) => {
        books.push({id: id, title: req.body.title, author: req.body.author});
        id++;
        res.status(200).send(books);
    },
    update: (req, res) => {
        let index = books.findIndex(b => b.id === Number(req.params.id));
        books[index] = {
            id: books[index].id,
            title: req.body.title || books[index].title,
            author: req.body.author || books[index]. author
        };
        res.status(200).send(books);
    },
    delete: (req, res) => {
        books.splice(books.findIndex(b => b.id === Number(req.params.id)), 1);
        res.status(200).send(books);
    }
};