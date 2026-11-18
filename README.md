# Diário de Bordo — PWA

Aplicação web desenvolvida como projeto de estudo, utilizando HTML5, CSS3 e JavaScript puro. O projeto permite registrar e consultar anotações em um diário de bordo, armazenando os dados localmente no navegador.

## Funcionalidades

- Criar e visualizar registros no diário de bordo.
- Armazenar informações utilizando LocalStorage.
- Funcionamento como Progressive Web App (PWA).
- Manifesto para instalação da aplicação.
- Service Worker para gerenciamento de cache e suporte ao funcionamento offline.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- LocalStorage
- Service Worker
- Web App Manifest
- Lighthouse

## Otimizações realizadas

Foram aplicadas otimizações para reduzir o tamanho dos arquivos e melhorar o carregamento da aplicação:

- Minificação do HTML.
- Minificação do CSS.
- Minificação do JavaScript.
- Atualização das referências no HTML para utilizar os arquivos minificados.
- Atualização do Service Worker para armazenar os arquivos otimizados em cache.
- Atualização da versão do cache para garantir que os arquivos novos sejam carregados.

### Arquivos utilizados na versão otimizada

- `index.min.html`
- `style.min.css`
- `script.min.js`

O arquivo `index.min.html` utiliza diretamente as versões minificadas do CSS e do JavaScript.

## Comparação de carregamento

Foi realizada uma comparação entre a versão original e a versão otimizada utilizando a aba Network do Chrome DevTools.

As medições foram realizadas com as mesmas configurações de rede e cache, utilizando a simulação Slow 4G e a opção Disable cache ativada.

| Métrica | Versão original | Versão otimizada | Redução |
|---|---:|---:|---:|
| Transferred | 17.250 B | 15.960 B | 7,48% |
| Resources | 31.260 B | 28.680 B | 8,25% |

### Resultado

A versão otimizada apresentou:

- Redução de 1.290 bytes transferidos pela rede.
- Redução de 2.580 bytes no total de recursos carregados.
- Menor quantidade de dados necessários para carregar a aplicação.

## Resultados do Lighthouse

A avaliação foi realizada utilizando o Chrome DevTools, com as seguintes configurações:

- Dispositivo: Mobile.
- Modo: Navigation.
- Categoria: Performance.
- Rede simulada: Slow 4G.

### Versão otimizada

| Métrica | Resultado |
|---|---:|
| Performance | 100 |
| First Contentful Paint (FCP) | 1,1 s |
| Largest Contentful Paint (LCP) | 1,3 s |
| Total Blocking Time (TBT) | 0 ms |
| Cumulative Layout Shift (CLS) | 0 |
| Speed Index | 1,1 s |

### Versão original

Os resultados do Lighthouse da versão original serão registrados após a execução da análise com as mesmas configurações utilizadas na versão otimizada.

## Evidências

Os relatórios e registros utilizados na comparação estão disponíveis na pasta `evidencias`:

- `evidencias/lighthouse-antes.html` — relatório Lighthouse da versão original.
- `evidencias/lighthouse-depois.html` — relatório Lighthouse da versão otimizada.
- `evidencias/lighthouse-antes.png` — captura dos resultados anteriores.
- `evidencias/lighthouse-depois.png` — captura dos resultados posteriores.

## Estrutura do projeto

```text
diario-de-bordo-pwa/
│
├── index.html
├── index.min.html
├── style.css
├── style.min.css
├── script.js
├── script.min.js
├── manifest.json
├── service-worker.js
│
├── evidencias/
│   ├── lighthouse-antes.html
│   ├── lighthouse-depois.html
│   ├── lighthouse-antes.png
│   └── lighthouse-depois.png
│
└── icons/
    ├── icon-192.png
    └── icon-512.png
```

## Considerações finais

As otimizações reduziram a quantidade de dados transferidos pela rede e o tamanho total dos recursos carregados pela aplicação.

A pontuação de Performance permaneceu em 100 na avaliação da versão otimizada. Os resultados demonstram que a minificação dos arquivos contribuiu para diminuir o volume de dados necessário para carregar a aplicação, mantendo suas funcionalidades.
