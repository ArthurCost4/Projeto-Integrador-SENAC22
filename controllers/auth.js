
const crypto = require('crypto')

function criptogragarSenha(senha) {
    let cryPass = crypto.createHash("sha256").update(senha).digest("hex");
    return cryPass
}
exports.criptogragarSenha = criptogragarSenha

function autenticar(req, res, next){
    if (req.session.usuario!=undefined){
        next()
    } else{
        res.redirect('/login')
    }
}
exports.autenticar=autenticar
