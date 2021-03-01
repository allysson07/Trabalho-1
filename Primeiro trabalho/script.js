//Função para cadastrar um funcionário
function  cadFuncionario(nome, email, telefone, departamento, sexo)
{
    funcionarios = document.getElementById("tfuncionarios");
    let tabela = document.getElementById("tfuncionarios");
    let quantLinhas = tabela.rows.length;
    let linha = tabela.insertRow(quantLinhas);
    
    let cellCodigo = linha.insertCell(0);
    let cellNome = linha.insertCell(1);
    let cellEmail = linha.insertCell(2);
    let cellTelefone = linha.insertCell(3);
    let cellDepartamento = linha.insertCell(4);
    let cellSexo = linha.insertCell(5);

    cellCodigo.innerHTML = quantLinhas;
    cellNome.innerHTML = nome;
    cellEmail.innerHTML = email;
    cellTelefone.innerHTML = telefone;
    cellDepartamento.innerHTML = departamento;
    cellSexo.innerHTML = sexo;

    dadosClick();
}

//Preencher o formulário com os dados de um dos funcionários da tabela com um click
function dadosClick() 
{
    for(let i = 0; i < funcionarios.rows.length; i++) 
    {
        funcionarios.rows[i].onclick = function() 
        {
            index = this.rowIndex;
            document.getElementById("Nome").value = funcionarios.rows[index].cells[1].innerText;
            document.getElementById("Email").value = funcionarios.rows[index].cells[2].innerText;
            document.getElementById("Telefone").value = funcionarios.rows[index].cells[3].innerText;
            document.getElementById("Departamento").value = funcionarios.rows[index].cells[4].innerText;
            document.getElementById("Sexo").value = funcionarios.rows[index].cells[5].innerText;
        }
    }
}

//Função para excluir funcionário
function delRegistro() 
{
    for(let i = 0; i < funcionarios.rows.length; i++) 
    {
        if (index == i) 
        {
            funcionarios.deleteRow(index);
            return;
        }
    }
}