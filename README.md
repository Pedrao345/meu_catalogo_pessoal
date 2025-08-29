# Meu Catálogo Pessoal

Este é um aplicativo React Native para exibir um catálogo pessoal de filmes, onde cada filme é apresentado como um card com imagem de fundo, título, subtítulo e ano. O layout é responsivo, adaptando-se automaticamente para celulares, tablets e web.

## Índice
[Funcionalidades](#funcionalidades)
[Estrutura dos Dados](#estrutura-dos-dados)
[Como rodar o projeto](#como-rodar-o-projeto)
[Estrutura dos Arquivos](#estrutura-dos-arquivos)
[Personalização](#personalizacao)

## Funcionalidades

- Lista de filmes em formato de cards
- Imagem de fundo em cada card
- Layout responsivo (ajusta quantidade de colunas conforme o tamanho da tela)
- Visual moderno e agradável

## Estrutura dos Dados

O arquivo `catalogo.json` deve estar na raiz do projeto e conter um array de objetos com a seguinte estrutura:

```json
[
  {
    "id": 1,
    "titulo": "Nome do Filme",
    "subtitulo": "Descrição ou gênero",
    "ano": 2023,
    "imagem": "https://link-da-imagem.jpg"
  }
]
```

## Como rodar o projeto

1. **Instale as dependências:**
   ```bash
   npm install
   ```
2. **Execute o projeto:**
   ```bash
   npx expo start
   ```
3. **Abra no seu dispositivo ou emulador** usando o QR Code ou escolha um simulador no Expo Go.

## Estrutura dos Arquivos

- `components/CatalogoScreen.tsx`: Tela principal do catálogo de filmes.
- `catalogo.json`: Arquivo com os dados dos filmes.

## Personalização

- Para adicionar ou remover filmes, edite o arquivo `catalogo.json`.
- Para alterar o visual dos cards, edite os estilos em `CatalogoScreen.tsx`.

## Tecnologias Utilizadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [TypeScript](https://www.typescriptlang.org/)

