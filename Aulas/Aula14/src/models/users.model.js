const mongoose = require('mongoose');
const alunosCollection = 'alunos';
const userSchema = new mongoose.Schema({
    nome: String,
    sobrenome: String,
    idade: String,
    dni:{
        type: String,
        unique: true,
        required: true
    },
    curso: String,
    nota: Number,
    email:{
        type: String,
        unique: true,
        required: true
    }
})

module.exports = mongoose.model(alunosCollection, userSchema)