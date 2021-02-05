ALEM DE MARTE API

Teste técnico - Sete.Digital

Vaga: Desenvolvedor Fullstack - JR

Projeto: Além de Marte

Desenvolvido por: Marlon Allan de Sena Ferreira

Endereço na web: https://alemdemarteapi.herokuapp.com/

--------------------------------

Ferramentas utilizadas no desenvolvimento da API:

    Nodejs - versão 14.15.4
  
    sqlite - versão 3.33.0
 
 --------------------------------
 
Dependencias do NodeJS

    body-parser -  1.19.0
  
    cors        -  2.8.5
  
    dotenv      -  8.2.0
  
    express     -  4.17.1
  
    morgan      -  1.10.0
  
    sqlite      -  4.0.19
  
    sqlite3     -  5.0.1
 
 --------------------------------
 
Dependencias do NodeJS em desenvolvimento

    nodemon     -  2.0.7
 
 
 ----ROTA USUARIO----
 
post('/usuario')

    Recebe "nome" via body
  
      Retorna resultado default sqlite em json da operação insert aplicado ao nome recebido



  patch('/usuario?')
  
    Recebe "id" via query
    
    Recebe "nome" via query
    
      Retorna resultado default sqlite em json da operação update aplicada aos parametros recebidos


  delete('/usuario/:id')
  
    Recebe "id" via params
    
      Retorna resultado default sqlite em json da operação delete aplicada ao id recebido


  router.get('/usuario/:id')
  
    Recebe "id" via params
    
      Retorna o resultado default sqlite em json da operação delete aplicada ao id recebido


  router.get('/usuario')
  
    Sem recebimento
    
      Retorna o resultado default sqlite em json da operação get aplicada a todos os registros
  

--------------------------------

----ROTA IMAGEM----

router.post('/imagem')

    Recebe "id" via body
  
      Retorna resultado o proprio id em json da operação insert aplicado ao id recebido

--------------------------------

----ROTA USUARIOIMAGEM----

get('/usuarioimagem?')

    Recebe "id" da imagem via query 
  
    Recebe "id" do usuario via query 
  
      Retorna o resultado default sqlite em json da operação get aplicada aos parametros recebidos

--------------------------------

----ROTA LIKE----

post('/like')

    Recebe "likes" via body
  
    Recebe "id" do usuario via body
  
    Recebe "id" da imagem via body
  
      Retorna status 200



  delete('/like')
  
    Recebe "likes" via query
    
    Recebe "id" do usuario via query
    
    Recebe "id" da imagem via query
    
      Retorna status 200
      
