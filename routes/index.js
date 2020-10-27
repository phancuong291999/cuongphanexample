var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
var Book = require('../model/book.model')
// Create books
router.post('/creat', function (req, res, next) {
  var newbook = new Book()
  newbook.title = req.body.title;
  newbook.description = req.body.description;
  newbook.author = req.body.author;
  const creat = newbook.save().then(function (err) {
    if (err) { console.log(err) }
  })
  return res.json({ code: 200, errorMess: '', data: { newbook }});
});
// Read books
router.get('/find', async function (req, res, next) {
  try {
  const books = await Book.find();
  console.log(books);
  res.json({ code: 200, errorMess: '', data: { books }});
} catch (err) {
  return res.json({ code: 400, errorMess: err, data: null });
  
}
});

// Update books
  router.put('/:id/update', function (req, res, next){
     Book.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err) {
         if (err) return next(err);
         res.send('updated successfully!');
     });
   })

//delete
router.delete('/:id/delete', function (req, res, next) {
  Book.findByIdAndRemove(req.params.id, function (err) {
      if (err) return next(err);
      res.send('Deleted successfully!');
  })
})
module.exports = router;
