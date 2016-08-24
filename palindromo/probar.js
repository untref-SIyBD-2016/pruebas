"use strict";

var mostrarTodos = true;

var funcionAProbar = require('./funcion.js')

var fs=require('fs');

var txtPrueba = fs.readFileSync('pruebas.txt',{encoding:'utf8'});

var lineas = txtPrueba.split(/\r?\n/);

var cantidadPruebas = 0;
var cantidadErrores = 0;

lineas.forEach(function(linea){
    var datos = linea.split(';');
    if(linea.trim() && datos.length){
        cantidadPruebas++;
        var parametros = datos.slice(1);
        if(parametros.length != funcionAProbar.length){
            console.log("ERROR en el archivo de casos de prueba se esperaban",funcionAProbar.length,'parámetros y hay',parametros.length,'en la línea',linea)
            return false;
        }
        var obtenido = funcionAProbar.apply(null, parametros);
        var esperado = datos[0]=='si';
        if(obtenido != esperado){
            cantidadErrores++;
            console.log('Error en',datos[1],'se obtuvo',obtenido,'y se esperaba',esperado);
        }else{
            if(mostrarTodos){
                console.log('Ok en',linea);
            }
        }
    }
});

console.log('Cantidad de pruebas',cantidadPruebas)
console.log('Cantidad de errores',cantidadErrores)