var express = require("express");
var app = express();
var { autor, livro } = require("./models");

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))

app.get("/autores", async function(req, res) {
  var mostrar = await autor.findAll();
  res.json(mostrar);
});

app.get("/autores/:id/livro", async function(req, res) {
  let resultado = await autor.findByPk(req.params.id, { include: 'livro' });
  res.json(resultado.livro);
});

app.post('/autores', function(req, res) {
  var resultado = autor.create(req.body);
  res.json(resultado);
});

app.put("/autores/:id", async function(req, res) {
  let resultado = await autor.update(req.body, {where: {id:req.params.id}});
  res.json(resultado);
});

app.delete('/autores/:id', async function(req, res) {
  const deletar = await autor.findByPk(req.params.id);
  deletar.destroy();
});

app.get("/livros", async function(req, res) {
  var mostrar = await livro.findAll();
  res.json(mostrar);
});

app.get("/livros/:id/autores", async function(req, res) {
   let resultado = await livro.findByPk(req.params.id, { include: 'autor' });
  res.json(resultado.autor);
});

app.post('/livros', function(req, res) {
  var resultado = livro.create(req.body);
  res.json(resultado);
});

app.put("/livros/:id", async function(req, res) {
  let resultado = await livro.update(req.body, {where: {id:req.params.id}});
  res.json(resultado);
});

app.delete('/livros/:id', async function(req, res) {
  const deletar = await livro.findByPk(req.params.id);
  deletar.destroy();

});

app.listen(3000, function() {
  console.log("todos os livros e autores");
});