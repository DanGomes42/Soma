function dinheiro() {
    const numeroDeMeses = 12
    const status = {
        ganhos: 0,
        gastos: 0
    }

    for (let index = 0; index < numeroDeMeses; index++) {
        status.ganhos += Number(prompt(`Escreva os ganhos do ${index + 1}° mês`))
        status.gastos += Number(prompt(`Escreva os gastos do ${index + 1}° mês`))
    }

    document.write(`Ganhos do ano: ${status.ganhos} <br>`)
    document.write(`Gastos do ano: ${status.gastos} <br>`)

    if (status.ganhos > status.gastos) {
        document.write('A empresa teve lucro :D')
        return
    }

    if (status.ganhos < status.gastos) {
        document.write('A empresa teve prejuízo D:')
        return
    }
}