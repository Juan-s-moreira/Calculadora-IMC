
const calcular = document.getElementById('calcular');


function imc(){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('result');
    
    if (nome.value !== '' && altura !== '' && peso !== ''){
        
        const valorIMC = Math.floor(peso / (altura * altura));

        let classificacao = '';

        if (valorIMC < 18.5){
            classificacao = "Abaixo do peso.";
        } else if(valorIMC < 25){
            classificacao = 'com peso ideal. Parabens!!';
        } else if(valorIMC < 30){
            classificacao = 'acima do peso';
        } else if ( valorIMC < 35){
            classificacao = 'com obesidade grau 1';
        } else if(valorIMC < 40){
            classificacao = 'com obesidade grau 2';
        } else{
            classificacao = 'IMENSO, QUE ISSO';
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;
    } else{
        resultado.textContent = ''
    }

}

calcular.addEventListener('click', imc);