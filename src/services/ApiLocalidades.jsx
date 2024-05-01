async function ApiEstado() {
    const requisicao = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados/');

    const data = await requisicao.json();
    return data;
}

async function ApiCidadesPorEstado(uf) {
  const requisicao = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/distritos`);

  const data = await requisicao.json();

  return data;
}

async function ApiGetMunicipio(municipio) {
  const requisicao = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/municipios/${municipio}/`);

  const data = await requisicao.json();

  return data;
}



const apiLocalidade = {
  ApiEstado,
  ApiCidadesPorEstado,
  ApiGetMunicipio,
}

export default apiLocalidade;

