//Primeira Callback
function acaoCarro(callback){
    callback();
}
let andar=()=>console.log('O carro está a andar');
let parar=()=>console.log('O carro parou');
acaoCarro(andar);
acaoCarro(parar);

//Testando de outro jeito
function acaoPessoa(callback){
    callback();
}
function andar2() {
    console.log('A pessoa está andando');
}
function acenar() {
    console.log('A pessoa esá acenando');
}
acaoPessoa(andar2);
acaoPessoa(acenar);