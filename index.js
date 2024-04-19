let heroi = "Felipe Magal"
let experiencia = 200000

if (experiencia < 1000) {
    experiencia = "Ferro"
} else if (experiencia < 1000 || experiencia < 2000) {
    experiencia = "bronze"
} else if (experiencia < 2001 || experiencia < 5000) {
    experiencia = "Prata"
} else if (experiencia < 6001 || experiencia < 7000) {
    experiencia = "Ouro"
} else if (experiencia < 7001 || experiencia < 8000) {
    experiencia = "Platina"
} else if (experiencia < 8001 || experiencia < 9000) {
    experiencia = "Ascendente"
} else if (experiencia< 9.001 || experiencia < 1000){
    experiencia = "Imortal"
}else if (experiencia >= 10.001){
    experiencia = "Radiante"
}

console.log(`O Herói de nome ${heroi} está no nível de ${experiencia}`)