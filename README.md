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

As avaliações foram realizadas utilizando o Chrome DevTools, com as seguintes configurações:

- Dispositivo: Mobile.
- Modo: Navigation.
- Categoria: Performance.
- Rede simulada: Slow 4G.

### Comparação dos resultados

| Métrica | Versão original | Versão otimizada |
|---|---:|---:|
| Performance | 97 | 100 |
| First Contentful Paint (FCP) | 1,9 s | 1,1 s |
| Largest Contentful Paint (LCP) | 2,1 s | 1,3 s |
| Total Blocking Time (TBT) | 0 ms | 0 ms |
| Cumulative Layout Shift (CLS) | 0 | 0 |
| Speed Index | 2,6 s | 1,1 s |

### Análise dos resultados

Após as otimizações, a pontuação de Performance passou de 97 para 100.

Também houve redução nos tempos de carregamento:

- FCP: redução de 0,8 segundo.
- LCP: redução de 0,8 segundo.
- Speed Index: redução de 1,5 segundo.

O Total Blocking Time permaneceu em 0 ms e o Cumulative Layout Shift permaneceu em 0, demonstrando que a aplicação manteve sua estabilidade visual e capacidade de resposta durante o carregamento.

## Evidências

Os relatórios e registros utilizados na comparação estão disponíveis na pasta `evidencias`:

- [Relatório antes da otimização (HTML)](diario-de-bordo/evidencias/lighthouse-antes.html)
- [Relatório antes da otimização (PNG)](diario-de-bordo/evidencias/lighthouse-antes.png)
- [Relatório depois da otimização (HTML)](diario-de-bordo/evidencias/lighthouse-depois.html)
- [Relatório depois da otimização (PNG)](diario-de-bordo/evidencias/lighthouse-depois.png)

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

As otimizações realizadas reduziram o volume de dados transferidos pela rede e o tamanho total dos recursos carregados pela aplicação.

A pontuação de Performance passou de 97 para 100, acompanhada pela melhora nos indicadores de carregamento FCP, LCP e Speed Index.

Os resultados demonstram que a minificação dos arquivos e os ajustes realizados contribuíram para melhorar o desempenho da aplicação, mantendo suas funcionalidades.
