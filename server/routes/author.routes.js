const AuthorController = require('../controllers/author.controller');

module.exports = (app) => {
    app.get('/api/author', AuthorController.findAllAuthors);
    app.get('/api/:id', AuthorController.findOneAuthor);
    app.post('/api/author/new', AuthorController.createAuthor);
    app.put('/api/:id/update', AuthorController.updateAuthor);
    app.delete('/api/:id/delete', AuthorController.deleteAuthor);
}