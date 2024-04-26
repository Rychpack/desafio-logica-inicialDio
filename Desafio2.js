

function QueueChallenger(challenger) {
    let printData = GetDataChallenger()
    if (printData <= 10) {
        challenger = "Ferro"
    }
    else if (printData <= 11 || printData <= 20) {
        challenger = "bronze"
    }

    else if (printData <= 21 || printData <= 50) {
        challenger = "Prata"
    }

    else if (printData <= 51 || printData <= 80) {
        challenger = "Ouro"
    }

    else if (printData <= 81 || printData <= 90) {
        challenger = "Diamante"
    }

    else if (printData <= 91 || printData <= 100) {
        challenger = "Lendário"
    }

    else if (printData >= 101) {
        challenger = "Imortal"
    }
    else {
        challenger = "Dados indefinidos"
    }
    return challenger

}

function GetDataChallenger() {
    let userVictory = 150
    let userLose = 20
    let printData = userVictory - userLose
    return printData
}

let printData = GetDataChallenger(55,30)
let challenger = QueueChallenger()



console.log(`O Herói tem de saldo de ${printData} e está no ${challenger}`)


