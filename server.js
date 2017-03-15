var express = require('express');
var app = express();

function Product(id, name, description, image, price) {
  this.id = id;
  this.name = name;
  this.description = description;
  this.image = image;
  this.price = price;
}

app.get('/products', function (req, res) {
  res.json([
    new Product(1, 'Clean Coding', 'Writing well-structured code is at the heart of software craftsmanship.', 'academy-logo.svg', 695),
    new Product(2, 'Applied Machine Learning', 'In this training, we will show you the basics of machine learning and how to apply machine learning techniques to real-world use cases.', 'academy-logo.svg', 1795),
    new Product(3, 'Testing in Angular', 'In this training you will learn about writing and maintainable tests for Angular applications.', 'academy-logo.svg', 695),
    new Product(4, 'Web Security Testing Foundation', 'Hackers exploit vulnerable software. Prevent their attacks by learning to think like one.', 'academy-logo.svg', 1295),
    new Product(5, 'Secure Coding Fundamentals', 'Learn to look at software like hackers do. In this one-day workshop you will gain the ability to detect vulnerabilities and security leaks by hacking into your own applications. ', 'academy-logo.svg', 695),
    new Product(6, 'Specification by Example', 'This training helps teams to improve collaboration in all phases of software development.', 'academy-logo.svg', 795),
    new Product(7, 'Test Driven Development (TDD)', 'If you don\'t know how to test it, you have no business building it.', 'academy-logo.svg', 495),
    new Product(8, 'Scrum Master Academy', 'Welcome to the Scrum Master Academy. The Scrum Master Academy provides all the practical tips, knowledge, experience and tools you need to perform effectively as a Scrum Master.', 'academy-logo.svg', 4500)
  ])
});

app.post('/checkout', function (req, res) {
  res.sendStatus(200);
});

var server = app.listen(3000, function () {
  console.log('Webshop app listening on port %s', server.address().port);
});
