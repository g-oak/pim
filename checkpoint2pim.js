// Olá, você foi contratado para executar este projeto. É importante que você analise, entenda o pedido do cliente e desenvolva conforme solicitado. Veja abaixo os requisitos do projeto:

// - Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

//       1 - Pipoca – 10 segundos (padrão);
//       2 - Macarrão – 8 segundos (padrão);
//       3 - Carne – 15 segundos (padrão);
//       4 - Feijão – 12 segundos (padrão);
//       5 - Brigadeiro – 8 segundos (padrão); 

// - O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
// - Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
// - Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
// - Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
// - No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".

function funcao(comida, tempoDigitado) 
{
    let tempoComida;

    switch (comida) 
    {
        case "pipoca":
            tempoComida=10;
            microondas(tempoComida,tempoDigitado)
            break;
        case "macarrão":
            tempoComida=8;
            microondas(tempoComida,tempoDigitado)
            break;
        case "carne":
            tempoComida=15;
            microondas(tempoComida,tempoDigitado)
            break;
        case "feijão":
            tempoComida=12;
            microondas(tempoComida,tempoDigitado)
            break;
        case "brigadeiro":
            tempoComida=8;
            microondas(tempoComida,tempoDigitado)
            break;
        default:
            console.log("Prato inexistente")
    }
}

function microondas(tempoComida,tempoDigitado)
{
    if(tempoDigitado < tempoComida)
    {
        console.log("Tempo de preparo insuficiente")
    }
    else if(tempoDigitado > 2*tempoComida && tempoDigitado <= 3*tempoComida)
    {
        console.log("A comida queimou")
    }
    else if(tempoDigitado > 3*tempoComida)
    {
        console.log("Kabumm!")
    }
    else
    {
        console.log("Sua comida está pronta")
    }
}

//Exemlpo de execução do código:
//funcao("pipoca",31);
//funcao("macarrão",17);
//funcao("brigadeiro",8);
//funcao("arroz",15);
