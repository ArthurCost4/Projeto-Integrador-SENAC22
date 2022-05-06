const Sequelize     = require('sequelize')
const connection    = require('../controllers/database')
const CentrosCustos = require('./CentrosCustos')()

module.exports = function(app){
    const Transacoes = connection.define('transacoes', {
        idTransacao:{
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        descricaoTransacao:{
            allowNull: false,
            type: Sequelize.TEXT,
            defaultValue: null
        },
        valorTransacao:{
            allowNull: false,
            type: Sequelize.TEXT,
            defaultValue: null
        }
    },
    {
        timestamps: false
    })
    
    Transacoes.belongsTo(CentrosCustos,{
        constraint: true,
        foreignKey:'idCentroCusto',
        allowNull:false,
    })
    CentrosCustos.hasMany(Transacoes,{
        foreignKey:'idCentroCusto'
    });
    

    //Transacoes.sync({force: true});
    return Transacoes
}