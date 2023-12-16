<h1>Buscador de Imagens</h1>

<h2>Descrição do Projeto</h2>
<p>Este projeto consiste em uma página web que utiliza a API do Unsplash para realizar buscas de imagens com base em palavras-chave fornecidas pelo usuário. A interface simples permite aos usuários digitar termos de busca e visualizar os resultados em forma de miniaturas.</p>

![image](https://github.com/Jeanpk12/Buscador-imagem/assets/122842874/3a6ff88d-3388-4847-95f4-4740ccd38b76)

<a href="https://jeanpk12.github.io/Buscador-imagem/" target="_blank">GitHub Pages</a>

<h2>Estrutura do Projeto</h2>
<p>O projeto está estruturado em HTML, CSS e JavaScript. Aqui está uma breve visão geral dos principais arquivos e diretórios:</p>
<ul>
  <li>index.html: Contém a estrutura HTML da página, incluindo o formulário de pesquisa, área de resultados e botão "Outros resultados".</li>
  <li>src/css/reset.css: Arquivo CSS que aplica um estilo de reset para garantir uma consistência na aparência em diferentes navegadores.</li>
  <li>src/css/style.css: Arquivo CSS que contém estilos específicos para a aparência da página.</li>
  <li>src/JavaScript/script.js: Arquivo JavaScript que manipula a interação do usuário, faz chamadas à API do Unsplash e exibe os resultados dinamicamente na página.</li>
</ul>

<h2>Como Usar</h2>
<ol>
  <li>Abra o arquivo index.html em um navegador web.</li>
  <li>Digite um termo de busca na caixa de texto fornecida.</li>
  <li>Pressione o botão "Buscar" para obter os resultados da pesquisa.</li>
  <li>Os resultados serão exibidos na área designada na forma de miniaturas. Você pode clicar no botão "Outros resultados" para carregar mais imagens.</li>
</ol>

<h2>Configuração da API</h2>
<p>O projeto utiliza a API do Unsplash para buscar imagens. Certifique-se de substituir a variável apiKey no arquivo script.js com sua chave de API válida do Unsplash.</p>

```
const apiKey ='SuaChaveDeAPI';

```

<h2>Observações</h2>
<ul>
  <li>Este projeto é uma aplicação simples e serve como um ponto de partida para incorporar a funcionalidade de busca de imagens em seus próprios projetos.</li>
  <li>Certifique-se de respeitar os termos de serviço da API do Unsplash ao utilizar suas imagens.</li>
  <li>Para obter uma chave de API do Unsplash, registre-se em <a href="https://unsplash.com/developers" target="_blank">Unsplash Developer</a> e crie uma aplicação para obter sua chave.</li>
</ul>

<p>Sinta-se à vontade para explorar, modificar e adaptar este projeto de acordo com suas necessidades!</p>
