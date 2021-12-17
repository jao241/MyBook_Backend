# MyBook_Backend

Um projeto back-end proposto na matéria de programação movel usando Nodejs, TypeScript, Docker.

Passo a passo para utilização:

Obs: Estou usando o SO linux Ubuntu
---

- 1° Instalar o docker (<https://docs.docker.com/engine/install/ubuntu/>)
- 2° Instalar o docker compose (<https://docs.docker.com/compose/install/>)
- 3° Clone este repositório
- 4° Abra o cmd, navege até o repositório e execute o seguinte comando:
- 
  docker-compose up -d ou sudo docker-compose up -d
  ---
  
  OBS: Caso deseje ver no terminal o build das imagens, a iniciação dos containers e os logs, retire o -d do comando
  
- 5° Após a execução do comando acima, execute o seguinte comando para adicionar dados ao banco:
- 
  docker exec -i postgresBD psql -U postgres < ./script.sql ou sudo docker exec -i postgresBD psql -U postgres < ./script.sql
  ---
  
  OBS: Após ser executado pela primeira vez, os dados também serão salvos no volume do container, então caso pare o container e depois reinicie os dados persistirão, mas caso não ocorra, basta executar o comando acima uma segunda vez.
  
- 6° Abra a aplicação Mybook_Frontend e execute-a

OBS: Também é possível utilizar outros tipos de clientes como o Insomnia para testar as rotas usando localhost:numero da porta/rota, exemplo:

  localhost:3001/feeds
  ---


