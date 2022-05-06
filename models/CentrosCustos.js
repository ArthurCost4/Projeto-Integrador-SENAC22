const Sequelize     = require('sequelize');
const connection    = require('../controllers/database');
const Tipos         = require('./Tipos')();
//const tipos = require("./Tipos")();
module.exports = function(app){
    const CentrosCustos = connection.define("centros_custos",{
        idCentroCusto:{
            allowNull:false,
            autoIncrement: true,
            primaryKey:true,
            type:Sequelize.INTEGER
        },
        nomeCentroCusto:{
            allowNull:false,
            type:Sequelize.TEXT,
            defaultValue: null

        }
    },{
        timestamps: false
    })
    
    CentrosCustos.belongsTo(Tipos,{
        constraint: true,
        foreignKey:'idTipo',
        allowNull:false,
    })
    Tipos.hasMany(CentrosCustos,{
        foreignKey:'idTipo'
    });
    
    
    //CentrosCustos.sync({force: true});
    return CentrosCustos

}
