

//Buscar por Região
fetch('https://servicodados.ibge.gov.br/api/v1/localidades/regioes')

.then( (resposta) => resposta.json())
.then((regioes) => {
    regioes.forEach((cadaRegiao) => {
        document.getElementById('regiao').innerHTML += 
        `
        <option value="${cadaRegiao.id}">${cadaRegiao.nome}</option> 
        `;
    });
    
})







//Buscar por Estado

function procurarEstados() {
    
    let regiaoSelecionada = regiao.value
fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${regiaoSelecionada}/estados`)

.then((resposta) =>resposta.json())

.then((estados) => {
    
    estados.map((cadaEstado) => {
        document.getElementById('estado').innerHTML +=
        `
        <option value="${cadaEstado.id}">${cadaEstado.nome}</option>

        `;
    });
});


estado.length=0;
estado.appendChild(new Option('-- Selecione --'))

}



//Buscar por cidades

function procurarCidades() {
   
    let estadoSelecionado = estado.value
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoSelecionado}/municipios`)

    .then((resposta) => resposta.json())

    .then((cidades) => {

        cidades.map((cadaCidade) => {
            document.getElementById('cidade').innerHTML +=
            `
            <option value="${cadaCidade.id}">${cadaCidade.nome}</option>
            `;
        });
    });
    cidade.length=0;
    cidade.appendChild(new Option('-- Selecione --'))
}



