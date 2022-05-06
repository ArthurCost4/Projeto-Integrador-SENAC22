const form = document.getElementById('form');
var Modal = document.getElementById('modal')


var modal = new bootstrap.Modal(Modal);

Modal.addEventListener('shown.bs.modal', (e) => {
  console.log('ativo')
})
// Modal.addEventListener('hidden.bs.modal', (e)=>limparCampos())


/*================================FUNCOES================================= */
function accDelete(url, id) {
  console.log(id)
  console.log(url)

  axios.delete(`${url}?id=${id}`)
    .then(resp => {
      console.log(resp)
      alert('Registro excluido com sucesso!')
      window.location.reload()
    })
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
    });
}

function editar(url, id) {
  console.log(url, id)


  axios.get(`${url}/buscar?id=${id}`)
    .then(resp => {

      if (url === '/centroscustos') {
        carregarDadosCcusto(resp.data)
      } else if (url === '/relatorio') {
        carregarDadosRelatorio(resp.data)
      }

      if (url === '/centroscustos') {
        carregarDadosCcusto(resp.data)
      } else if (url === '/transacao') {
        carregarDadosTransacoes(resp.data)
      }


    })
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
    });
}



function exibirModal() {
  modal.toggle()
}

function carregarDadosCcusto(cCusto) {
  exibirModal()
  console.log(cCusto)
  form.idCentroCusto.value = cCusto.idCentroCusto
  form.nome.value = cCusto.nomeCentroCusto
  form.idtipo.value = cCusto.idTipo
  form.nome.focus()
  console.log(form)
}


function carregarDadosRelatorio(relatorio) {
  exibirModal()
  form.id.value = relatorio.idTransacao
  form.descricao.value = relatorio.descricaoTransacao
  form.valor.value = relatorio.valorTransacao
  form.tipo.options[tipo.selectedIndex].value = relatorio.idCentroCusto
}
function carregarDadosTransacoes(relatorio) {
  exibirModal()
  form.id.value = relatorio.idTransacao
  form.descricao.value = relatorio.descricaoTransacao
  form.valor.value = relatorio.valorTransacao
  form.tipo.options[tipo.selectedIndex].value = relatorio.idCentroCusto

}



function actionPost(url, dados) {
  axios.post(url, dados)
    .then(res => {
      if (res.status == 200) {
        alert("Dados gravados com sucesso!")
        window.location.reload()
      } else {
        console.log(res.status)
      }
    })
    .catch(erro => {
      console.log(erro)
    });
}

function actionPut(url, dados) {
  console.log(url, dados)
  axios.put(url, dados)
    .then(res => {
      if (res.status == 200) {
        alert("Dados atualizados com sucesso!")
        window.location.reload()
      } else {
        console.log(res.status)
      }
    })
    .catch(erro => {
      console.log(erro)
    });
}

function autUsuario() {
  var form = document.getElementById('form')
  var usuario = { email: form.email.value, senha: form.senha.value }
  axios.post('http://localhost:8182/login', usuario)
    .then(res => {
      if (res.status == 200) {
        window.location.href='/bemvindo'
      } else {
        console.log(res.status)
      }
    })
    .catch(erro => {
      console.log(erro)
    });
}

function postCadastro() {
  var form = document.getElementById('form2')
  var usuario = {nome:form.nome.value, email: form.email.value, senha: form.senha.value, senha2:form.senha2.value }
  axios.post('http://localhost:8182/cadastro', usuario)
    .then(res => {
      if (res.status == 200) {
        alert('Cadastro efetuado com sucesso!')
        window.location.href='/login'
      } else {
        console.log(res.status)
      }
    })
    .catch(erro => {
      console.log(erro)
    });
}

function actionPut(url, dados) {
  axios.put(url, dados)
    .then(res => {
      if (res.status == 200) {
        alert("Dados atualizados com sucesso!")
        window.location.reload()
      } else {
        console.log(res.status)
      }
    })
    .catch(erro => {
      console.log(erro)
    });

}

function gravarTransacao() {
  const form = document.getElementById('form')
  const dados = {
    descricao: form.descricao.value,
    valor: form.valor.value,
    tipo: form.tipo.options[tipo.selectedIndex].value
  }

  if (form.id.value === '') {
    console.log('entro no post')

    actionPost('http://localhost:8182/transacao', dados)
  } else if (parseInt(form.id.value) >= 1) {

    actionPost('http://localhost:8182/transacao', dados)
  } else if (parseInt(form.id.value) >= 1) {
    dados.id = form.id.value

    console.log('entro no put')
    actionPut('http://localhost:8182/transacao', dados)
  }
}

function gravarCcusto() {
  let dados = {
    nome: form.nome.value,
    idtipo: form.idtipo.value
  }

  if (form.idCentroCusto.value == '') {
    actionPost("http://localhost:8182/centroscustos", dados)
  } else if (parseInt(form.idCentroCusto.value) > 0) {
    dados.idCentroCusto = form.idCentroCusto.value
    actionPut("http://localhost:8182/centroscustos", dados)
  }
}