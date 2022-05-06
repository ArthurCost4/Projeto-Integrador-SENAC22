const query = require('../funcoes/funcoesRotas')
const Usuarios = require("../../models/Usuarios")()
const auth = require('../auth')
const { response } = require('express')
const session = require('express-session')
const { v4: uuidv4 } = require('uuid');

module.exports = function (app) {
    app.post('/cadastro', (req, res) => {
        var erros = []
        if (!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null) {
            erros.push({ texto: "Nome invalido" })
        }
        if (!req.body.email || typeof req.body.email == undefined || req.body.email == null) {
            erros.push({ texto: "Email invalido" })
        }

        if (!req.body.senha || typeof req.body.senha == undefined || req.body.senha == null) {
            erros.push({ texto: "Senha invalida" })
        }
        if (req.body.senha != req.body.senha2) {
            erros.push({ texto: "As senhas não correspodem" })
        }
        if (erros.length > 0) {
            res.render('cadastro', { erro: erros })
        } else {
            const senha = auth.criptogragarSenha(req.body.senha);//Criptografa a senha do usuario
            const dados = { nomeUsuario: req.body.nome, email: req.body.email, hashSenha: senha }
            query.create(dados, Usuarios, res)
            res.redirect('login')
        }
    })

    app.post('/login', (req, res) => {
        const usuario = req.body.email;
        const senha = auth.criptogragarSenha(req.body.senha);
        Usuarios.findOne({ where: { email: usuario } })
            .then(resp => {
                if (senha == resp.hashSenha && usuario == resp.email) {
                    req.session.idUsuario = resp.idUsuario;
                    req.session.usuario = resp.email;
                    res.json(resp)
                } else {
                    console.log('erro')
                }
            })
    })

    app.get('/bemvindo', (req, res) => {
        if (req.session.usuario) {
            res.render('bemvindo')
        } else {
            res.send('usuario negado')
        }
    })

    app.get("/logout", (req, res) => {
        req.session.usuario = undefined;
        req.session.idUsuario = undefined;
        res.redirect("/home")
    })

    app.get('/login', (req, res) => {
        res.render('login')
    })

    app.get('/cadastro', (req, res) => {
        res.render('cadastro')
    })
}