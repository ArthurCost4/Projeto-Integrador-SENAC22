
function findAll(res, rota, table, orderCampo, ordem = 'DESC', includeTable) {
    let consulta = []
    if (includeTable) {
        let include = {include: [{ model: includeTable }] }
        consulta.push(include)
    }
    query = { raw: true, order: [[orderCampo, ordem]] }
    consulta.push(query)
    //console.log(...consulta)
    table.findAll(...consulta)
        .then(resp => {
            //console.log(resp[0].dataValues.centros_custo)
            res.render(rota, { dados: resp })
        })
        .catch(erro => {
            console.log('Catch Get')
            console.log(erro)
        })
}
exports.findAll = findAll


function destroy(id, campoPk, table, res) {
    let keyId = {}
    keyId[campoPk]=id
    table.destroy({ where: keyId })
        .then((resp) => {
            res.json(resp)
        })
        .catch(erro => {
            console.log('Catch delete')
            console.log(erro)
        })
}
exports.destroy = destroy

function update(id, campoPk, dados, table, res) {
    let keyId = {}
    keyId[campoPk]=id
    //{idCentroCusto:5}
    table.update(dados, { where: keyId })
    .then(resp => {
        res.json(resp)
    })
    .catch(() => {
        res.status(500)
        res.json({ erro: 'Dados não encontrados' })
    })
}
exports.update = update

function buscar(res, id, table) {
    table.findByPk(id)
        .then(resp => {
            console.log(res, resp)
            res.json(resp)
        })
        .catch(() => {
            res.status(500)
            res.json({ erro: 'Dados não encontrados' })
        })
}
exports.buscar = buscar


function create(dados, table, res) {
    table.create(dados)
        .then(resp=>{
            console.log(resp) 
            res.json(resp)
           
        }).catch(erro => {
            console.log('Catch post')
            console.log(erro)
        })
}
exports.create = create 

