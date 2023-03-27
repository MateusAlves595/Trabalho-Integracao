/*********************
 * Objetivo: EndPoint das funções
 * Data: 27/03/2023
 * Autor: Mateus Alves da Silva
 * Versão: 1.0
 *********************/
const express = require('express')
const cors =require('cors')
const bodyParer = require('body-parser')

const app = express()

app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*')

    //Permite definir quais métodos poderão ser utilizados nas requisições da API
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')

    app.use(cors())

    next()
})

const funcoes = require('./modulo/functions.js')

app.get('/v1/lion-school/cursos', cors(), async function(request, response, next){

    let cursos = funcoes.getCursos()

    if(cursos){
        response.status(200)
        response.json(cursos)
    } else{
        response.status(500)
    }
})

app.listen(8080, function(){
    console.log('servidor aguardando requisições na porta 8080.')
})