//Recuperando Bacno de dados para a aplicação

const { Client } = require('pg')

const client = new Client({
    connectionString: 'postgres://tucupieuqlpalq:027661f40895c1fbb2bcaf01999e247df3e0a60639d0277bdcbcae0779c3cba6@ec2-54-204-56-171.compute-1.amazonaws.com:5432/d4dvtmskv9r988',
    ssl: { rejectUnauthorized: false }
})

client.connect()

module.exports = client