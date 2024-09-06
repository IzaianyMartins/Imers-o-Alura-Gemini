function buscar() {
    // **Função buscar:**
    // Realiza uma pesquisa por um número específico em um conjunto de dados.
    // A função obtém o valor a ser pesquisado de um campo de entrada,
    // procura por esse valor nos dados e exibe os resultados correspondentes
    // em uma seção HTML específica.

     // Obtém o elemento de entrada de texto (input) da página.
    let input = document.querySelector("input[type='text']");

    // Converte o valor do input para um número inteiro, para facilitar comparações.
    let numeroPesquisado = parseInt(input.value);
  
     // **Obtendo a seção de resultados:**
    // Obtém a referência para a seção HTML onde os resultados da pesquisa serão exibidos.
    // Assume-se que essa seção possui um ID com o valor "resultados-pesquisa".
    let section = document.getElementById("resultados-pesquisa"); 

     // Inicializa uma string vazia para armazenar os resultados da pesquisa.
    let resultados = "";
  
    // **Iterando sobre os dados e construindo a saída:**
    // Percorre cada elemento (dado) do array 'dados' (não mostrado no código).
    // Para cada dado, verifica se o número do dado corresponde ao número pesquisado.
    // Se houver correspondência, cria uma nova div com as informações do dado
    // e adiciona essa div à string 'resultados'.

    for (let dado of dados) {
      if (dado.numero === numeroPesquisado) { 
        resultados += `
          <div class="item-resultado">
            <h2>${dado.numero}</h2>
            <p class="descricao-meta">${dado.frase}</p>
            <p class="descricao-meta">${dado.texto}</p>
          </div>
        `;
      }
    }
   // **Atualizando a interface:**
    // Atribui o conteúdo da string 'resultados' ao HTML da seção,
    // substituindo o conteúdo anterior pelos resultados da pesquisa.
    // Dessa forma, a interface é atualizada dinamicamente para mostrar os resultados.
    section.innerHTML = resultados;
  }