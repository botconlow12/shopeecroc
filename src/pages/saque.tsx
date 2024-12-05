/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
// eslint-disable-next-line camelcase
import { Roboto } from 'next/font/google'
import { useState } from 'react'
import Check from '../../public/check.webp'

import {
  Input,
  InputLabel,
  InputSaque,
  MainContainer,
  MainContent,
  ModalContent,
  ModalOverlay,
  PixKeySelector,
  Select,
  WithdrawButton,
  WithdrawContainer,
  WithdrawContent,
  WithdrawTitle,
} from '@/styles/saque.styles'

import Image from 'next/image'
import Header from '@/components/header'

const Vietnam = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
})

type PixKeyType = 'cpf' | 'phone' | 'email'

export default function Home() {
  const [pixKey, setPixKey] = useState<PixKeyType>('cpf')
  const [saqueValue, setSaqueValue] = useState('')
  const [pixKeyValue, setPixKeyValue] = useState('')
  const [modalVisible, setModalVisible] = useState(false)

  const closeModal = () => {
    setModalVisible(false)
  }

  // Função para formatar o input com base no tipo de chave Pix
  const formatInput = (value: string, type: PixKeyType): string => {
    switch (type) {
      case 'cpf':
        return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
      case 'phone':
        return value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
      case 'email':
        return value.toLowerCase()
      default:
        return value
    }
  }

  // Manipulador de alteração do tipo de chave Pix
  const handlePixKeyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const type = e.target.value as PixKeyType
    setPixKey(type)
    setPixKeyValue('') // Limpa o valor do input de chave Pix ao mudar o tipo de chave Pix
  }

  // Manipulador de alteração do valor do input de saque
  const handleSaqueInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSaqueValue(value)
  }

  // Manipulador de alteração do valor do input de chave Pix
  const handlePixKeyInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setPixKeyValue(formatInput(value, pixKey))
  }

  // Manipulador de clique no botão de saque
  const handleWithdraw = () => {
    const saqueValueAsNumber = parseFloat(saqueValue.replace(',', '.'))

    if (saqueValueAsNumber > 114.27) {
      alert('O saque máximo é de 114,26 reais.')
    } else {
      setModalVisible(true)
    }
  }
  return (
    <>
      <Head>
        <link rel="dns-prefetch" href="https://vz-cb3e51cc-16c.b-cdn.net" />
        <title>ShopeeCash - Solicitar Saque</title>
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
          <WithdrawContainer>
            <WithdrawTitle>
              <h1>Solicitar Saque</h1>
            </WithdrawTitle>
            <WithdrawContent>
              <PixKeySelector>
                <InputLabel>Valor:</InputLabel>
                <InputSaque>
                  <p>R$</p>
                  <Input
                    type="number"
                    placeholder={'114,26'}
                    value={saqueValue}
                    onChange={handleSaqueInputChange}
                    style={{
                      borderTopLeftRadius: '0',
                      borderBottomLeftRadius: '0',
                    }}
                  />
                </InputSaque>
              </PixKeySelector>
              <PixKeySelector>
                <InputLabel>Tipo de Chave Pix:</InputLabel>
                <Select value={pixKey} onChange={handlePixKeyChange}>
                  <option value="cpf">CPF</option>
                  <option value="phone">Telefone</option>
                  <option value="email">E-mail</option>
                </Select>
              </PixKeySelector>
              <PixKeySelector>
                <InputLabel>{` ${
                  pixKey === 'cpf'
                    ? 'CPF:'
                    : pixKey === 'phone'
                    ? 'Telefone:'
                    : 'E-mail:'
                }`}</InputLabel>
                <Input
                  type="text"
                  placeholder={` ${
                    pixKey === 'cpf'
                      ? '000.000.000-00'
                      : pixKey === 'phone'
                      ? '(11) 99927-2341'
                      : 'nome@email.com'
                  }`}
                  value={pixKeyValue}
                  onChange={handlePixKeyInputChange}
                />
              </PixKeySelector>
              <WithdrawButton onClick={handleWithdraw}>
                SACAR SALDO
              </WithdrawButton>
            </WithdrawContent>
          </WithdrawContainer>
          {modalVisible && (
            <ModalOverlay onClick={closeModal}>
              <ModalContent onClick={(e) => e.stopPropagation()}>
                <Image alt="check" quality={100} src={Check} width={150} />
                <h1>IMPORTANTE!</h1>
                <p>
                  Foi identificado que você ainda{' '}
                  <b>não efetuou o download do nosso aplicativo.</b> Para
                  garantir que você consiga sacar o valor solicitado de{' '}
                  <b>R$ {saqueValue}</b>, é preciso instalar o app.{' '}
                  <b>Depois de baixar,</b> o dinheiro será transferido para a
                  chave PIX: <b>{pixKeyValue}.</b> Agradecemos sua compreensão!
                </p>
                <p>
                  <b>ATENÇÃO:</b> Caso não seja feito o download do app em até 2
                  horas, informamos que <b>seu saldo será zerado!</b>
                </p>
                <a href="/pv">BAIXAR APP AGORA!</a>
              </ModalContent>
            </ModalOverlay>
          )}
        </MainContent>
      </MainContainer>
    </>
  )
}
