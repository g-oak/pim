    let pecas = ["Ram", "Processador", "HDD", "Cooler"];

    console.log("Lista Original:",pecas)

    let separadoPorTraco=pecas.join(" - ")

    console.log("Join, separa por traço")
    console.log("Lista com Join:",separadoPorTraco)

    let ultimaPeca=pecas.pop()

    console.log("Pop, remove o ultimo item")
    console.log("Item removido:",ultimaPeca)

    let novaPeca=pecas.push("GPU")
    console.log("Push, adiciona ao final da lista")
    console.log("Lista com push:",pecas)

    let primeiraPeca=pecas.shift()
    console.log("Shift, remove o primeiro item")
    console.log("Item removido:",primeiraPeca)

    pecas.unshift("SSD","WC")
    console.log("Unshift, adiciona itens ao inicio da lista")
    console.log("Lista com Unshift:",pecas)