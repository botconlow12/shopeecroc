/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
// eslint-disable-next-line camelcase
import { Roboto } from 'next/font/google'

import { Vsl2 } from '@/components/vsl'
import { useEffect, useState } from 'react'
import Header from '@/components/header'
import {
  MainContainer,
  MainContent,
  VslContainer,
} from '@/styles/upsell.styles'

const Vietnam = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
})

export default function Home() {
  const [timePage, setTimePage] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setTimePage(true)
    }, 188000)
  }, [])

  return (
    <>
      <Head>
        <script src="https://pepper.com.br/oneclick.js"></script>
        <title>WhatsPix</title>
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
        <MainContent>
          <Header price="114,26" />

          <VslContainer>
            <h1>
              MEUS <span style={{ color: '#ff580c' }}>PARABÉNS</span> PELA SUA
              COMPRA!
            </h1>
            <p>
              <u>
                Agora falta você desbloquear seu acesso ao ShopeeCash, então não
                atualize, não clique em “voltar” e muito menos feche essa
                página!
              </u>
            </p>
            <Vsl2 />
            <h3>
              ATENÇÃO, VEJA ESSE VÍDEO ATÉ O FINAL PARA ACESSAR O ShopeeCash!
            </h3>
            <script src="https://pepper.com.br/oneclick.js"></script>
            {timePage && (
              <button className="pepperBtn">DESBLOQUEAR SHOPEECASH!</button>
            )}
          </VslContainer>
          <p
            style={{
              color: '#475569',
            }}
          >
            <b>Atenção:</b> ao sair desta página você perderá essa oportunidade
            para sempre!
          </p>
        </MainContent>
      </MainContainer>
    </>
  )
}
