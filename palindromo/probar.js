"use strict";

var mostrarTodos = true;

var funcionAProbar = require('./funcion.js')

var fs=require('fs');

var txtPrueba = fs.readFileSync('pruebas.txt',{encoding:'utf8'});

var lineas = txtPrueba.split(/\r?\n/);

var cantidadPruebas = 0;
var cantidadErrores = 0;

lineas.forEach(function(linea){
    cantidadPruebas++;
    var datos = linea.split('=')
    var obtenido = funcionAProbar.apply(null, datos[1].split(';'));
    var esperado = datos[0]=='si';
    if(obtenido != esperado){
        cantidadErrores++;
        console.log('Error en',datos[1],'se obtuvo',obtenido,'y se esperaba',esperado);
    }else{
        if(mostrarTodos){
            console.log('Ok en',linea);
        }
    }
});

console.log('Cantidad de pruebas',cantidadPruebas)
console.log('Cantidad de errores',cantidadErrores)