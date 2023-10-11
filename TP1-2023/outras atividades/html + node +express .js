const port = 8080;

//Express
const express = require("express");
const app = express();
app.set('view engine', 'ejs');

app.get("/exemplo", (request, response) => {
response.render("teste"); // views //
});

app.get("/ola", (request, response) => {
    response.send(`ola, ${request.query.nome}$`); // views //
    });

app.use((request, response, next) => {
response.status(404).send("<h1>Página não encontrada.</h1>");
})

app.listen(port, () => {
console.log(`Servidor funcionando na porta: ${port}`);
});