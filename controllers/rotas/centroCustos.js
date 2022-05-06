const Tipos        = require('../../models/Tipos')()
const CentrosCustos = require("../../models/CentrosCustos")()
const query         = require('../funcoes/funcoesRotas')
const Transacoes    = require('../../models/Transacoes')()
const {autenticar}=require('../auth')

module.exports = function(app){
    
    app.post('/centroscustos', autenticar,  (req, res)=>{
        let dados={idTipo:req.body.idtipo,nomeCentroCusto:req.body.nome}
        query.create(dados, CentrosCustos, res)
         
    })
    app.get('/centroscustos', autenticar, (req, res)=>{
        query.findAll(res, 'centrosCustos', CentrosCustos, 'idCentroCusto', 'DESC', Tipos)
    });

    app.get('/centroscustos/buscar', autenticar, (req, res)=>{
        let id = req.query['id']
        console.log(id)
        query.buscar(res, id, CentrosCustos) 
    })
    
    app.put('/centroscustos', autenticar,  (req, res)=>{
        let id = req.body.idCentroCusto
        let dados={
            idTipo:req.body.idtipo,
            nomeCentroCusto:req.body.nome
            }
        console.log(id,dados)
        query.update(id, "idCentroCusto", dados, CentrosCustos,res)      
    })


    app.delete('/centroscustos', autenticar,  (req, res)=>{
        let id = parseInt(req.query['id'])
        console.log(id)
        query.destroy(id, 'idCentroCusto', CentrosCustos, res) 
    })
};


