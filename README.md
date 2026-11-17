📓 Diário de Bordo — PWA

Aplicação web progressiva (PWA) desenvolvida para registrar, consultar e remover atividades diárias. O projeto utiliza HTML5, CSS3 e JavaScript puro, com armazenamento local e suporte ao funcionamento offline.

🚀 Funcionalidades

Cadastro de entradas com título, descrição e data.

Listagem de registros.

Remoção de entradas.

Persistência de dados utilizando LocalStorage.

Indicador de conexão (online/offline).

Instalação como aplicativo (PWA).

Funcionamento offline por meio de Service Worker.

Interface responsiva para dispositivos móveis e desktops.

🛠️ Tecnologias utilizadas

HTML5

CSS3

JavaScript

LocalStorage

Service Worker

Web App Manifest

Lighthouse

⚡ Otimizações de desempenho

Foi realizada uma etapa de otimização para reduzir o tamanho dos arquivos e melhorar a eficiência do carregamento da aplicação.

Alterações realizadas

Minificação do HTML: remoção de espaços e quebras de linha desnecessárias.

Minificação do CSS: redução do tamanho do arquivo, preservando as regras de estilo e responsividade.

Minificação do JavaScript: redução do código sem alterar suas funcionalidades.

Atualização do HTML: alteração das referências para utilizar os arquivos minificados.

Atualização do Service Worker: inclusão dos novos arquivos no cache e atualização da versão do cache para v2.

Arquivos otimizados

style.min.css

script.min.js

index.min.html

Os arquivos originais foram preservados para referência.

Imagens

O projeto não utiliza imagens de conteúdo. Apenas ícones PNG são utilizados para identificação e instalação do PWA. Por isso, o carregamento tardio de imagens (loading="lazy") não foi necessário.

Bibliotecas externas

A aplicação não utiliza frameworks ou bibliotecas externas em sua execução, mantendo uma estrutura leve e independente.

📊 Comparação de desempenho — Lighthouse

Foram realizados testes antes e depois das otimizações utilizando o Lighthouse, no modo Mobile.

Métrica

Antes

Depois

Performance

100

100

First Contentful Paint (FCP)

0,8 s

1,1 s

Largest Contentful Paint (LCP)

0,9 s

1,3 s

Análise dos resultados

A pontuação de Performance permaneceu em 100 após as otimizações.

Entretanto, os indicadores FCP e LCP apresentaram um pequeno aumento no segundo teste.

Isso demonstra que a minificação reduziu o código desnecessário, mas não produziu uma melhora mensurável nos tempos de carregamento nessa execução.

Como a aplicação já apresentava excelente desempenho inicial, as otimizações tiveram como objetivo principalmente reduzir o tamanho dos recursos e manter a eficiência do projeto.

🧪 Testes realizados

Após as alterações, foram realizados testes para verificar:

Cadastro de novas entradas.

Remoção de registros.

Persistência dos dados após atualizar a página.

Funcionamento offline.

Carregamento dos arquivos minificados.

Auditoria de desempenho com Lighthouse.

Todas as funcionalidades testadas continuaram operando corretamente.

📸 Evidências

Os relatórios do Lighthouse estão disponíveis na pasta evidencias:

lighthouse-antes.png — relatório anterior às otimizações.

lighthouse-depois.png — relatório posterior às otimizações.

📂 Estrutura do projeto

diario-de-bordo/
├── index.html
├── index.min.html
├── style.css
├── style.min.css
├── script.js
├── script.min.js
├── manifest.json
├── service-worker.js
├── .gitignore
├── README.md
├── evidencias/
│   ├── lighthouse-antes.png
│   └── lighthouse-depois.png
└── icons/
    ├── icon-192.png
    └── icon-512.png

🎯 Objetivo do projeto

Aplicar conceitos de desenvolvimento web, Progressive Web Apps (PWA), armazenamento local, funcionamento offline e otimização de desempenho, utilizando ferramentas de análise como o Lighthouse.

Projeto desenvolvido como atividade prática de desenvolvimento web e otimização de desempenho.
