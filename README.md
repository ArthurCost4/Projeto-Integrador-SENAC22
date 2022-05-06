# GitHub dos colaboradores:
 * Docente: [Leonardo Ignacio](https://github.com/leonardoignacio)
 
 * Aluno: [Arthur Costa](https://github.com/ArthurCost4)
 * Aluno: [Matheus Vinicius](https://github.com/AnaniasMv)
 * Aluno: [Leonardo Küchschlüger](https://github.com/leook2)


# Projeto Integrador: FinanceON
## SENAC turma Programador Web 2021/22

### Dentro da problematização foi abordada a questão da vida financeira no Brasil, pois o mesmo devido as constantes mudanças econômicas advindas da pandemia. Nosso país passa por um momento econômico delicado que tem atingido __todas__ as camadas sociais reduzindo o poder de compra de todos mas de maneira mais acentuada nas classes C,D e E

Foram feitas varias pesquisas entre elas dados coletados pelo CNC [Clique aqui para saber mais sobre a pesquisa](https://economia.uol.com.br/noticias/estadao-conteudo/2022/01/18/brasil-fecha-2021-com-recorde-de-familias-endividadas-diz-pesquisa.htm#:~:text=Na%20m%C3%A9dia%20do%20ano%2C%2070,registrados%20na%20m%C3%A9dia%20de%202020.)

>A taxa de incremento de famílias com dívidas também foi a maior já observada, revelando que as famílias recorreram mais ao crédito para sustentar o consumo.

Ou se preferir outras fontes como por exemplo a pagina do [Correios Braziliense](https://www.correiobraziliense.com.br/economia/2021/10/4953473-tres-a-cada-quatro-brasileiros-estao-endividados-mostra-pesquisa.html)

>O total de brasileiros endividados chegou a 74% da população em setembro, 1,1 ponto percentual (p.p.) acima do verificado em agosto, conforme a Pesquisa de Endividamento e Inadimplência do Consumidor 

[IG mail](https://economia.ig.com.br/2021-10-05/endividamento-das-familias-recorde.html) e entre muitas outras pesquisas...

É de se notar a extrema necessidade de usar a nossa experiencia em ajudar a trazer uma educação financeira melhor e assim facilitar os brasileiros a atingirem a suas metas e sonhos.

Alem da problematização proposta, o seguinte projeto acima de tudo visa demonstrar o nosso conhecimento adquirido ao longo do curso, Orientados pelo professor Leonardo Ignacio Fernandes foram feitos alguns debates visando encontrar um objetivo em comum para o grupo 

Resumindo o nosso projeto: Oferecer um ambiente onde o usuário possa centralizar custos e receitas, disponibilizando informações direcionadas para o melhor gerenciamento de recursos.
Proporcionar uma ferramenta para que o usuário possa gerenciar sua vida financeira, e planejar seu futuro, atingir objetivos e realizar sonhos!


## COMEÇANDO PELA IDENTIDADE VISUAL:

A escolha da nossa identidade visual se deu pelas cores verde em tons mais claros simbolizando dinheiro, esperança, liberdade, saúde e vitalidade e Amarelo forte simbolizando a leveza, descontração, otimismo. Tambem simboliza criatividade, juventude e alegria.

O mesmo se deu na escolha das fontes/tipografia que foi optada por um estilo de letra mais serias mas com um pequeno tempero de descontração trazendo uma ideia como "Não tema, ainda ha esperança"

Tudo isso pensando no nosso publico alvo, não tentamos fazer nada que pareça muito **intimidador**, ao contrario nós como um time tentamos ao maximo trazer uma experiência de usuario acima de tudo simples, facil e amigavel para todo mundo que procure acessar a nossa pagina

![Pagina HOME](https://user-images.githubusercontent.com/95101382/167031717-75d57c62-1f74-426c-b7c5-e2939a98fab2.png)
![Corpo pag HOME](https://user-images.githubusercontent.com/95101382/167032787-3cd56b9e-ac32-49b4-8814-6d2420e4ffa9.png)
![rodape pag HOME](https://user-images.githubusercontent.com/95101382/167033197-17157925-0e0e-4832-8d1e-767aa42fd092.png)

## TELAS DE CADASTRO E LOGIN

![Tela de cadastro](https://user-images.githubusercontent.com/95101382/167041678-d345ccd5-22f8-4162-8a92-acde33a012a7.png)

![Tela de login](https://user-images.githubusercontent.com/95101382/167041707-a5b0903b-5d9b-4ed5-92bf-a447b27bb763.png)


## RESPONSIVIDADE E PADRÕES DE ACESSIBILIDADE:

Como ja deu a entender pelo titulo, o nosso time teve total conhecimento de que nem todo mundo tem a mesma forma de se comunicar com a maquina como por exemplos as pessoas que necessitão de alguma ferramenta de auxilio para navegação, de acessar um determinado elemento, ou até mesmo a forma como algumas pessoas enxergam determinadas cores no monitor e etc...
Com isso a gente tentou da melhor forma possivel melhorar a experiência TAMBEM a essas pessoas.

### Exemplos:
  
~~~html
<header>
        <div class="btn__responsive-relatorio" id="headerRelatorio"></div>
        <div class="relatorio-header" >
            <nav class="cabecalho-principal-nav-relatorio " id="headerNav" >
                <ul class="cabecalho-principal-nav-relatorio-itens">
                    <li><a class="cabecalho-principal-nav-relatorio-itens-a  home" href="/home">Home</a></li>
                    <li><a class="cabecalho-principal-nav-relatorio-itens-a" href="/centroscustos">Centro de custo</a>
                    </li>
                    <li><a class="cabecalho-principal-nav-relatorio-itens-a" href="/relatorio">Relatorio</a>
                    </li>
                    <li><a class="cabecalho-principal-nav-relatorio-itens-a last"
                            href="/transacao">Transação</a></li>
                </ul>
                <div class="cabecalho-principal-nav-btn btn-accout__relatorio">
                    <button class="cabecalho-principal-nav-sign-in btn-accout__sign-in">Sign in</button>
                    <button class="cabecalho-principal-nav-sign-up btn-accout__sign-up">Sign up</button>
                </div>
            </nav>
        </div>
    </header>
    <picture class="relatorio-img__logo">
        <source media="(max-width:530px )" srcset="../img/LogotipoMobile.png">
        <img src="../img/Logotipo.png" alt="Logotipo">
    </picture>
~~~~

~~~html
<div class="container">
            <section class="section-cards-global">
                <header class="section-cards-header">
                    <h2 class="section-cards-global-titulo-h2">Nossos serviços</h2>
                    <h3 class="section-cards-global-titulo-h3"><q style="font-size: 30px;">Mude, faça, contróle. É simples!</h3>
                </header>
                <div class="section-cards-itens">
                    <a href="#" class="section-cards-global-card">
                        <h3 class="section-cards-global-h3 ">Ideia</h3>
                        <p class="section-cards-global-p">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione non alias quae delectus, accusamus distinctio placeat adipisci quaerat officiis illum laboriosam id, perferendis conseias.</p>
                    </a>
                    <a href="#" class="section-cards-global-card">
                        <h3 class="section-cards-global-h3 ">Vida sossegada</h3>
                        <p class="section-cards-global-p ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione non alias quae delectus, accusamus distinctio placeat adipisci quaerat officiis illum laboriosam id, perferendis conseias.</p>
                    </a>
                    <a href="#" class="section-cards-global-card">
                        <h3 class="section-cards-global-h3">Support</h3>
                        <p class="section-cards-global-p ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione non alias quae delectus, accusamus distinctio placeat adipisci quaerat officiis illum laboriosam id, perferendis conseias.</p>
                    </a>
                </div>
            </section>
        </div>
~~~

Como visto, nós usamos e abusamos de tags semanticas como Header, section, nav e assim por diante, nosso foco proposto ao projeto não foi e nunca seria apenas à um conhecimento tecnico mas tambem humanitario, visando levar o nosso projeto a novos horizontes, e como ja dizia a W3C "A web é para todos" e nós concrodamos muito com essa ideia

#### A responsividade:

Em outro lado a gente tambem e é claro sabe que nem todo mundo acessa um site em um mesmo monitor de um determinado tamanho, trazemos por meio do framework chamado bootstrap, a tão adorada responsividade ao nosso projeto...

##### Olhe e aprecie

![Responsivo header HOME](https://user-images.githubusercontent.com/95101382/167035809-1e5eddfb-7d64-4ee4-ac3b-cd304ee9292a.png)
![Responsivo corpo HOME](https://user-images.githubusercontent.com/95101382/167035874-a93162fe-1293-4874-896a-836114aa1498.png)
![Responsivo rodape HOME](https://user-images.githubusercontent.com/95101382/167036026-73c39112-0f1c-4b19-9c09-e19efd345231.png)

Só temos a agradecer ao bootstrap...


## BACK-END

### Visão geral

Para a nossa aplicação usamos um "conversor" da linguagem JavaScript para o Back-End, o chamado Node.js
Durante o nosso projeto foram usadas as seguintes tecnologias:

![Tecnologias usadas no app](https://user-images.githubusercontent.com/95101382/167036851-4d392c60-9b5e-4efa-98ca-6448e367e62a.png)

Para não ficar muito longo e cansativo, tivemos total conhecimento das tecnologias, como o ORM sequelize, body-parser pela conversão para JSON, e é claro a nossa queridinha EXPRESS que construiu todo a nossa area de trabalho

#### Organização dos documentos e scripts do projeto

![Organização Back-end](https://user-images.githubusercontent.com/95101382/167038478-12aa5cdb-c81f-4c73-b928-9a4f28bec40a.png)

* controlers : dentro dela esta a nossa pasta **rotas** como o nome ja sugere são as requisiçoes HTTP de cada pagina o chamado CRUD do nosso banco de dados e a pasta Funçoes que seguindo o conceito de Clean Code, a gente padronizo as requisiçoes e reciclo as requisiçoes, dando mais tempo e produtividade para que a gente pudesse focar em outros problemas do app, alem dele está a nossa funçao de proteção das paginas que seria mais ou menos "Para usar as tabelas primeiro voce tem que ter uma conta"

* models : Como a gente usou um ORM para o banco de dados, foi criada a pasta models com o intuito de gerenicar tais tabelas e antes de tudo foi usado o banco de dados relacional __MySQL__


![Organização Front-End](https://user-images.githubusercontent.com/95101382/167040921-d3e1fa7f-0fd7-4f95-9de0-f593c2b728ae.png)

* public : essa pasta ficou como a encarregada de gerenciar o design (CSS) e a interação front-end(JavaScript) da nossa aplicação

* views : como o nome ja sugere, as nossas paginas de views, e antes dela a uma chamada Partials que contem a padronização da identidade visual do app, todos usando a tecnologia EJS, tanto no ja dito padrão quanto na construção das tabelas

E por fim o nosso arquivo MAIN que gerenciava toda a nossa aplicação na parte do servidor

E como sempre, um exemplo de como ficou a padronização das tabelas:

![Tabela Transaçoes](https://user-images.githubusercontent.com/95101382/167041455-f4846b92-f310-40bc-993c-5bd5a44aad61.png)

## Relatorio

E é claro temos a tela de saida dos nossos dados, onde é mostrado todo o calculo com uma saida global ou se voce preferir uma saida mais detalhada tem os CARDS criado dinanicamente de cada receita, despesa ou investimento.

![Pagina de relatorio](https://user-images.githubusercontent.com/95101382/167043909-ace28732-2f42-40fb-bddd-2ca9043afab4.png)

# AGRADECIMENTOS

Por todo apoio
## Principalmente ao nosso professor e grande amigo: Leonardo Ignácio Fernandes
### A nossa equipe que foi uma grande experiencia
### E acima de tudo ao SENAC que propos uma experiencia unica e de grande qualidade ao nosso curso

## Observações:

Por Arthur/Matheus/Leonardo(aluno)

Nós estamos longe de ser os experts em programação e sim a gente tem plena conciencia que podemos melhorar e muito esse projeto, mas com o nosso tempo que foi nos dados de aproximadamente 2 semanas para um curso de tempo relativadamente curto, estamos muito orgulhosos do projeto que conseguimos criar e acima de tudo toda a dedicação, comprometimento, trabalho em equipe e é claro o nosso amor por programação foi depositado nesse projeto, então só temos a agradecer por toda a nossa trajetoria

~Com todo carinho
-nós :japanese_goblin: :sparkling_heart:
