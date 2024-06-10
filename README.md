# Muscle Car Legends

"Muscle Car Legends" é um projeto web que celebra os icônicos muscle cars dos anos 1970. Inspirado na potência e no design arrojado desses veículos clássicos, esta página apresenta uma galeria de carros lendários, cada um com uma descrição detalhada. O projeto utiliza animações CSS para criar uma experiência visual atraente e dinâmica.

## Visão Geral

### Funcionalidades

- **Galeria de Muscle Cars**: Exibição de alguns dos muscle cars mais famosos dos anos 1970, incluindo Chevrolet Camaro Z28, Dodge Challenger, Ford Mustang Boss 302, e mais.
- **Animação do Cabeçalho**: Uma animação de foco de texto no título da página para uma entrada visualmente impressionante.

### Tecnologias Utilizadas

- **HTML5**: Para estruturação do conteúdo.
- **CSS3**: Para estilização e animações.
- **JavaScript**: Para interatividade (navegação através dos carros).
- **Google Fonts**: Para a fonte 'Outfit'.

## Estrutura do Projeto

```bash
MuscleCarLegends/
├── src/
│   ├── css/
│   │   ├── estilos.css
│   │   ├── reset.css
│   │   └── responsivo.css
│   ├── imagens/
│   │   ├── camaro-z28.jpg
│   │   ├── dodge-challenger.jpg
│   │   ├── mustang-boss-302.jpg
│   │   ├── plymouth-barracuda.jpg
│   │   ├── pontiac-trans-am.jpg
│   │   └── chevelle-ss.jpg
│   ├── js/
│   │   └── script.js
├── index.html
└── README.md
```

## Instruções de Uso

1. **Clonar o Repositório**

    ```bash
    git clone https://github.com/eng-joaoelias/muscle-car-legends.git
    ```

2. **Abrir o Arquivo HTML**

    Abra o arquivo `index.html` em seu navegador preferido.

## Animações CSS

O título do cabeçalho utiliza uma animação de foco de texto para criar uma entrada visualmente impressionante. Aqui está o código CSS usado para essa animação:

```css
.cabecalho h1 {
    /*
        [...]
    Estilos do <h1>
        [...]
    */

    /*Chamada para as animações*/
    -webkit-animation: text-focus-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
    animation: text-focus-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
}

@-webkit-keyframes text-focus-in {
    0% {
        -webkit-filter: blur(12px);
        filter: blur(12px);
        opacity: 0;
    }
    100% {
        -webkit-filter: blur(0px);
        filter: blur(0px);
        opacity: 1;
    }
}

@keyframes text-focus-in {
    0% {
        -webkit-filter: blur(12px);
        filter: blur(12px);
        opacity: 0;
    }
    100% {
        -webkit-filter: blur(0px);
        filter: blur(0px);
        opacity: 1;
    }
}
```

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests com melhorias.

## Licença

Este projeto está licenciado sob a [GPLv3](LICENSE).

## Agradecimentos

Este projeto é uma homenagem à era de ouro dos muscle cars dos anos 1970, refletindo minha paixão pessoal pelo automobilismo e a alegria de aprender e aplicar novas tecnologias web.
