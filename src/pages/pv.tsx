/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
// eslint-disable-next-line camelcase
import { Roboto } from 'next/font/google'

import {
  ComentContainer,
  DescontoContainer,
  MainContainer,
  MainContent,
  VslContainer,
  VslHeadline,
} from '@/styles/pv.styles'
import { Vsl } from '@/components/vsl'
import { Comentarios } from '@/components/Comentarios'
import BuyButton from '@/components/BuyButton'
import { useEffect, useState } from 'react'
import Header from '@/components/header'
import { LockSimpleOpen } from 'phosphor-react'

const Vietnam = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
})

export default function Home() {
  const [timePage, setTimePage] = useState(false)
  const [count, setCount] = useState(26)

  useEffect(() => {
    setTimeout(() => {
      setTimePage(true)
    }, 960000)
  }, [])

  useEffect(() => {
    if (!timePage) {
      return
    }

    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount <= 1) {
          clearInterval(interval)
          return 1
        } else {
          return prevCount - 1
        }
      })
    }, 3500)

    return () => clearInterval(interval)
  }, [timePage])

  return (
    <>
      <Head>
        <link rel="dns-prefetch" href="https://vz-cb3e51cc-16c.b-cdn.net" />
        <title>ShopeeCash - Download</title>
        <meta name="description" content="APP WhatsPix" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo2.png" />
        <script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          async
          defer
        ></script>
      </Head>

      <MainContainer className={Vietnam.className}>
        <MainContent>
          <Header price="114,26" />
          <VslContainer>
            <h1>
              Ganhe até{' '}
              <span style={{ color: '#ff580c' }}>500 reais por dia</span>{' '}
              Avaliando produtos com esse aplicativo que tem{' '}
              <span style={{ color: '#ff580c' }}>parceria com a Shopee</span>
            </h1>
            <Vsl />
            <VslHeadline>
              <LockSimpleOpen size={32} color="#ff580c" />
              <p>
                Assista até o final para{' '}
                <span style={{ color: '#ff580c' }}>liberar seu acesso</span>
              </p>
            </VslHeadline>
          </VslContainer>

          {timePage && (
            <DescontoContainer>
              <h3>
                RESTAM{' '}
                <span
                  style={{
                    color: 'red',
                    textShadow: 'rgba(255, 0, 0, 0.59) 0px 0px 10px',
                  }}
                >
                  {count}
                </span>{' '}
                VAGAS
              </h3>
              <p>por apenas 5x de 5,89 ou</p>
              <h1>R$ 27,00</h1>
              <BuyButton title="QUERO REALIZAR MEU CADASTRO!" />
            </DescontoContainer>
          )}
          <ComentContainer>
            <h2>
              <u>DEIXE SEU DEPOIMENTO!</u>
            </h2>
            <Comentarios />
          </ComentContainer>
        </MainContent>
      </MainContainer>
    </>
  )
}
