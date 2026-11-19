# Diário de Bordo

Aplicação web desenvolvida como um diário pessoal, permitindo registrar atividades diárias, organizar anotações e consultar registros diretamente pelo navegador.

O projeto utiliza tecnologias web e recursos de Progressive Web App (PWA), oferecendo suporte à instalação e ao funcionamento offline.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Service Worker
- Web App Manifest
- LocalStorage
- Lighthouse

## Funcionalidades

- Cadastro de entradas com título, descrição e data.
- Armazenamento dos registros no dispositivo.
- Consulta das entradas cadastradas.
- Instalação como aplicativo (PWA).
- Suporte ao funcionamento offline.

## Otimizações de desempenho

Foram realizadas melhorias com o objetivo de reduzir o tempo de carregamento e melhorar o desempenho da aplicação.

Principais otimizações:

- Minificação do HTML.
- Minificação do CSS.
- Minificação do JavaScript.
- Utilização dos arquivos `style.min.css` e `script.min.js`.
- Atualização da versão do cache do Service Worker.
- Armazenamento dos principais arquivos da aplicação para acesso offline.

## Comparação de desempenho

Os resultados foram obtidos utilizando o Google Lighthouse 13.5.0, com emulação de Moto G Power e conexão Slow 4G.

| Métrica | Antes | Depois |
|---|---:|---:|
| Performance | 97 | 100 |
| First Contentful Paint (FCP) | 1,9 s | 1,1 s |
| Largest Contentful Paint (LCP) | 2,1 s | 1,3 s |
| Total Blocking Time (TBT) | 0 ms | 0 ms |
| Cumulative Layout Shift (CLS) | 0 | 0 |
| Speed Index | 2,6 s | 1,1 s |

### Resultados

- A pontuação de Performance passou de 97 para 100.
- O FCP apresentou redução de aproximadamente 42%.
- O LCP apresentou redução de aproximadamente 38%.
- O Speed Index apresentou redução de aproximadamente 58%.
- O TBT e o CLS permaneceram em 0.

## Relatórios Lighthouse

Os relatórios completos utilizados na comparação estão disponíveis na pasta `evidencias`.

- [Relatório antes da otimização (HTML)](evidencias/lighthouse-antes.html)
- [Relatório antes da otimização (PNG)](evidencias/lighthouse-antes.png)
- [Relatório depois da otimização (HTML)](evidencias/lighthouse-depois.html)
- [Relatório depois da otimização (PNG)](evidencias/lighthouse-depois.png)

## Estrutura do projeto

```text
diario-de-bordo/
├── evidencias/
│   ├── lighthouse-antes.html
│   ├── lighthouse-antes.png
│   ├── lighthouse-depois.html
│   └── lighthouse-depois.png
├── icons/
│   ├── icon-192.png
│   └── icon-512.png
├── index.html
├── index.min.html
├── manifest.json
├── script.js
├── script.min.js
├── service-worker.js
├── style.css
└── style.min.css
```

## Considerações finais

A otimização permitiu melhorar o desempenho geral da aplicação, alcançando pontuação 100 no Lighthouse.

O projeto demonstra a aplicação prática de técnicas de otimização de arquivos, gerenciamento de cache e avaliação de desempenho utilizando ferramentas de auditoria web.