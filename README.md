
# TRYBEWARTS

Projeto em dupla de avaliação feito durante o curso da Trybe, buscando colocar em prática:

  * Criar formulários em HTML;

  * Utilizar CSS Flexbox para criar layouts flexíveis;

  * Criar regras CSS específicas para serem aplicadas a dispositivos móveis;

  * Construir páginas que alteram o seu layout de acordo com a orientação da tela;



## Esse projeto foi submetido a testes de 21 requisitos, atingindo 100% dos que foi proposto:

### 1. Crie uma barra verde na parte superior da página

  #### O que será verificado:

  - Existe um elemento com a classe `header`
  - O elemento possui a propriedade CSS `display: flex`
  - O elemento possui a propriedade CSS `background-color: rgb(50, 167, 145)`

### 2. Adicione o logotipo da Trybewarts com a classe `trybewarts-header-logo` no canto esquerdo da barra superior

  #### O que será verificado:

  - Existe um elemento `img` com a classe `trybewarts-header-logo`
  - O elemento está alinhado à esquerda da barra
  - O elemento possui o atributo `src` apontando para `images/trybewarts-header-logo.svg`

### 3. Acrescente um formulário de autenticação no canto direito da barra superior contendo os inputs de login, de senha e um botão de entrar

  #### O que será verificado:

  - Existe um elemento `form` com a classe `trybewarts-login`
  - O elemento está alinhado à direita dentro da barra verde
  - Existem dois inputs e um botão dentro do formulário
  - Os inputs de login e senha possuem, respectivamente, os _placeholders_ `Login` e `Senha`
  - O formulário possui a propriedade CSS `display: flex`
  - O click no botão de login dispara um alert com o texto "Login ou senha inválidos", no caso de erro de preenchimento dos dados
  - O click no botão de login dispara um alert com o texto "Olá, Tryber!", no caso de preenchimento correto dos dados.

### 4. Crie um título com o texto 'Trybewarts' centralizado dentro do 'Header'

  #### O que será verificado:

  - Existe um elemento `h1` com o id `trybewarts-header-title`
  - O elemento possui um conteúdo de texto `Trybewarts`
  - O elemento com a classe `header` deve possuir exatos `3` elementos filhos
  - O filho do meio do elemento com a classe `header` deve ser o título h1 `Trybewarts`

### 5. Adicione um formulário no corpo da página, posicionado ao lado esquerdo

  #### O que será verificado:

  - Existe um elemento `form` com o id `evaluation-form`
  - O elemento está dentro da tag `main`
  - O elemento `main` e o `form` possuem a propriedade CSS `display: flex`
  - O elemento `form` possui a propriedade CSS `width: 675px`

### 6. Faça com que o formulário do requisito 5 seja um container flex com o eixo principal vertical

  #### O que será verificado:

  - Existe um elemento com o ID `evaluation-form`
  - O elemento possui a propriedade CSS `display: flex`
  - O elemento possui a propriedade CSS `flex-direction: column`

### 7. Adicione a logo da Trybewarts no lado direito da página

  #### O que será verificado:

  - Existe um elemento `img` com o id `trybewarts-forms-logo`
  - O elemento possui o atributo `src` apontando para `images/trybewarts-colored.svg`

### 8.Acrescente no formulário os inputs de 'Nome:', 'Sobrenome:' e 'Email:'

  #### O que será verificado:

  - Existe 3 elementos inputs com os IDs `input-name`, `input-lastname` e `input-email`
  - Os inputs de nome, sobrenome e email devem possuir, respectivamente, o atributo de `placeholder` com os valores `Nome`, `Sobrenome` e `Email`

### 9. Crie um select 'Casa' contendo quatro options

  #### O que será verificado:
  
  - Existe um elemento `select` com o id `house`
  - Existe um elemento `option` com o id `gitnoria-house`
  - Existe um elemento `option` com o id `reactpuff-house`
  - Existe um elemento `option` com o id `corvinode-house`
  - Existe um elemento `option` com o id `pytherina-house`

### 10. Alinhe os campos de 'Nome' e 'Sobrenome' para que fiquem em linha

  #### O que será verificado:

  - O campo de `Sobrenome` está à direita do campo de `Nome`

### 11. Alinhe os campos de 'Email' e 'Casa' para que fiquem em linha

  #### O que será verificado:

  - O campo de `Casa` está à direita do campo de `Email`

### 12. Crie um campo de entrada para qual família a pessoa estudante se identifica

  #### O que será verificado:

  - Existe um elemento `label` com o id `label-family` que possui um conteúdo de texto `Qual sua família?`
  - Existe um elemento `input` com o atributo `value="Frontend"`
  - Existe um elemento `input` com o atributo `value="Backend"`
  - Existe um elemento `input` com o atributo `value="FullStack"`
  - Existem 3 elementos `input` do tipo `radio` com o atributo `name="family"`
  - Os inputs do tipo `radio` estão um abaixo do outro
  - Os 3 inputs do tipo `radio` estão abaixo do texto da label

### 13. Crie campos de entrada do tipo 'checkbox' contendo seis opções

  #### O que será verificado:

  - Existe um elemento `label` com o id `label-content` que possui um conteúdo de texto `Qual conteúdo você está com mais vontade de aprender?`
  - Existe um `input` com o atributo `value="HoFs"`
  - Existe um `input` com o atributo `value="Jest"`
  - Existe um `input` com o atributo `value="Promises"`
  - Existe um `input` com o atributo `value="React"`
  - Existe um `input` com o atributo `value="SQL"`
  - Existe um `input` com o atributo `value="Python"`
  - Os elementos checkbox então posicionados abaixo da label

### 14. Crie campo de entrada para avaliar de 1 a 10 o nível de satisfação com a Trybewarts

  #### O que será verificado:

  - Existe um elemento `label` com o id `label-rate` que possui um conteúdo de texto `Como você avalia a Trybewarts?`
  - Existem 10 `radio-buttons` com o atributo `name="rate"`
  - Existem 10 `radio-buttons` contendo o atributo `value` de 1 a 10  
  - Os `radio-buttons` estão à direita do texto da label

### 15. Crie uma textarea com o id 'textarea' e uma label com a classe 'textarea' contendo o número máximo de caracteres igual à 500

  #### O que será verificado:

  - Existe uma `label` com a classe `textarea` e o texto `Deixe seu comentário:`
  - O elemento `textarea` possui um limite de 500 caracteres

### 16. Crie um campo de entrada do tipo 'checkbox' com o id 'agreement' para validar as informações

  #### O que será verificado:

  - Existe uma label com o id `label-infos` que possui o texto `Você concorda com o uso das informações acima?`
  - Existe um input do tipo `checkbox` com o id `agreement`

### 17. Crie um botão de Enviar para submeter o formulário

  #### O que será verificado:

  - Existe um botão do tipo `submit` com o id `submit-btn` e o texto `Enviar`

### 18. Faça com que o botão 'Enviar' seja habilitado somente após a checkbox do requisito 16 ser selecionada

  #### O que será verificado:

  - O botão está inicialmente desabilitado
  - O botão torna-se habilitado, ao marcar o campo com id `agreement`

### 19. Crie um rodapé no final da página

  #### O que será verificado:

  - Existe um elemento `footer` deve possuir o texto `Direitos reservados à Trybewarts©`

## Lista de requisitos bônus:

### 20. Crie um contador com o ID 'counter' contendo o número de caracteres disponíveis no textarea, variando de 500 até 0, que deverá ser atualizado a medida que algo for digitado na textarea

  #### O que será verificado:

  - Existe um elemento com o id `counter`
  - Existe um elemento com o id `textarea`
  - O preenchimento do campo de `textarea` altera o número apresentado no elemento `#counter`

### 21. Faça com que ao clicar no botão 'Enviar', o conteúdo do formulário seja substituído pelas informações preenchidas

  #### O que será verificado:

  - Os `inputs` tipo `checkbox` referentes à lista de conteúdo possuem `class="subject"`
  - Ao clicar no botão de enviar, existe um texto no formato `Nome: -Nome- -Sobrenome-`
  - Ao clicar no botão de enviar, existe um texto no formato `Email: -Email-`
  - Ao clicar no botão de enviar, existe um texto no formato `Casa: -Casa-`
  - Ao clicar no botão de enviar, existe um texto no formato `Família: -Família-`
  - Ao clicar no botão de enviar, existe um texto no formato `Matérias: -Matérias Selecionadas-`
  - Ao clicar no botão de enviar, existe um texto no formato `Avaliação: -Avaliação-`
  - Ao clicar no botão de enviar, existe um texto no formato `Observações: -Observações-`
