//Recuperando as configurações que foram realocadas na parta server  de cofigs
const app = require("./config/server")

//rota Home
app.get("/", function(req,res) {
    res.render("home/index")
})

//Rota Noticias

app.get("/noticias", function(req,res) {
   res.render("news/noticias")
})


app.listen(8080, () => {
    console.log("Servidor rodando na porta 8080 com express")
})