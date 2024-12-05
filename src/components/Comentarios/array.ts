import Perfil2 from '../../../public/perfil2.webp'
import Perfil3 from '../../../public/perfil3.webp'
import Perfil6 from '../../../public/perfil6.webp'
import Perfil14 from '../../../public/perfil14.webp'
import Perfil15 from '../../../public/perfil15.webp'
import Perfil17 from '../../../public/perfil17.webp'
import Perfil18 from '../../../public/perfil18.webp'
import Perfil20 from '../../../public/perfil20.webp'
import Perfil25 from '../../../public/perfil25.webp'
import Perfil27 from '../../../public/perfil27.webp'
import Perfil1 from '../../../public/perfil1.webp'

interface LocationProps {
  city: string
  region: string
}

export const comentarios = (location: LocationProps) => [
  {
    src: Perfil2,
    name: 'Francisca Santos',
    desc: 'O único site que realmente funciona comigo já tinha tentado de tudo para conseguir ganhar uma renda extra, resolvi então utilizar esse app , e consegui fazer 1300 na primeira semana, estou muito feliz e também muito aliviada porque se não fosse esse site eu nunca iria poder sair e comprar o que eu realmente quero, e não o que meu bolso pode !! muito bom mesmo recomendo pessoal!',
    time: '1 hora',
    ammount: 49,
    hasRespostas: false,
    respostas: [],
  },
  {
    src: Perfil6,
    name: 'Carla Fernandes',
    desc: `Alguém aqui do ${
      location.region === 'undefined' ? 'Sul' : location.region
    } já baixou? quero saber se os 100 reais cai mesmo na conta.`,
    time: '2 horas',
    ammount: 67,
    hasRespostas: true,
    respostas: [
      {
        src: Perfil14,
        name: 'Lúcia Oliveira',
        desc: `Oi carla, sim sou de ${
          location.city === 'undefined' ? 'Curitiba' : location.city
        }. aqui deu certo, baixei o app e em menos de 10 minutos caiu na minha conta! Vale a pena.`,
        time: '1 hora',
        ammount: 49,
      },
      {
        src: Perfil6,
        name: 'Carla Fernandes',
        desc: 'que ótimo, vou baixar agora, obrigada',
        time: '1 hora',
        ammount: 32,
      },
    ],
  },
  {
    src: Perfil17,
    name: 'Bruna Carvalho',
    desc: 'minha conta demorou mais de meia hora pra ser ativada por que? no vídeo foi tudo automatico por que o da minha demorou esse tempo todo pra ser ativada?',
    time: '7 horass',
    ammount: 76,
    hasRespostas: true,
    respostas: [
      {
        src: Perfil1,
        name: 'Lucas Fernando',
        desc: 'Olá Bruna, peço desculpas pela demora. Estavamos em manutenção! Já ativamos sua conta você já tem acesso total ao app!',
        time: '7 horas',
        ammount: 111,
      },
      {
        src: Perfil17,
        name: 'Bruna Carvalho',
        desc: 'consegui acessar aqui, já fiz meus primeiros 30 reais',
        time: '10 horas',
        ammount: 96,
      },
      {
        src: Perfil15,
        name: 'Juliana Pacheco',
        desc: 'Funciona mesmo bruna? to achando que é golpe isso ai',
        time: '6 horas',
        ammount: 56,
      },
      {
        src: Perfil17,
        name: 'Bruna Carvalho',
        desc: 'aqui deu certo sim, fiz 50 reais já e saquei, caiu certinho. Pode baixar ai, tenho certeza de que você vai adorar Juliana',
        time: '4 horas',
        ammount: 46,
      },
      {
        src: Perfil15,
        name: 'Juliana Pacheco',
        desc: 'O preço ta bom, vou dar uma chance',
        time: '3 horas',
        ammount: 54,
      },
    ],
  },
  {
    src: Perfil27,
    name: 'Rodrigo Moraes',
    desc: 'Galera, não tem o aplicativo nas lojas de aplicativos, só tem aqui! Consegui instalar aqui, de boa, fiz 735 essa semana já!',
    time: '3 horas',
    ammount: 65,
    hasRespostas: false,
    respostas: [],
  },
  {
    src: Perfil25,
    name: 'Ana Ribeiro',
    desc: 'Confesso que estava desconfiada, mas decidi baixar. Fiquei surpresa ao ver o primeiro pix caindo na minha conta',
    time: '5 horas',
    ammount: 84,
    hasRespostas: false,
    respostas: [],
  },
  {
    src: Perfil18,
    name: 'Rachel Fogaça',
    desc: 'Vou dar uma chance a esse app. Espero que eu não me decepcione.',
    time: '8 horas',
    ammount: 126,
    hasRespostas: true,
    respostas: [
      {
        src: Perfil1,
        name: 'Lucas Fernando',
        desc: 'Pode ficar tranquilo, nós temos garantia incondicional de 7 dias, se você não gostar do app ou não servir pra você, te devolvemos 100% do seu dinheiro.',
        time: '8 horas',
        ammount: 111,
      },
      {
        src: Perfil18,
        name: 'Rachel Fogaça',
        desc: 'Obrigado, decidi confiar em você e funcionou, ainda não saquei mas já consegui acessar, obrigado',
        time: '9 horas',
        ammount: 96,
      },
    ],
  },
  {
    src: Perfil20,
    name: 'José Silva',
    desc: 'Comprei o app e estou impressionado com a facilidade de mexer, pra mim que sou leigo nessas coisas funcionou legal',
    time: '5 horas',
    ammount: 45,
    hasRespostas: false,
    respostas: [],
  },
  {
    src: Perfil3,
    name: 'Elvira Gonçalves',
    desc: 'uso ele tem 8 meses, me ajuda bastante a ter uma renda extra no fim do mês, faço 4000 por mês sem esforço, mais o meu salário, consigo viver uma vida com fartura!',
    time: '7 horas',
    ammount: 68,
    hasRespostas: false,
    respostas: [],
  },
]
