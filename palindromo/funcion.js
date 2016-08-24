function palindromo(texto){
    return texto.split('').every(function(letra, posicion){
        return letra==texto[texto.length-posicion-1];
    })
}

module.exports = palindromo;