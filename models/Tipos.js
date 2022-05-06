const Sequelize  = require('sequelize')
const connection = require('../controllers/database');

module.exports = function(app){
    const Tipos = connection.define('tipos',{
        idTipo:{
            allowNull:false,
            autoIncrement: true,
            primaryKey:true,
            type:Sequelize.INTEGER
        },
        nomeTipo:{
            allowNull:false,
            type:Sequelize.TEXT,
            defaultValue: null

        },
        operacao:{
            allowNull:false,
            type: Sequelize.TEXT,
            defaultValue:null
        }
    },
    {
        timestamps: false
    })
    //Tipos.sync({force: true});
    return Tipos
}