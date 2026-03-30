let input = document.querySelector('.entrada')
let trs = document.querySelectorAll('tbody tr')

function calcularIMC() {
 

    const linhas = document.querySelectorAll("tbody tr");

    linhas.forEach(linha => {
        let altura = parseFloat(linha.children[2].textContent);
        let peso = parseFloat(linha.children[3].textContent);

        let imc = peso / (altura * altura);
        imc = imc.toFixed(2);

        linha.children[4].textContent = imc;

        let classificacao = "";

        if (imc < 18.5) {
            classificacao = "Abaixo do peso";
            linha.classList.add("vermelho");
        } else if (imc < 25) {
            classificacao = "Peso normal";
            linha.classList.add("verde");
        } else if (imc < 30) {
            classificacao = "Sobrepeso";
            linha.classList.add("laranja");
        } else if (imc < 35) {
            classificacao = "Obesidade grau I";
            linha.classList.add("laranja");
        } else if (imc < 40) {
            classificacao = "Obesidade grau II";
            linha.classList.add("laranja");
        } else {
            classificacao = "Obesidade grau III";
            linha.classList.add("vermelho");
        }

        linha.children[5].textContent = classificacao;
    });
}

calcularIMC();

input.addEventListener('input', () => {

    trs.forEach(tr => {
        let tds = tr.children
        let texto = input.value.toLowerCase()

        let conteudo = tds[5].textContent.toLowerCase() 

        if (!conteudo.includes(texto)) {
            tr.style.display = 'none'
        } else {
            tr.style.display = 'table-row'
        }
    })

})
