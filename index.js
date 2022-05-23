//Recuperando as configurações que foram realocadas na parta server  de cofigs
const app = require("./config/server")

//Recuperando banco de Dados
const noticias = require("./mockup")

//rota Home
app.get("/", function(req,res) {
    res.render("home/index")
})

//Rota Noticias
app.get("/noticias", function(req,res) {
   res.render("news/noticias", {noticias:noticias})
})

app.get('/noticia', function(req, res){
    // recuperar id notícia por get
    const id = req.query.id
    res.render('news/noticia', { noticia : noticias[id] })
})


//rota admin
app.get('/admin', function(req, res){
    res.render('admin/form_add_noticia')
})

//Servidor  rodando, dar um F8 para testar 
app.listen(8080, () => {
    console.log("Servidor rodando na porta 8080 com express")
})