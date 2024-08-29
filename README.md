Sistema de Login Simples com React.js, Node.js e MySQL
Este projeto foi criado para fornecer uma solução básica para autenticação de usuário utilizando React.js no frontend, Node.js no backend e MySQL como banco de dados. Ele pode ser utilizado como base para projetos que necessitem de um sistema de login simples e seguro.

Estrutura do Projeto
O projeto é dividido em duas partes principais:

Frontend: Desenvolvido com React.js.
Backend: Desenvolvido com Node.js, usando o Express para criar APIs e MySQL para gerenciamento de banco de dados.
Pré-requisitos
Node.js e npm instalados
MySQL instalado e configurado
Editor de texto (recomendado: Visual Studio Code)
Ferramentas de linha de comando
Configuração do Projeto
1. Clonar o Repositório
Primeiro, clone o repositório para sua máquina local:

bash
Copiar código
git clone <URL_DO_REPOSITORIO>
cd <NOME_DA_PASTA_DO_PROJETO>
2. Configurar o Frontend
Navegue até a pasta raiz do projeto.

Instale as dependências do React:

bash
Copiar código
npm install
Inicie o servidor de desenvolvimento React:

bash
Copiar código
npm start
3. Configurar o Backend
Navegue até a pasta backend:

bash
Copiar código
cd backend
Instale as dependências do Node.js:

bash
Copiar código
npm install
Abra o arquivo server.js na pasta backend e configure os dados de conexão com o banco de dados MySQL conforme a sua configuração local. Exemplo de configuração de conexão:

javascript
Copiar código
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // substitua pelo seu usuário do MySQL
  password: '', // substitua pela sua senha do MySQL
  database: 'cadastro' // substitua pelo nome do seu banco de dados
});
4. Iniciar o Servidor Backend
Certifique-se de que o MySQL está rodando e que você criou uma tabela cadastro com as colunas apropriadas (id_cadastro, nome, email, cpf, endereço, telefone, senha).

Inicie o servidor Node.js:

bash
Copiar código
node server.js
Você verá uma mensagem de sucesso no terminal indicando que o servidor está rodando e conectado ao banco de dados MySQL:

less
Copiar código
Servidor rodando em http://localhost:3001
Conectado ao banco de dados MySQL!
Testando o Sistema
Abra um navegador e vá até http://localhost:3000 para acessar o frontend do sistema de login.
Use as credenciais que estão armazenadas na tabela cadastro no banco de dados MySQL para fazer o login.
Ajustes e Configurações
Rotas do Backend: As rotas estão configuradas para uma tabela chamada cadastro. Se o nome da tabela ou a estrutura for diferente, ajuste as consultas SQL no arquivo server.js de acordo.
Porta do Servidor: O servidor Node.js está configurado para rodar na porta 3001. Certifique-se de que essa porta está disponível ou ajuste a configuração no server.js para usar outra porta, caso necessário.
Solucionando Problemas Comuns
Problemas de CORS
Se você encontrar problemas relacionados a CORS (Cross-Origin Resource Sharing), certifique-se de que o middleware CORS está configurado corretamente no server.js:

javascript
Copiar código
const cors = require('cors');
app.use(cors({
  origin: 'http://localhost:3000', // Permitir apenas essa origem
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
Não Consegue Conectar ao Banco de Dados MySQL
Verifique se o MySQL está em execução.
Verifique se as credenciais do banco de dados no server.js estão corretas.
Certifique-se de que a tabela cadastro foi criada e tem a estrutura correta.
Erro de Porta Já em Uso
Se a porta 3001 estiver em uso, você pode mudar a porta no server.js:

javascript
Copiar código
const port = 3002; // ou outra porta disponível
Considerações Finais
Este projeto é uma base simples para sistemas de autenticação. É altamente recomendável adicionar medidas de segurança adicionais em um ambiente de produção, como:

Hashing de senhas com bcrypt
Uso de tokens JWT para autenticação
Validar entradas de usuário para evitar SQL Injection
Aproveite e use este projeto para aprender mais sobre autenticação e desenvolvimento full-stack com React, Node.js e MySQL!