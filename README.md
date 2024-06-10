# Muscle Car Legends

Bem-vindo ao projeto "Muscle Car Legends"! Este projeto é uma homenagem aos icônicos muscle cars dos anos 1970, combinando minha paixão pelo automobilismo com habilidades adquiridas em desenvolvimento web. 

## Descrição

O site "Muscle Car Legends" apresenta alguns dos mais famosos muscle cars dos anos 1970, incluindo Chevrolet Camaro Z28, Dodge Challenger, Ford Mustang Boss 302, Plymouth Barracuda, Pontiac Firebird Trans Am e Chevrolet Chevelle SS. Cada carro é exibido com uma imagem e uma descrição detalhada, destacando suas características e história.

## Funcionalidades

- **Slider de Carros:** Navegue entre diferentes carros usando botões de seta.
- **Animação no Cabeçalho:** O título "Muscle Car Legends" possui uma animação de foco, criando um efeito de entrada impressionante.

## Tecnologias Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript**

## Animação no Cabeçalho

O título do cabeçalho possui uma animação que aplica um efeito de foco ao texto. A animação é definida com `@keyframes` e `@-webkit-keyframes`, criando um efeito suave de desfoque que gradualmente traz o texto para foco total.

```css
.cabecalho h1 {
    color: #F1ECFF;
    font-size: 45px;
    letter-spacing: 0.52083vw;
    text-transform: uppercase;
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

## Estrutura do Projeto

```plaintext
.
├── src
│   ├── css
│   │   ├── reset.css
│   │   ├── estilos.css
│   │   └── responsivo.css
│   ├── imagens
│   │   ├── camaro-z28.png
│   │   ├── dodge-challenger.png
│   │   ├── mustang-boss-302.png
│   │   ├── plymouth-barracuda.png
│   │   ├── pontiac-trans-am.png
│   │   └── chevelle-ss.png
│   ├── js
│   │   └── script.js
│   └── audio
│       └── SmokeOnTheWater.mp3 (não utilizado devido a restrições do navegador)
└── index.html
```

## Como Usar

1. **Clone o repositório:**

```bash
git clone https://github.com/eng-joaoelias/muscle-car-legends.git
```

2. **Navegue até o diretório do projeto:**

```bash
cd muscle-car-legends
```

3. **Abra o arquivo `index.html` no seu navegador:**

Você pode simplesmente clicar duas vezes no arquivo ou usar uma extensão de servidor local como "Live Server" para VSCode.

## Contato

Se você tiver alguma dúvida ou sugestão, sinta-se à vontade para entrar em contato:

- LinkedIn: [Meu LinkedIn](https://www.linkedin.com/in/jo%C3%A3o-elias-ferraz-santana-9a47a218a/)

Espero que você aproveite explorar o "Muscle Car Legends" tanto quanto eu aproveitei desenvolvê-lo!
