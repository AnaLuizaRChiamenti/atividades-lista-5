
function exercicio1() {

    let idade = 0;
    let aluno = 0;
    let soma = 0;

    while (idade != 999) {
        idade = prompt('Digite a idade do aluno: ')

        if (idade !== null) {
            idade = Number(idade)
        }
        if (!idade) {
            document.write("Valor invalido.")
            return;
        } else {
            if (idade != 999) {
                soma += idade;
                aluno++
            }
        }
    }
    let media = soma / aluno;
    document.write(`A média de idade do grupe é ${media.toFixed(2)}!<br>`)
    document.write(`Quantidade de alunos ${aluno}!`)
}

/* 2. Desenvolva um aplicativo que leia o salário
e o sexo de vários funcionários. 
No final, mostre o total de salários pagos aos homens 
e
o total pago às mulheres.
O programa vai perguntar ao usuário 
se ele quer continuar ou não sempre que ler os dados de um
funcionário. */


function exercicio2() {

    let salarioMulher = 0;
    let salarioHomem = 0;
    let pergunta;

    do {
        let sexo = prompt("Qual seu genero? F para feminino, M para masculino")

        if (!sexo) {
            alert("Valor digitado invalido.")
            return;
        }


        let salario = Number(prompt("Digite seu salario: "))

        if (!salario) {
            alert("ERRO!! O certo é assim bobos: Ex: 1200.30");
            return;
        }
        switch (sexo) {
            case 'F': {
                salarioMulher += salario;
                break;
            }
            case 'M': {
                salarioHomem += salario;
                break;
            }
            default:
                document.write("ERRO")
        } pergunta = Number(prompt("Quer continuar? 1 = sim, 0 para não"))
    } while (pergunta)

    document.write(`O total de salarios pagos a mulheres é R$${salarioMulher.toFixed(2)} reais <br> `)
    document.write(`O total de salarios pagos a homens é R$${salarioHomem.toFixed(2)} reais `)
}

/* 3. Crie um algoritmo 
que leia o valor inicial da contagem, 
o valor final e
o incremento, 
mostrando em seguida todos os valores no intervalo:
Ex:
Digite o primeiro Valor: 3
Digite o último Valor: 10
Digite o incremento: 2
Contagem: 3 5 7 9 Acabou! */

function exercicio3(){
    let valorInicial = Number(prompt("Digite o valor incial: "))
    if(!valorInicial){
        document.write("Valor invalido. Tente novamente!")
        return;
    }

    let valorFinal = Number(prompt("Digite o valor final: "))
    if(!valorFinal){
        document.write("Valor invalido. Tente novamente!")
        return;
    }

    let incremento = Number(prompt("Digite o valor do intervalo da contagem: "))
    if(!incremento){
        document.write("Valor invalido. Tente novamente!")
        return;
    }

    while(valorInicial <= valorFinal){
            if(valorInicial >= valorFinal){
                document.write(" Acabou!")
            } else {
                document.write(` ${valorInicial}`)
            }
            valorInicial = valorInicial + incremento
    }
}

/* 4. Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar
descontos para todos, mas especialmente para mulheres. Faça um
programa que leia nome, sexo e o valor das compras do cliente e
calcule o preço com desconto. Sabendo que:
a. Homens ganham 5% de desconto b. Mulheres ganham 13% de desconto */



function exercicio4(){
    let nomeCliente = prompt("Digite o nome do cliente: ")
    if(!nomeCliente){
        document.write("Valor digitado invalido!")
        return;
    }

    let sexo = prompt("Qual genero? F para feminino, M para masculino")
    if(!sexo){
        document.write("Valor digitado invalido!")
        return;
    }

    sexo = (sexo).toUpperCase()

    let valorCompra = prompt("Digite o valor da compra do cliente: ")
    if(valorCompra !== null){
        valorCompra = Number(valorCompra.replace('.', '').replace('.', ','))
    }
    if(!valorCompra){
        document.write("Valor digitado invalido!")
        return;
    }

    let descontoMulheres = ((13 / 100) * valorCompra)

    let descontoHomens = ((5 / 100) * valorCompra)

    switch (sexo) {
        case 'F': {
            valorCompra -= descontoMulheres;
            document.write(`O valor da compra da cliente ${nomeCliente} com desconto de 13% fica R$${valorCompra}`)
            break;
        }
        case 'M': {
            valorCompra -= descontoHomens;
            document.write(`O valor da compra do cliente ${nomeCliente} com desconto de 5% fica R$${valorCompra}`)
            break;
        }
        default:
            document.write("ERRO")
    }

    
}

/* 5. Faça um algoritmo que pergunte a distância que um passageiro
deseja percorrer em Km. Calcule o preço da passagem, cobrando
R$0.50 por Km para viagens até 200Km e R$0.45 para viagens mais
longas. */

function exercicio5(){
    let percorrerKm = prompt("Quando deseja percorrer em km")
    if (percorrerKm !== null){
        percorrerKm = Number(percorrerKm.replace('.', '.').replace('.', ','))
    }
    if (!percorrerKm){
        document.write("Valor digitado invalido. Tente novamente!")
    }

    if (percorrerKm <= 200) {
        let calculoPassagem  = percorrerKm * 0.50;
        document.write(`Os km desejados são: ${percorrerKm}km <br>`)
        document.write(`O valor da passagem sera  R$${calculoPassagem} reais.`)
    } else {
        let calculoPassagem = percorrerKm * 0.45
        document.write(`Os km desejados são: ${percorrerKm}km <br>`)
        document.write(`O valor da passagem sera R$${calculoPassagem} reais.`)
    }

}


/* 6. Faça um programa que leia a largura e o comprimento de um
terreno retangular, calculando e mostrando a sua área em m2. O
programa também deve mostrar a classificação desse terreno, de
acordo com a lista abaixo:
Abaixo de 100m2 = TERRENO POPULAR
Entre 100m2 e 500m2 = TERRENO MASTER
Acima de 500m2 = TERRENO VIP */

function exercicio6(){
    let larguraTerreno = Number(prompt("Digite a largura do terrero: "))
    if (!larguraTerreno) {
        document.write("Valor digitado invalido. Tente novamente!")
        return;
    }

    let comprimentoTerreno = Number(prompt("Digite o comprimento do terreno: "))
    if (!comprimentoTerreno) {
        document.write("Valor digitado invalido. Tente novamente!")
        return;
    }

    let calculaM2 = (larguraTerreno * comprimentoTerreno)
    if(calculaM2 < 100){
        document.write("Terreno popular.")
    } else if (calculaM2 >= 100 && calculaM2 <= 500) {
        document.write("Terreno master.")
    } else {
        document.write("Terreno VIP.")
    }
}
