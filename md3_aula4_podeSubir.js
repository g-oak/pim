//function podeSubir (alturaPessoa, estaAcompanhada)

let alturaPessoa = 130
let estaAcompanhada = "nao sei"

if (alturaPessoa >= 140 && alturaPessoa <= 200)
{
    console.log("Pode subir");
}
else if (alturaPessoa < 140 && estaAcompanhada == "sim")
{
    console.log("Pode subir");
}
else if (alturaPessoa > 200)
{
    console.log("Talvez você perda a cabeça");
}
else
{
    console.log("Não pode subir");
}