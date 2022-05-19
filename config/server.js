//todos os arquivos de configuração vão aqui 

//Recuperar a biblioteca express
const express = require("express")

//trazer as ações da biblioteca para o meu app
const app = express()

//Definir o EJS como motor de views
app.set("view engine", "ejs")

//setar o diretório de view do EJS
app.set("views", "./app/views")

//Caminho dos arquivos CSS e JS e as IMagens (estáticos)
app.use(express.static("./app/public"))

//exportar as configs para a "Função app"
module.exports = app