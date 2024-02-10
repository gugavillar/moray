# Teste Técnico: Mapa de Bairros e Evolução Populacional

Este projeto é um teste técnico desenvolvido para demonstrar a capacidade de criar uma interface que exibe os bairros em um mapa e mostra a evolução populacional ao longo do tempo em um gráfico. Os dados exibidos são os dados fornecidos nos arquivos json.

## Descrição

O objetivo deste projeto é criar uma interface que integra um mapa com os bairros de uma determinada região e um gráfico que exibe a evolução populacional desses bairros ao longo do tempo. A interface deve ser interativa, permitindo que os usuários naveguem pelo mapa e visualizem informações detalhadas sobre cada bairro.

## Funcionalidades

- Exibir um mapa com os bairros de uma região específica.
- Permitir a interação com o mapa, como zoom e movimentação.
- Mostrar a evolução populacional do bairro selecionado em um gráfico.

## Tecnologias Utilizadas

### Frontend
- React
- Leaflet & React-leaflet
- Recharts
- TailwindCSS

### Testes
- Cypress
- Vitest
- React-testing-library

### Outras
- Eslint
- Husky
- Prettier
- Vite

## Configuração das Variáveis de Ambiente

É necessário configurar as variáveis de ambiente para garantir o funcionamento correto do projeto. Um arquivo **.env.example** está disponível no repositório como modelo. Renomeie este arquivo para **.env** ou **.env.local** e adicione as variáveis de ambiente necessárias conforme descrito abaixo:

- **VITE_MAP_URL:** Url que o leaftlet utiliza para estruturar os blocos de imagens do mapa [React Leaflet setup page](https://react-leaflet.js.org/docs/start-setup/).
- **VITE_MAP_LAT:** Valor da latitude inicial do mapa.
- **VITE_MAP_LNG:** Valor da longitude inicial do mapa.

Certifique-se de adicionar valores válidos para as variáveis de ambiente antes de iniciar a execução do projeto.

## Instalação e execução

1. Realize o clone do repositório
```bash
git clone https://github.com/gugavillar/moray.git
```

2. Navegue até o diretório do projeto
```bash
 cd moray
```

3. Realize a instalação dos pacotes
```bash
  # com npm
  npm install

  # com yarn
  yarn install

  # com pnpm
  pnpm install
```

4. Rode o projeto e acesse o link [http://localhost:5173](http://localhost:5173)
```bash
  # com npm
  npm run dev

  # com yarn
  yarn dev

  # com pnpm
  pnpm run dev
```

## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir um **pull request** com melhorias, correções de bugs ou novas funcionalidades.

## Licença
Este projeto está licenciado sob a Licença MIT.

## Contato
Para mais informações, entre em contato com Gustavo Villar via e-mail: [grsv.21@gmail.com](grsv.21@gmail.com).