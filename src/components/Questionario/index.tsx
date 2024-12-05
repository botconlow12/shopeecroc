import {
  Question,
  Smiley,
  SmileyBlank,
  SmileyMeh,
  SmileyNervous,
  SmileySad,
} from 'phosphor-react'
import {
  QuestionContainer,
  RespondaContainer,
  SelectConent,
  SelectConent2,
  SelectContainer,
} from './styles'
import Image, { StaticImageData } from 'next/image'
import { useState } from 'react'

interface QuestionarioProps {
  ganhos: string
  marca: string
  foto: StaticImageData
  pergunta1: string
  resposta1: string
  resposta2: string
  pergunta2: string
  resposta3: string
  resposta4: string
}

export default function Questionario({
  ganhos,
  marca,
  foto,
  pergunta1,
  resposta1,
  resposta2,
  pergunta2,
  resposta3,
  resposta4,
}: QuestionarioProps) {
  const [selectedButton, setSelectedButton] = useState<number | null>(null)

  const handleButtonClick = (buttonIndex: number) => {
    setSelectedButton(buttonIndex === selectedButton ? null : buttonIndex)
  }

  const [selectedButton2, setSelectedButton2] = useState<number | null>(null)

  const handleButtonClick2 = (buttonIndex2: number) => {
    setSelectedButton2(buttonIndex2 === selectedButton2 ? null : buttonIndex2)
  }

  const [selectedButton3, setSelectedButton3] = useState<number | null>(null)

  const handleButtonClick3 = (buttonIndex3: number) => {
    setSelectedButton3(buttonIndex3 === selectedButton3 ? null : buttonIndex3)
  }
  return (
    <>
      <QuestionContainer>
        <Question size={18} color="#000" />
        <h3>Perguntas</h3>
      </QuestionContainer>
      <RespondaContainer>
        <h3>RESPONDA E GANHE R$ {ganhos}</h3>
        <p>Pagamento feito por Pix</p>
      </RespondaContainer>
      <Image alt="nubank" quality={100} src={foto} width={230} />
      <SelectContainer>
        <p>De 0 a 5, que nota você dá para o {marca}?</p>
        <SelectConent>
          <button
            onClick={() => handleButtonClick(1)}
            style={{
              background: '#b91c1c',
              filter: selectedButton === 1 ? 'brightness(145%)' : 'none',
              transform: selectedButton === 1 ? 'scale(1.05)' : 'none',
            }}
          >
            <SmileyNervous size={32} color="#fff" />
          </button>

          <button
            onClick={() => handleButtonClick(2)}
            style={{
              background: '#c2410c',
              filter: selectedButton === 2 ? 'brightness(145%)' : 'none',
              transform: selectedButton === 2 ? 'scale(1.05)' : 'none',
            }}
          >
            <SmileySad size={32} color="#fff" />
          </button>

          <button
            onClick={() => handleButtonClick(3)}
            style={{
              background: '#ca8a04',
              filter: selectedButton === 3 ? 'brightness(145%)' : 'none',
              transform: selectedButton === 3 ? 'scale(1.05)' : 'none',
            }}
          >
            <SmileyBlank size={32} color="#fff" />
          </button>

          <button
            onClick={() => handleButtonClick(4)}
            style={{
              background: '#65a30d',
              filter: selectedButton === 4 ? 'brightness(145%)' : 'none',
              transform: selectedButton === 4 ? 'scale(1.05)' : 'none',
            }}
          >
            <SmileyMeh size={32} color="#fff" />
          </button>

          <button
            onClick={() => handleButtonClick(5)}
            style={{
              background: '#0d9488',
              filter: selectedButton === 5 ? 'brightness(145%)' : 'none',
              transform: selectedButton === 5 ? 'scale(1.05)' : 'none',
            }}
          >
            <Smiley size={32} color="#fff" />
          </button>
        </SelectConent>
      </SelectContainer>

      <SelectContainer>
        <p>{pergunta1}</p>
        <SelectConent2>
          <button
            onClick={() => handleButtonClick2(1)}
            style={{
              background:
                selectedButton2 === 1
                  ? 'linear-gradient(09deg, #f46b45, #eea849)'
                  : '#ffff',
              color: selectedButton2 === 1 ? '#fff' : '#000',
              transform: selectedButton2 === 1 ? 'scale(1.05)' : 'none',
            }}
          >
            {resposta1}
          </button>

          <button
            onClick={() => handleButtonClick2(2)}
            style={{
              background:
                selectedButton2 === 2
                  ? 'linear-gradient(09deg, #f46b45, #eea849)'
                  : '#ffff',
              color: selectedButton2 === 2 ? '#fff' : '#000',
              transform: selectedButton2 === 2 ? 'scale(1.05)' : 'none',
            }}
          >
            {resposta2}
          </button>
        </SelectConent2>
      </SelectContainer>
      <SelectContainer>
        <p>{pergunta2}</p>
        <SelectConent2>
          <button
            onClick={() => handleButtonClick3(1)}
            style={{
              background:
                selectedButton3 === 1
                  ? 'linear-gradient(09deg, #f46b45, #eea849)'
                  : '#ffff',
              color: selectedButton3 === 1 ? '#fff' : '#000',
              transform: selectedButton3 === 1 ? 'scale(1.05)' : 'none',
            }}
          >
            {resposta3}
          </button>

          <button
            onClick={() => handleButtonClick3(2)}
            style={{
              background:
                selectedButton3 === 2
                  ? 'linear-gradient(09deg, #f46b45, #eea849)'
                  : '#ffff',
              color: selectedButton3 === 2 ? '#fff' : '#000',
              transform: selectedButton3 === 2 ? 'scale(1.05)' : 'none',
            }}
          >
            {resposta4}
          </button>
        </SelectConent2>
      </SelectContainer>
    </>
  )
}
