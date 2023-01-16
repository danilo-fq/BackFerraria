## 🔥 API simples de cadastro e listagem de produtos e usuários para uma ferraria ! 🔥

API de cadastro e leitura com temática de RPG. Para este projeto foram utilizados as tecnologias Express, JWT, NodeJs, Docker, Typescript e MySQL

### Pré-Requisitos

:alert: Para rodar o projeto desta forma, obrigatoriamente você deve ter o node instalado em seu computador.

Existe um docker-compose para subir o container do banco de dados mysql. Será necessário que tenha o [Docker instalado](https://www.hostinger.com.br/tutoriais/install-docker-ubuntu) na sua maquina.

Após efetuada a instalação basta rodar o comando: ``` docker-compose up -d ```

Mas caso tenha MySql localmente basta rodar ```npm install ```

### Rotas Disponíveis

[Criação de Usuário](https://localhost:3306/users)  || 
[products](https://localhost:3306/products) ||
[orders](https://localhost:3306/orders) 

Observação: Será necessário criar um cadastro de usuário para gerar um token e permitir o acesso e retorno das rotas products e orders


docker-compose.yml e TrybeSmith.sql foram desenvolvidos pela @Tryber
