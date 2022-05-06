const Sequelize     = require('sequelize')
const CentrosCustos = require('../../models/CentrosCustos')()
const Tipos         = require('../../models/Tipos')()
const Transacoes    = require('../../models/Transacoes')()
const query         = require('../funcoes/funcoesRotas')
const {autenticar}=require('../auth')

module.exports = function(app){

    app.get("/relatorio",autenticar, (req, res) => {

          Transacoes.findAll({
            attributes:['idCentroCusto',
            [Sequelize.fn('sum', Sequelize.col('valorTransacao')), 'SomaValor']
          ],
          include:[{model:CentrosCustos, attributes:{exclude:['idCentroCusto', 'idTipo']},
                  include:[{model:Tipos}]}],
          group:'idCentroCusto',
          raw:true
          })
          .then(cCusto=>{
            Transacoes.findAll({
              attributes:['idCentroCusto',
              [Sequelize.fn('sum', Sequelize.col('valorTransacao')), 'SomaValor']
            ],
            include:[{model:CentrosCustos, attributes:{exclude:['idCentroCusto']},
                    include:[{model:Tipos}]}],
            group:'nomeTipo',
            raw:true
            })
            .then(tipos =>{ 
              
              let resp = {centrosCustos: cCusto, tipos: tipos}

              res.render('relatorio',{dados:resp})
            })
            
          })
      });
}

