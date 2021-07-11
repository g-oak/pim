function Restaurante(nome,cardapio) {
    this.nome=nome;
    this.cardapio=cardapio;
}

let restaurante= {
    nome: "Restaurante do Goak",
    cardapio: ["Carne Assada", "Frango Assado", "Peixe Grelhado", "Sobremesa do Dia"],
    entrada: function() {return "Bem-vindo ao "+restaurante.nome+", este é o cardápio de hoje: "+restaurante.cardapio.join(", ")}
}

console.log(restaurante.entrada());