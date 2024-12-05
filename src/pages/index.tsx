/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
// eslint-disable-next-line camelcase
import { Roboto } from 'next/font/google'
import Umidi from '../../public/umidi.webp'
import Dispenser from '../../public/dispenser.webp'
import Belo from '../../public/belo.webp'
import Fone from '../../public/fone.webp'
import Check from '../../public/check.webp'
import Pix from '../../public/pix.svg'

import {
  BoxContainer,
  BoxContainer3,
  BoxContainer4,
  BoxContainer5,
  BoxContainer6,
  InputContainer,
  MainContainer,
  MainContent,
  ModalButton,
  ModalContent,
  ModalOverlay,
  SeguroContainer,
} from '@/styles/index.styles'
import { useState } from 'react'
import Image from 'next/image'
import { LockSimple, PaperPlaneRight } from 'phosphor-react'
import Header from '@/components/header'
import Questionario from '../components/Questionario'

const Vietnam = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
})

export default function Home() {
  const [page, setPage] = useState(0)
  const [name, setName] = useState('')

  return (
    <>
      <Head>
        <title>ShopeeCash</title>
        <meta name="description" content="Terapeuta Transforma" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo2.png" />
        <script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          async
          defer
        ></script>
      </Head>

      <MainContainer className={Vietnam.className}>
        {page === 0 ? (
          <MainContent>
            <Header price="00,00" />
            <BoxContainer>
              <h1>
                Bem vindo ao <span style={{ color: '#ff580c' }}>Shopee</span>
                Cash!
              </h1>
              <InputContainer>
                <p>Digite seu nome:</p>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <div>
                  <button onClick={() => setPage(1)} disabled={!name}>
                    Continuar
                  </button>
                </div>
              </InputContainer>
            </BoxContainer>
            <SeguroContainer>
              <LockSimple size={15} color="#fff" weight="fill" />
              <p>100% Seguro e Confiável</p>
            </SeguroContainer>
          </MainContent>
        ) : page === 1 ? (
          <MainContent>
            <Header price="00,00" />
            <BoxContainer>
              <h1>
                É UM PRAZER{' '}
                <span style={{ color: '#ff580c' }}>TER VOCÊ AQUI!</span>
              </h1>
              <p>
                O aplicativo da Shopee precisa de você e estão dispotos a pagar
                muito bem por isso!
              </p>
              <div>
                <button onClick={() => setPage(2)}>
                  Quero ganhar R$100,00 ainda hoje!
                </button>
              </div>
            </BoxContainer>
            <SeguroContainer>
              <LockSimple size={15} color="#fff" weight="fill" />
              <p>100% Seguro e Confiável</p>
            </SeguroContainer>
          </MainContent>
        ) : page === 2 ? (
          <MainContent>
            <Header price="00,00" />
            <BoxContainer3>
              <Questionario
                ganhos="25,00"
                marca="Umidificador Ultrassônico"
                foto={Umidi}
                pergunta1="Sobre o Umidificador, você já teve interesse em adquirir esse produto?"
                resposta1="Sim"
                resposta2="Não"
                pergunta2="Você investiria R$ 47,99 nesse produto?"
                resposta3="Sim"
                resposta4="Não"
              />
              <button onClick={() => setPage(3)}>
                <PaperPlaneRight size={20} color="#fff" /> Enviar respostas
              </button>
            </BoxContainer3>
          </MainContent>
        ) : page === 3 ? (
          <MainContent>
            <Header price="25,00" />
            <BoxContainer4>
              <Questionario
                ganhos="26,80"
                marca="Maquina de Barbear"
                foto={Belo}
                pergunta1="Sobre a maquina de barbear, você já teve interesse em adquirir esse produto?"
                resposta1="Sim"
                resposta2="Não"
                pergunta2="Você investiria R$ 19,99 nesse produto?"
                resposta3="Sim"
                resposta4="Não"
              />
              <button onClick={() => setPage(4)}>
                <PaperPlaneRight size={20} color="#fff" /> Enviar respostas
              </button>
            </BoxContainer4>
          </MainContent>
        ) : page === 4 ? (
          <MainContent>
            <Header price="51,80" />
            <BoxContainer5>
              <Questionario
                ganhos="29,90"
                marca="Dispenser Automático"
                foto={Dispenser}
                pergunta1="Sobre o dispenser automático, você já teve interesse em adquirir esse produto?"
                resposta1="Sim"
                resposta2="Não"
                pergunta2="Você investiria R$ 32,49 nesse produto?"
                resposta3="Sim"
                resposta4="Não"
              />
              <button onClick={() => setPage(5)}>
                <PaperPlaneRight size={20} color="#fff" /> Enviar respostas
              </button>
            </BoxContainer5>
          </MainContent>
        ) : page === 5 ? (
          <MainContent>
            <Header price="81,70" />
            <BoxContainer6>
              <Questionario
                ganhos="32,56"
                marca="Fone Bluetooth"
                foto={Fone}
                pergunta1="Sobre o Fone Bluetooth, você já teve interesse em adquirir esse produto?"
                resposta1="Sim"
                resposta2="Não"
                pergunta2="Você investiria R$ 21,99 nesse produto?"
                resposta3="Sim"
                resposta4="Não"
              />
              <button onClick={() => setPage(6)}>
                <PaperPlaneRight size={20} color="#fff" /> Enviar respostas
              </button>
            </BoxContainer6>
          </MainContent>
        ) : page === 6 ? (
          <MainContent>
            <Header price="114,26" />
            <ModalOverlay>
              <ModalContent onClick={(e) => e.stopPropagation()}>
                <Image alt="check" quality={100} src={Check} width={130} />
                <h2>Parabéns!</h2>
                <p>Você acumulou R$ 114,26 por ter respondido as pesquisas.</p>

                <ModalButton href="/saque">
                  <Image
                    alt="pix"
                    quality={100}
                    src={Pix}
                    width={25}
                    height={25}
                  />
                  SACAR AGORA!
                </ModalButton>
              </ModalContent>
            </ModalOverlay>
          </MainContent>
        ) : (
          ''
        )}
      </MainContainer>
    </>
  )
}
