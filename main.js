const express = require('express');
const cors = require('cors');
const connection = require('./controllers/database');
const bordyParser = require('body-parser');
const { application } = require('express');
const consign = require('consign');
const session = require('express-session')
var app = express();
app.use(cors());


connection
    .authenticate()
    .then(() => {
        console.log('Conectado ao Banco')
    })
    .catch((erro) => {
        console.log(erro)
    })

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bordyParser.urlencoded({ extended: true }));
app.use(bordyParser.json());
let tempo=1*(60*1000*60)
app.use(session({secret: "sldfjlasjk", cookie:{maxAge: tempo}}))

consign()
    .include('./models')
    .include('./controllers/rotas')
    .into(app);
const porta = 8182;
app.listen(porta, function () {
    console.log(`Servidor rodando na porta ${porta}...`)
})