# LinkapiFrontendTest

Projeto idealizado como teste técnico para a vaga de Desenvolvedor Front-end da Link Api.


## Para rodar localmente
* Necessário nodeJS 10+ e npm 5+.
* Vá até a pasta raíz do projeto e use: npm install(esse comando instala as dependências do projeto)
* Após concluir a instalação das dependências com sucesso, rode: npm start;
* Vá até o browser e use o endereço http://localhost:4200


## Disponível em
https://nethanos.github.io/link-api-frontend-test/


## Tecnologias Utilizadas
* Angular 9
* Bootstrap 4
* Node 12.6
* npm 6.4

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
## Funções implementadas
* Criação de perfil e salvamento em local storage
* Listagem de filmes a partir de API fornecida
* Favoritar ou desfavoritar filme pela listagem
* View descritiva de filme selecionado
* Favoritar ou desfavoritar filme selecionado

## Observações
Inicialmente implementei um backend, acreditando que era necessário para salvar o perfil, mas a dúvida foi tirada com a HR Analyst.
De qualquer modo, deixei o service disponível dentro do projeto, o repositório do back-end está abaixo:
https://github.com/Nethanos/linkapi-movies-minimal-backend

Disponível na nuvem também a partir do heroku: 
https://linkapi-movie-list-backend.herokuapp.com/movies

Encontrei um pequeno problema na API fornecida; o objeto que representa o filme Pulp Fiction está com o atributo "title" com um espaço a mais.
