# **Live University**

Este projeto foi desenvolvido como teste para avaliar as minhas habilidades com _JavaScript_ _client-side_ e _server-side_. O projeto consiste em um formulário para o _client-side_ preencher com **nome**, **sobrenome** e **email** e então o _server-side_ fornece o nome de um **animal**, **cor**, e **país** baseados em algumas contas e lógica pré-definida, então os dados são exibidos no _client-side_ em um modal.

## libs usadas:

### _client-side_
- _axios_ 0.21.1
- _jQuery_ current
- _semantic ui_ current
### _server-side_
- _node_ 11.0.0
- _body-parser_ 1.19.0
- _ejs_ 3.1.6
- _express_ 4.17.1
- _tedious_ 1.14.0
- _tedious-promises_ 0.4.1

## Rodando o projeto

Para rodar o projeto, basta seguir os processos básicos do nome com npm e fornecer os dados de acesso ao banco de dados, faça o clone do projeto, execute o ```npm install``` para instalar as dependências, configure o banco de dados e execute o comando ```npm start``` ou ```node index.js```

## Configurando o banco de dados

Crie o arquivo tedious-config.json dentro de /infraestrutura com as seguintes informações:

```
{
    "userName": "nome_usuario",
    "password": "senha_banco",
    "server": "nome_servidor",
    "options": {
        "database": "node_banco"
    }
}
```

## Resultados

### Tela inicial
<img src="https://lh3.googleusercontent.com/fife/AAWUweXVnKMOxJ1JynEJ9fOep-AsBIsNdULxPeAQVsw8Ekjdu418dgtCWt60T6ET64SOwh7oA_D2JxHZmALBtJUxzyVrowEZgBEfEalalGKkfBLrFyCpZd-eequR7NFY1bc3BeHcgxegZD1cLyv01MjS3wTpeIaAIz191JqgAxzhpz-QOcqQxjYmnfYu2VOm26uFEfcPeWdSRROA6Uq5-oH5EaoThhcSsXZZHpNxXTKTW99fOp9G7EByWwvUvYZO3SoRHXE7sizLyWA5i7l_fVkpw87HMpY1VR9rCGIRPCdpYLxJxx-oOMGsfEN5-w5FSJMf1j_T-Kd4oX2lW0SAkAyKkDwDsB3ziiZpejQRr5gL_AlHo40KjQBVhSRTED6RsXIak9ll_TO-B5KbiL1p5KbUnizwbamnv6WSL1ec8oVAESxVmHcueQcPSVT3k4yPMIiYdiUVZ3ljFT4C3XNQNKArLTNcsBXNCCMilpw4BoWXwL-DhM0L4NPUN50seoXqsqneDQEBapk4dTxDrF26kXM4ILgR8uKWv-vVcBYfbUFZqUY09K9II_hv-Y02TXiwNbglEszWW7UlaDO_uVo7c9H4EmXMk_TpDzSCTGMOXuRSALgdKXhloMVfpN_f9897j5cCkwf3xTKfuboXZvkGcdcMiYzwScGoKXpj0Ry_o5lyacJck3i9SZD-69jFzm78JBzpzAzvASICw53SOvMuJHgG5f8T-5XqO-iZ72g=w1313-h725-ft">

### Resultado do preenchimento
<img src="https://lh3.googleusercontent.com/fife/AAWUweW2GDSGtETYna_q6cqiW-iqbXpOkJYsvY9dYduVUCSWcBYOOw9p9jd-3chCY1kfhGQdKuZRU-SVJ0qDpwfYsmZ2xUxsQmIt0i3Zsi4JwFIxrGkFOueZzv3keNr7yW_SqpE0J66grSQyoVKD4-CvO3qLbGw0oA1qJSzhp5goGvuQbhPYHUJrCY2bX4tCQKf3o4-fljWYGktEB6q3klrzrRuBtfXJ-3cNghwmAMV4BD1EFQKZtaVltT6n5eFQElAH3Uii4pxZBqfcXSGxlOx-zjyWG4EYegratr5j_TCGYASdnM6UXS6xzr4HN6Z2sviO0bII662r7fcuVGiWK_TAAIWlnOT3nBUlICQmX_-MpKVa37fqD0HOKWExTwUNh-KKzDUau5lrLHcEnE7b3nM6fIjT598QZSKFIE1I0fXglEAvVnCC4oRNCicTc8P2lKKSvO7zVns2kzNNi76W9AI6WRIRFCDb8r6vWCrMIEdw2wvsigOIU9qePWzPYWUcAdbBBn6OmMSO1p-jeMGYb4PpnOalIPCcb4YrucCyaZ73t1Af43KvHc99Uy8vWK-MbWxSy9aGSfrBVeBkvnDyPc97vgalJOeaNJSgnrZgH0CZJXLizscrRzKmKj779h0RgejXlyVY_i1KXBh_-1KenDdw99KC3C8G9OYfRFgebuAAnq5a6DHImoLzguBvnx0kXDBSeK1EJ2acsR-0gYvmhVQuxpBu98HdCN3QJlA=w1313-h725-ft">

Em caso de dúvidas, estou a disposição para contato:
[Email](mailto:renatobmpsilva@gmail.com)
[WhatsApp](https://api.whatsapp.com/send?phone=5511947689391)

Sugestões? Ficarei feliz em receber um PR.

[Bugs?](https://github.com/renatobmps/liveuniversity/issues)

#### Obrigado!