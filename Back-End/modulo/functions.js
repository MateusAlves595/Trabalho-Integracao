/*****************************
 * Objetivo: funções para o projeto integrado
 * Data: 24/03/2023
 * Autor: Mateus Alves da Silva
 * Versão: 1.0
 *****************************/
var listaAlunos = require('./alunos.js')
var listaCursos = require('./cursos.js')
const cursos = require('./cursos.js')
const alunos = require('./alunos.js')

const getCursos = function () {
    let novoJson = {}
    let novoArray = []

    listaCursos.cursos.forEach(function (itemCurso){
        let jsonInfo = {}
        jsonInfo.nome = itemCurso.nome,
        jsonInfo.sigla = itemCurso.sigla,
        jsonInfo.icone = itemCurso.icone,
        jsonInfo.carga = itemCurso.carga

        novoArray.push(jsonInfo)
    })

    novoJson.cursos = novoArray
    return novoJson
    
}

const getAlunosMatriculados = function () {
    let novoJson = {}
    let novoArray = []

    listaAlunos.alunos.forEach( function(itemAluno){
        let jsonAlunos = {}
        jsonAlunos.foto =  itemAluno.foto,
        jsonAlunos.nome = itemAluno.nome,
        jsonAlunos.matricula = itemAluno.matricula
        jsonAlunos.sexo = itemAluno.sexo

        novoArray.push(jsonAlunos)
    })

    novoJson.alunos = novoArray
    return novoJson
}

const getDetalhesAluno = function (matriculaAluno) {
    let novoArray = []
    let novoJson = {}
    let status = false
    let foto
    let nome
    let matricula = matriculaAluno
    let sexo

    listaAlunos.alunos.forEach(function(dadosAluno){
        foto = dadosAluno.foto,
        nome = dadosAluno.nome,
        matricula = dadosAluno.matricula,
        sexo = dadosAluno.sexo

        if(matriculaAluno == matricula)  {
            novoArray.foto = foto,
            novoArray.nome = nome,
            novoArray.matricula = matricula,
            novoArray.sexo = sexo,
            status = true
        }
       
    })
    novoJson.aluno = novoArray

    if (status == true) {
        return novoJson
    } else {
        return false
    }

}

const getAlunosPorCurso = function (cursoEscolhido) {
    let novoJson = {}
    let novoArray = []
    let status = false
    let cursoSigla = cursoEscolhido

    listaAlunos.alunos.forEach(function(aluno){
        aluno.curso.forEach(function(curso){
            if(curso.sigla.toUpperCase() == cursoSigla.toUpperCase()) {
                let jsonAluno = {}
                jsonAluno.foto = aluno.foto,
                jsonAluno.nome = aluno.nome,
                jsonAluno.sexo = aluno.sexo,
                jsonAluno.matricula = aluno.matricula,
                jsonAluno.curso = curso.nome,
                jsonAluno.sigla = curso.sigla
                status = true

                novoArray.push(jsonAluno)
            }
        })
    })
    novoJson.alunos = novoArray

    if(status == true){
        return novoJson
    } else{
         return status
    }
}

const getAlunosPorStatus = function (statusAluno) {
    let novoJson = {}
    let novoArray = []
    let situacao = false
    let status = statusAluno

    listaAlunos.alunos.forEach(function(aluno){
        if(aluno.status.toUpperCase() == status.toUpperCase()) {
                let jsonAluno = {}
                jsonAluno.foto = aluno.foto,
                jsonAluno.nome = aluno.nome,
                jsonAluno.sexo = aluno.sexo,
                jsonAluno.matricula = aluno.matricula,
                jsonAluno.status = aluno.status
                situacao = true

                novoArray.push(jsonAluno)
        }
    })
    novoJson.alunos = novoArray

    if(situacao == true){
        return novoJson
    } else{
        return situacao
    }
}

module.exports = {
    getCursos,
    getAlunosMatriculados,
    getDetalhesAluno,
    getAlunosPorCurso,
    getAlunosPorStatus
}