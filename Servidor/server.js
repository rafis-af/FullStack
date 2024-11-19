require('colors');
var http = require('http');
var express = require('express');
var mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;
const uri = 'mongodb+srv://rafalmeida:gMbCUmpJ0TlZnrFn@rafisalmeida.gl8nb.mongodb.net/?retryWrites=true&w=majority&appName=RafisAlmeida'
const client = new MongoClient(uri, { useNewUrlParser: true });


var app = express();




app.use(express.static('./public'));


var server = http.createServer(app);


server.listen(80);



console.log('servidor rodando...');

//////////////////////////////////////////////////////////////////

// Funções para banco de dados

app.get('/cadastrar_livro', function(req,res){

    let nome = req.query.cadastra_nome;
    let autor = req.query.cadastra_autor;
    let isbn = req.query.cadastra_isbn;
    let editora = req.query.cadastra_editora;
    let data = req.query.cadastra_data;   
    
    //salva dados no banco
    client.db("RafisAlmeida").collection("livros").insertOne(
      { 
        db_nome: nome, 
        db_autor: autor, 
        db_isbn: isbn,
        db_editora: editora,
        db_data: data
    }, function (err) {
      if (err) {
        res.render('resposta.ejs',{resposta: 'Falha', mensagem: 'Erro ao cadastrar livro.'})
      }else {
        res.render('resposta.ejs',{resposta: 'Sucesso', mensagem: 'Livro cadastrado com sucesso!'})    
      };
    });

    console.log(nome, autor, isbn, editora, data);
});

app.get('/buscar_livro_nome', function(req,res){

    let nome = req.query.nome
    
    //busca o livro no banco de dados
    client.db('RafisAlmeida').collection('livros').find(

        {db_nome: nome}).toArray(function(err,items){
            if(err){
            res.render('resposta.ejs',{resposta: 'Falha', mensagem: 'Erro ao buscar livro.'})
            }
            else if(items.length == 0){
            res.render('resposta.ejs',{resposta: 'Falha', mensagem: 'Livro não encontrado.'})    

            }else{
            res.render('resposta.ejs',{resposta: 'Sucesso', mensagem: items.length +  ' Livro(s) encontrado(s) com sucesso.'})    
            }
        })

    

})

app.get('/buscar_livro_isbn', function(req,res){

    let isbn = req.query.isbn
    
    //busca o livro no banco de dados
    client.db('RafisAlmeida').collection('livros').find(

        {db_isbn: isbn}).toArray(function(err,items){
            if(err){-
            res.render('resposta.ejs',{resposta: 'Falha', mensagem: 'Erro ao buscar livro.'})
            }
            else if(items.length == 0){
            res.render('resposta.ejs',{resposta: 'Falha', mensagem: 'Livro não encontrado.'})    

            }else{
            res.render('resposta.ejs',{resposta: 'Sucesso', mensagem: items.length +  ' Livro(s) encontrado(s) com sucesso.'})    
            }
        })

    

});

app.get('/atualizar_editora_livro', function(req, res){

  let isbn = req.query.isbn
  let editora = req.query.editora

  // atualiza senha do usuário
  client.db("RafisAlmeida").collection("livros").updateOne(
    { 
      db_isbn: isbn 
    },

    { 
      $set: {db_editora: editora} 
    }, function (err, result) {
      console.log(result);
      if (result.modifiedCount == 0) {
        res.render('resposta.ejs', {resposta: 'Falha', mensagem: "Usuário/senha não encontrado!"})
      }else if (err) {
        res.render('resposta.ejs', {resposta: 'Falha', mensagem: "Erro ao atualizar usuário!"})
      }else {
        res.render('resposta.ejs', {resposta: 'Falha', mensagem: "Usuário atualizado com sucesso!"})       
        };

    });
});



