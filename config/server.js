//todos os arquivos de configuração vão aqui 

//Recuperar a biblioteca express
const express = require("express")

//recuperando Biblioteca Session
const session = require('express-session')

//trazer as ações da biblioteca para o meu app
const app = express()

//Definir o EJS como motor de views
app.set("view engine", "ejs")

//setar o diretório de view do EJS
app.set("views", "./app/views")

//Caminho dos arquivos CSS e JS e as IMagens (estáticos)
app.use(express.static("./app/public"))

//config para o metodo POST
app.use(express.urlencoded( {extended: true} ))

//config a biblioteca do express-session
// Configuração do Express Session
app.use(session({
    secret: 'L-S#V5pQ<C/kq%D', //a senha não pode ter aspas e \
    resave: false,
    saveUninitialized: false 
}))



//exportar as configs para a "Função app"
module.exports = app