var mongoose = require('mongoose');
var book = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    author: { type: String, required: true }
})
// Biên dịch mô hình từ schema
const Book = mongoose.model('booksss', book); 
module.exports = Book;