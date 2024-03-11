class Despesa {
    constructor(ano, mes, dia, tipo, descricao, valor) {
    this.ano ano
    this.mes mes
    this.dia = dia
    this.tipo = tipo
    this.descricao descricao
    this.valor = valor
    }
    }
    validarDados() {
    for(let i in this) {
    if(this[i] == undefined || this[i] == || this[i] == null) {
    return false
    }
    }
    return true
    }

    class Bd {
        constructor() {
        Let id = localStorage.getItem('id')
        if(id === null) {
        localStorage.setItem('id', 0)
        }
        }
        getProximoId() {
        Let proximoId = localStorage.getItem('id')
        return parseInt(proximoId) + 1
        }
        gravar(d) {
        Let id = this.getProximoId()
        localStorage.setItem(id, JSON.stringify(d))
        localStorage.setItem('id', id)
        }
    
        recuperar TodosRegistros() {
            //array de despesas
            Let despesas = Array()
            Let id = localStorage.getItem('id')
            //recuperar todas as despesas cadastradas em localStorage for(let i = 1; i <= id; i++) {
            //recuperar a despesa
            Let despesa = JSON.parse(localStorage.getItem(i))
            //existe a possibilidade de haver indices que foram pulados/removidos
            //nestes casos nós vamos pular esses indices
            if(despesa === null) {
            continue
            }
            despesa.id = i
            despesas.push(despesa)
            }
            return despesas
            }

            pesquisar (despesa) {
                Let despesasFiltradas = Array()
                despesas Filtradas = this.recuperar Todos Registros()
                console.log(despesas Filtradas);
                console.log(despesa)
                //ano
                if(despesa.ano != ''){
                console.log("filtro de ano");
                despesas Filtradas despesas Filtradas.filter(d => d.ano despesa.ano)
                }
                //mes
                if(despesa.mes != ''){
                console.log("filtro de mes");
                despesas Filtradas despesas Filtradas.filter(d => d.mes despesa.mes)
                }
                //dia
                if(despesa.dia != ''){
                console.log("filtro de dia");
                }
                despesas Filtradas despesas Filtradas.filter(d => d.dia despesa.dia)
            
                //tipo
if(despesa.tipo != ''){
    console.log("filtro de tipo");
    despesas Filtradas despesas Filtradas.filter(d => d.tipo == despesa.tipo)
    }
    //descricao
    if(despesa.descricao != '') {
    console.log("filtro de descricao");
    despesas Filtradas despesasFiltradas.filter(d => d.descricao == despesa.descricao)
    }
    //valor
    if(despesa.valor != ''){
    console.log("filtro de valor");
    despesas Filtradas despesasFiltradas.filter(d => d.valor == despesa.valor)
    }
    return despesas Filtradas
    }
    
    remover (id) {
        localStorage.removeItem(id)
        }
        
        Let bd = new Bd()
        function cadastrarDespesas() {
        Let ano = document.getElementById('ano')
        Let mes = document.getElementById('mes')
        Let dia = document.getElementById('dia')
        Let tipo = document.getElementById('tipo')
        Let descricao = document.getElementById('descricao')
        Let valor = document.getElementById('valor')
        Let despesa = new Despesa (
        ano.value,
        mes.value,
        dia.value,
        tipo.value,
        descricao.value,
        valor.value
        )

        if(despesa.validarDados()) {
            bd.gravar (despesa)
            document.getElementById('modal_titulo').innerHTML = 'Registro inserido com sucesso'
            document.getElementById('modal_titulo_div').className = 'modal-header text-success' document.getElementById('modal_conteudo').innerHTML = 'Despesa foi cadastrada com sucesso!'
            document.getElementById('modal_btn').innerHTML = 'Voltar' document.getElementById('modal_btn').className = 'btn btn-success'
            //dialog de sucesso
            $('#modalRegistraDespesa').modal('show')
            ano.value =
            mes.value =
            dia.value =
            tipo.value =
            descricao.value = "
            valor.value =''

        } else {
            document.getElementById('modal_titulo').innerHTML = 'Erro na inclusão do registro' document.getElementById('modal_titulo_div').className = 'modal-header text-danger'
            document.getElementById('modal_conteudo').innerHTML = 'Erro na gravação, verifique se todos os camp'
            document.getElementById('modal_btn').innerHTML = 'Voltar e corrigir' document.getElementById('modal_btn').className = 'btn btn-danger'
            //dialog de erro
            $('#modalRegistraDespesa').modal('show')
            }
            }
            function carregalistaDespesas (despesas = Array(), filtro = false) 
            if(despesas.length == 0 && filtro == false){
            despesas bd.recuperar Todos Registros()

            /*
<tr>
<td>15/03/2018</td>
<td>Alimentação</td>
<td>Compras do mês</td>
<td>444.75</td>
</tr>
*/
Let listaDespesas = document.getElementById("listaDespesas") listaDespesas.innerHTML =
despesas.forEach(function(d){
//Criando a linha (tr)
var linha = listaDespesas.insertRow();

//Criando as colunas (td)
linha.insertCell(0).innerHTML = ${d.dia}/${d.mes}/${d.ano}
//Ajustar o tipo
switch(d.tipo) {
case '1': d.tipo = 'portugues'
break
case '2': d.tipo = 'fisica'
break
case '3': d.tipo = 'recreio'
break
case '4': d.tipo = 'historia'
break
case '5': d.tipo = 'ingles'
break
}

linha.insertCell(1).innerHTML = d.tipo

linha.insertCell(2).innerHTML = d.descricao

linha.insertCell(3).innerHTML = d.valor


//Criar o botão de exclusão
let btn = document.createElement('button')

btn.className = 'btn btn-danger'

btn.innerHTML = '<i class="fa fa-times" ></i>'
btn.id="id_despesa_${d.id}"

btn.onclick = function(){

let id = this.id.replace('id_despesa_','')
//alert(id)

bd.remover(id)

window.location.reload
}
linha.insertCell(4).append(btn)

console.log(d)
})
}
function pesquisarDespesas(){
let ano = document.getElementById("ano").value
let mes document getElementById("mes") value

let dia document.getElementById("dia").value

let tipo document.getElementById("tipo").value

let descricao = document.getElementById("descricao").value

let valor = document.getElementById("valor").value

let despesa = new Despesa (ano, mes, dia, tipo, descricao, valor)

let despesas

bd.pesquisar (despesa)

this.carregalistaDespesas (despesas, true)

}