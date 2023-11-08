const express = require('express');
const ejs = require('ejs');
const path = require('path');
const { title } = require('process');
const app = express()

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/',(req,res) => {
    res.render('index', {title: 'Página Inicial'});});

app.get('/pagina2',(req,res) => {
    req.render('pagina2', {title: 'Página 2'});
});


app.get('/pagina3',(req,res) => {
    req.render('pagina3', {title: 'Página 3'});
});

app.listen(6009, () => {
    console.log('Servidor rodando na porta 6009')
});
