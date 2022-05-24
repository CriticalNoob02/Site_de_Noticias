//Recuperando as configurações que foram realocadas na parta server  de cofigs
const app = require("./config/server")

//importar o Banco de Dados para app
const db = require("./config/DBconnecti")

//Recuperando banco de Dados
const noticias = require("./mockup")



//rota Home
app.get("/", function(req,res) {
    db.query('SELECT * FROM noticias ORDER BY id_noticia DESC LIMIT 3', function(error,result){
        res.render("home/index", {noticias: result.rows})
    })
})

//Rota Noticias
app.get("/noticias", function(req,res){
    db.query('SELECT * FROM noticias ORDER BY id_noticia DESC', function(error, result){
        res.render('news/noticias', { noticias: result.rows })
    })
})
     

app.get('/noticia', function(req, res){

    // recuperar id notícia por get
    const id = req.query.id
    db.query('SELECT * FROM noticias ORDER BY id_noticia = $1', [id], function(error,result){
        res.render('news/noticia', { noticia : result.rows[0] })

    })
})

//rota admin
app.get('/admin', function(req, res){
    const autorizado = req.session.autorizado
    if(autorizado == true){
        res.render('admin/form_add_noticia', { autorizado: autorizado })
    } else {
        res.render('admin/login')
    }
})

app.post('/admin/autenticar', function(req, res){
    const { usuario, senha } = req.body
    if( usuario == 'admin' && senha == '1234'){
        req.session.autorizado = true
    }

    res.redirect('/admin')
})

//rota Salvar Noticia[
    app.post('/admin/salvar-noticia', function(req, res){
        // recuperar informações passadas por POST
        const { titulo, conteudo } = req.body
        // console.log(titulo, conteudo)
        db.query('INSERT INTO noticias(titulo, conteudo) VALUES ($1, $2)', [titulo, conteudo], function(error, result){
            res.redirect('/noticias')
        })
    })


//Servidor  rodando, dar um F8 para testar 
app.listen(process.env.PORT || 8080, () => {
    console.log("Servidor rodando na porta 8080 com express")
})