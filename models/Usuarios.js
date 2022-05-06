const Sequelize = require('sequelize');
const connection = require('../controllers/database');
module.exports = function(app){
    const Usuarios = connection.define("usuarios",{
        idUsuario:{
            allowNull:false,
            autoIncrement: true,
            primaryKey:true,
            type:Sequelize.INTEGER
        },
        nomeUsuario:{
            allowNull:false,
            type: Sequelize.TEXT,
            defaultValue: null
        },
        email:{
            allowNull:false,
            type: Sequelize.TEXT,
            defaultValue: null
        },
        hashSenha:{
            allowNull:false,
            type: Sequelize.TEXT,
            defaultValue: null
        }
    },{ 
        timestamps: false
    })
    //Usuarios.sync({force: true})
    return Usuarios
}