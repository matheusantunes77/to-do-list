
/* Lista de tarefas
[x]Saber quando o botão foi clicado
[x]Pegar o texto dentro do input.
[]Colocar o texto na tela.
*/

const botao = document.querySelector('.adicionar') // capturar o botão
function adicionarTarefa(){
    let valorDoInput = document.querySelector('input').value // capturar o valor do input
    let li = document.createElement("li") // criar uma variável, para a criação de uma li
    li.innerHTML = `${valorDoInput} <span onclick = "deletarTarefa(this)">&#9995</span>`
    document.querySelector("ul").appendChild(li)
    /*
    document: Refere-se ao objeto do DOM (Document Object Model), que representa a estrutura do documento HTML da página.
    querySelector("ul"): Esse método busca o primeiro elemento que corresponde ao seletor CSS fornecido, no caso, o <ul>. Ou seja, ele está selecionando o primeiro elemento <ul> na página.
    */
    document.querySelector('input').value = ''
}

function deletarTarefa(li){
    li.parentElement.remove() // remover a li.
}

botao.addEventListener('click',adicionarTarefa)
