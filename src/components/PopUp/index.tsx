import Image from 'next/image'
import Google from '../../../public/google.webp'
import {
  PopUpAcessories,
  PopUpContainer,
  PopUpContent,
  PopUpDesc,
  PopUpName,
  PopUpRealTime,
} from './styles'
import { CheckCircle, Star } from 'phosphor-react'
import { useEffect, useState } from 'react'

export default function PopUp() {
  const [desapear, setDesapear] = useState(false)
  const [name, setName] = useState('Gabriel Fonseca')
  const [desc, setDesc] = useState(
    'Um verdadeiro tesouro para terapeutas! Imprescindível',
  )

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const names = [
    'João Silva',
    'Maria Santos',
    'Carlos Oliveira',
    'Lucas Rodrigues',
    'Juliana Nunes',
    'Pedro Souza',
    'Gabriela Ferreira',
    'Rafael Costa',
    'Ana Paula',
    'Bruno Gonçalves',
    'Eduardo Pereira',
    'Julio Cesar',
    'Luana Alves',
    'Mateus Machado',
    'Ricardo Almeida',
    'Sabrina Oliveira',
    'Thiago Carvalho',
    'Vinicius Torres',
    'Letícia Rocha',
    'Victor Gomes',
    'Fernanda Borges',
    'Luan Fernandes',
    'Larissa Barros',
    'Bianca Andrade',
    'Rafaela Soares',
    'Rayssa Freitas',
    'Ricardo Costa',
    'Julia Pinto',
    'Diego Ferreira',
    'Isabella Mendes',
  ]
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const descs = [
    'Encontrei minha alma gêmea graças a este produto! É incrível!',
    'O retrato da alma gêmea foi um guia perfeito para o amor verdadeiro.',
    'Meu coração transborda de alegria. Encontrei a pessoa certa.',
    'Nunca imaginei que seria tão fácil encontrar minha alma gêmea.',
    'O produto entregou o amor da minha vida. Estou radiante.',
    'Graças a esse retrato, estou vivendo um conto de fadas.',
    'O retrato foi como um ímã que atraiu minha alma gêmea.',
    'Minha busca terminou aqui. Encontrei o amor verdadeiro.',
    'Estamos construindo um futuro incrível graças ao retrato.',
    'O produto é como um mapa do tesouro para o amor.',
    'O retrato me direcionou para a pessoa certa. Obrigado!',
    'Encontrar minha alma gêmea era um sonho distante até agora.',
    'A conexão que tenho é única e profunda. O retrato fez isso acontecer.',
    'O retrato revelou exatamente o que eu procurava em outras pessoas.',
    'Nossa história de amor começou com o retrato da alma gêmea.',
    'A ferramenta é como um ímã para o amor verdadeiro. Estamos juntos!',
    'Estou vivendo o sonho de encontrar minha alma gêmea.',
    'O retrato me levou diretamente ao amor da minha vida.',
    'Encontrei alguém que é minha outra metade. Estamos juntos.',
    'Graças a este produto, minha vida mudou para melhor.',
    'O retrato foi a chave para o amor verdadeiro. É incrível!',
    'O produto é como um guia que me levou à pessoa certa.',
    'Encontrei a pessoa perfeita que o retrato descreveu.',
    'O retrato me deu esperança de que o amor verdadeiro existe.',
    'Nunca me senti tão conectado com alguém. Obrigado!',
    'Estou maravilhado com a precisão do retrato da alma gêmea.',
    'O amor verdadeiro era um mistério até eu usar esse produto.',
    'A busca pela alma gêmea acabou! O produto cumpriu sua promessa.',
    'Estamos escrevendo nossa história de amor graças a este retrato.',
    'O retrato me direcionou para o amor da minha vida. Obrigado!',
    'Este produto é como uma bússola que me levou diretamente ao amor.',
    'O retrato da alma gêmea é a melhor compra que já fiz.',
    'Minha vida está completa agora que encontrei minha alma gêmea.',
    'O retrato não apenas descreveu, mas também desencadeou um amor profundo.',
    'Encontrei minha alma gêmea e estou transbordando de felicidade.',
  ]

  useEffect(() => {
    if (desapear)
      setTimeout(() => {
        setDesapear(false)
        setName(names[Math.floor(Math.random() * names.length)])
        setDesc(descs[Math.floor(Math.random() * descs.length)])
      }, 6000)
    else
      setTimeout(() => {
        setDesapear(true)
      }, 20000)
  }, [desapear, names, descs])

  return (
    <>
      <PopUpContainer open={desapear}>
        <div>
          <Image
            src={Google}
            alt="google"
            quality={100}
            width={55}
            height={55}
          />
        </div>
        <PopUpContent>
          <PopUpName>
            <p>{name}</p>
            <p>avaliou:</p>
          </PopUpName>
          <PopUpDesc>
            <p>{desc}</p>
          </PopUpDesc>
          <PopUpAcessories>
            <div>
              <Star size={14} weight="fill" color="#ffdd62" />
              <Star size={14} weight="fill" color="#ffdd62" />
              <Star size={14} weight="fill" color="#ffdd62" />
              <Star size={14} weight="fill" color="#ffdd62" />
              <Star size={14} weight="fill" color="#ffdd62" />
            </div>
            <PopUpRealTime>
              <CheckCircle size={17} weight="fill" color="#6eb2a6" />
              <p>Tempo Real</p>
            </PopUpRealTime>
          </PopUpAcessories>
        </PopUpContent>
      </PopUpContainer>
    </>
  )
}
