const APIKey = '412f6fc81b4ae1fc4163434f97f003b0';

const urlPrevisao = (cidadeNome) => `https://api.openweathermap.org/data/2.5/weather?q=${cidadeNome}&units=metric&appid=${APIKey}`;

const previsaoMunicipio = async (municipio) => {

    const resposta = await fetch(urlPrevisao(municipio));
    const data = await resposta.json();
    return data;
}

const apiMetereologia = {
    previsaoMunicipio,
}

export default apiMetereologia;