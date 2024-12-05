// Importando o Stitches
import { styled } from './stitches.config'
import { keyframes } from '@stitches/react'

// Estilos atualizados
export const MainContainer = styled('main', {
  width: '100vw',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
})

export const MainContent = styled('div', {
  maxWidth: 950,
  width: '100%',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  '@media (max-width: 768px)': {
    maxWidth: '100%',
    padding: '0 .5rem',
    justifyContent: 'initial',
  },
})

export const WithdrawContainer = styled('div', {
  maxWidth: '400px',
  width: '100%',
  margin: 'auto',
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  borderRadius: '8px',
  boxShadow: '0 0px 10px rgba(0, 0, 0, 0.6)',
})

export const WithdrawContent = styled('div', {
  width: '100%',
  padding: '1.5rem',
  color: '#000',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
})

export const WithdrawTitle = styled('div', {
  width: '100%',
  padding: '1rem 2rem',
  backgroundColor: 'rgba(0,0,0,.03)',
  borderTopLeftRadius: '8px',
  borderTopRightRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  color: '#212529',
  borderBottom: '1px solid rgba(0,0,0,.125)',
})

export const PixKeySelector = styled('div', {
  display: 'flex',
  gap: '.8rem',
  flexDirection: 'column',
})

export const Select = styled('select', {
  width: '100%',
  padding: '8px',
  fontSize: '16px',
  borderRadius: 5,
  outline: 'none',
  borderColor: 'rgb(204, 204, 204)',
})

export const InputLabel = styled('label', {
  fontSize: '16px',
  fontWeight: 'bold',
})

export const InputSaque = styled('label', {
  display: 'flex',

  p: {
    background: '#e9ecef',
    padding: '1rem',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
})

export const Input = styled('input', {
  width: '100%',
  padding: '8px',
  fontSize: '16px',
  borderRadius: 5,
  outline: 'none',
  borderColor: 'rgb(204, 204, 204)',
})

export const WithdrawButton = styled('button', {
  padding: '10px',
  fontSize: '20px',
  backgroundColor: '#4CAF50',
  color: 'white',
  cursor: 'pointer',
  borderRadius: '4px',
  transition: 'background-color 0.3s ease',
  textDecoration: 'none',

  '&:hover': {
    backgroundColor: '#45a049',
  },
})

export const ModalOverlay = styled('div', {
  position: 'fixed',
  top: '2rem',
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const FadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
})

export const ModalContent = styled('div', {
  width: '30rem',
  backgroundColor: '#fff',
  color: '#000',
  padding: '20px',
  borderRadius: '8px',
  textAlign: 'center',
  animation: `${FadeIn} 0.3s ease`,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1rem',

  '@media (max-width: 768px)': {
    width: '100%',
  },

  h2: {
    color: '#334155',
  },

  p: {
    color: '#334155',
    fontSize: '1rem',
    fontWeight: '400',
  },

  a: {
    padding: '10px',
    fontSize: '20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    cursor: 'pointer',
    borderRadius: '4px',
    transition: 'background-color 0.3s ease',
    textDecoration: 'none',

    '&:hover': {
      backgroundColor: '#45a049',
    },
  },
})
