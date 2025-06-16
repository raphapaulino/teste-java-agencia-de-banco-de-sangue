const doadores = [];
const urlBase = 'http://localhost:8080/api/candidatos';
const BACKEND_DEBUG = false;

function getBackendDebug() {
  return BACKEND_DEBUG;
}

async function carregarEstatisticas() {
  try {
    const resp = await fetch(`${urlBase}/estatisticas-para-os-graficos`);
    const data = await resp.json();

    if (data.candidatosPorEstado && Object.keys(data.candidatosPorEstado).length === 0) return;

    if (getBackendDebug()) {
      document.getElementById('resultados').innerHTML = `<pre style="max-height: 400px;">${JSON.stringify(data, null, 2)}</pre>`;
    }

    if (data.candidatosPorEstado) {
      renderGraficoEstados(data.candidatosPorEstado);
    }

    if (data.imcMedioPorFaixaEtaria) {
      renderGraficoImcFaixaEtaria(data.imcMedioPorFaixaEtaria);
    }

    if (data.percentualObesosPorSexo) {
      renderGraficoObesosPorSexo(data.percentualObesosPorSexo);
    }

    if (data.mediaIdadePorTipoSanguineo) {
      renderGraficoIdadePorTipoSanguineo(data.mediaIdadePorTipoSanguineo);
    }
    
    if (data.doadoresPorReceptor) {
      renderGraficoDoadoresPorReceptor(data.doadoresPorReceptor);
    }
  } catch (erro) {
    console.error('Erro ao carregar candidatos:', erro);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  carregarEstatisticas();
});

document.getElementById('uploadForm').addEventListener('submit', async function (e) {
  e.preventDefault();
  const file = document.getElementById('jsonFile').files[0];
  const text = await file.text();
  const json = JSON.parse(text);

  try {
    await fetch(`${urlBase}/importar`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(json)
    }).then(() => location.reload());
  } catch (erro) {
    console.error('Erro ao importar doadores:', erro);
  }
});

function renderGraficoEstados(estados) {
  const quantidadeDeDoadores = Object.keys(estados);
  const siglasDosEstados = Object.values(estados);

  const options = {
    series: [
      {
        name: 'Candidatos',
        data: siglasDosEstados
      }
    ],
    chart: {
      type: 'bar'
    },
    xaxis: {
      categories: quantidadeDeDoadores,
      title: {
        text: 'Estados'
      }
    },
    yaxis: {
      title: {
        text: 'Candidatos (quantidade)',
        style: {
          fontSize: '12px',
          fontWeight: 'bold',
          color: '#263238'
        }
      },
      min: 0
    }
  };
  new ApexCharts(document.querySelector("#chartEstados"), options).render();
}

function renderGraficoImcFaixaEtaria(imcs) {
  const options = {
    series: [
      {
        name: 'IMC Médio',
        data: Object.values(imcs)
      }
    ],
    chart: {
      type: 'bar',
      height: 350
    },
    title: {
      text: 'IMC Médio por Faixa Etária',
      align: 'center'
    },
    xaxis: {
      categories: Object.keys(imcs),
      title: {
        text: 'Faixa Etária'
      }
    },
    yaxis: {
      title: {
        text: 'IMC',
        style: {
          fontSize: '12px',
          fontWeight: 'bold',
          color: '#263238'
        }
      },
      min: 0
    },
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    tooltip: {
      y: {
        formatter: val => val.toFixed(2)
      }
    },
    dataLabels: {
      enabled: true,
      formatter: val => val.toFixed(2)
    }
  };
  new ApexCharts(document.querySelector("#chartImcFaixa"), options).render();
}

function renderGraficoObesosPorSexo(obesos) {
  const categorias = Object.keys(obesos);
  const valores = Object.values(obesos).map(v => parseFloat(v.toFixed(2)));

  const options = {
    chart: {
      type: 'pie',
      height: 350
    },
    title: {
      text: 'Percentual de Obesos por Sexo',
      align: 'center'
    },
    labels: categorias,
    series: valores,
    tooltip: {
      y: {
        formatter: val => `${val.toFixed(2)}%`
      }
    },
    dataLabels: {
      formatter: val => `${val.toFixed(1)}%`
    }
  };
  new ApexCharts(document.querySelector("#chartObesosSexo"), options).render();
}

function renderGraficoIdadePorTipoSanguineo(dados) {
  const tipos = Object.keys(dados);
  const valores = Object.values(dados).map(v => parseFloat(v.toFixed(1)));

  const options = {
    series: [
      {
        name: 'Média de Idade',
        data: valores
      }
    ],
    chart: {
      type: 'bar',
      height: 350
    },
    title: {
      text: 'Média de Idade por Tipo Sanguíneo',
      align: 'center'
    },
    xaxis: {
      categories: tipos,
      title: {
        text: 'Tipo Sanguíneo'
      }
    },
    yaxis: {
      title: {
        text: 'Idade (anos)'
      }
    },
    dataLabels: {
      // enabled: true,
      formatter: val => `${val.toFixed(1)}`
    },
    tooltip: {
      y: {
        formatter: val => `${val.toFixed(1)} anos`
      }
    }
  };
  new ApexCharts(document.querySelector("#chartIdadeTipoSanguineo"), options).render();
}

function renderGraficoDoadoresPorReceptor(dados) {
  const tipos = Object.keys(dados);
  const quantidades = Object.values(dados);

  const options = {
    chart: {
      type: 'bar',
      height: 350
    },
    title: {
      text: 'Doadores Possíveis por Tipo Sanguíneo Receptor',
      align: 'center'
    },
    series: [{
      name: 'Doadores',
      data: quantidades
    }],
    xaxis: {
      categories: tipos,
      title: {
        text: 'Tipo Sanguíneo Receptor'
      }
    },
    yaxis: {
      title: {
        text: 'Quantidade de Doadores'
      }
    },
    dataLabels: {
      enabled: true
    },
    tooltip: {
      y: {
        formatter: val => `${val} doadores`
      }
    }
  };
  new ApexCharts(document.querySelector("#chartDoadoresPorReceptor"), options).render();
}