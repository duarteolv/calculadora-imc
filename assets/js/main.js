const form = document.querySelector('.form');

function setResultado (msg, isValid){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';
    const p = criarP();
    p.innerHTML = msg;
    resultado.appendChild(p)
    if(isValid === true){
        p.classList.add('p-resultado');
    } else if (isValid === false){
        p.classList.add('p-resultado-falso');
    }
}

function criarP(){
    const p = document.createElement('p');
    return p;
}

function calculoImc (p, a){
        const i = p / a ** 2;
        return i.toFixed(2);
}

function verificarImc(imc){
    const nivelImc = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade Grau 1', 'Obesidade Grau 2', 'Obesidade Grau 3'];
    
    if( imc >= 39.9) return nivelImc [5];

    if( imc >= 34.9) return nivelImc [4];

    if( imc >= 29.9) return nivelImc [3];
    
    if( imc >= 24.9) return nivelImc [2];

    if( imc >= 18.5) return nivelImc [1];

    if (imc < 18.5) return nivelImc [0];
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    if (!peso){
        setResultado('Isso não são números', false);
        return;
    }
    if (!altura){
        setResultado('Isso não são números', false);
        return;
    }
    const imc = calculoImc(peso,altura);
    const nivel = verificarImc(imc);

    const msg = `Seu IMC: ${imc}, Você está com: ${nivel}`;
    setResultado(msg, true);
});