module.exports = function (app){
    app.get('/', (req, res)=>{
        res.render('home')
    })
    app.get('/home', (req, res)=>{
        res.render('home')
    })
}