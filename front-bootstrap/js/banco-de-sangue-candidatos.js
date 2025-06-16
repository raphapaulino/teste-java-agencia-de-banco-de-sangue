    async function carregarCandidatos() {
      try {
        const resp = await fetch('http://localhost:8080/api/candidatos/todos');
        const candidatos = await resp.json();

        const tbody = document.getElementById('tabelaCandidatos');
        tbody.innerHTML = candidatos.map(c => `
          <tr>
            <td>${c.nome}</td>
            <td>${c.cpf}</td>
            <td>${c.data_nasc || '-'}</td>
            <td>${c.sexo}</td>
            <td>${c.email}</td>
            <td>${c.estado}</td>
            <td>${c.tipo_sanguineo}</td>
          </tr>
        `).join('');

      } catch (erro) {
        console.error('Erro ao carregar candidatos:', erro);
      }
    }

    carregarCandidatos();