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

const apiLocalidade = {
  ApiEstado,
  ApiCidadesPorEstado,
}

export default apiLocalidade;
