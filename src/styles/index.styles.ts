import { styled } from './stitches.config'

import { keyframes } from '@stitches/react'

export const MainContainer = styled('main', {
  width: '100vw',
  minHeight: '100vh',
  height: 'auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',

  '@media (max-width: 768px)': {
    height: 'auto',
  },
})

export const MainContent = styled('div', {
  maxWidth: 950,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '4rem',

  '@media (max-width: 768px)': {
    padding: '0 1rem',
    maxWidth: '100%',
    gap: '2rem',
  },
})

export const BoxContainer = styled('div', {
  width: '45rem',
  height: 'auto',
  padding: '1.5rem',
  background: '#ffd7c9',
  color: '#000',
  borderRadius: 25,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',
  border: '2px solid #ff580c',
  boxShadow: '0 0px 20px 1px #f46b45',

  '@media (max-width: 768px)': {
    width: '100%',
    gap: '1rem',
  },

  button: {
    width: '100%',
    background: 'linear-gradient(09deg, #f46b45, #eea849)',
    borderRadius: '0.4rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    padding: '1rem 2.8rem',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '.4rem',

    '&:disabled': {
      background: '#ccc',
      cursor: 'not-allowed',
    },
  },

  h1: {
    fontSize: '2.2rem',
    fontWeight: '500',
  },

  img: {
    borderRadius: 15,
  },

  input: {
    border: '1px solid #ff580c',
    outline: 'none',
  },
})

export const BoxContainer3 = styled('div', {
  width: '45rem',
  height: 'auto',
  padding: '1.5rem',
  color: '#000',
  borderRadius: 15,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2rem',
  boxShadow: '0 0px 20px 1px #f46b45',
  background: '#e8e4e4',

  '@media (max-width: 768px)': {
    width: '100%',
    gap: '1rem',
  },

  button: {
    width: '100%',
    background: 'linear-gradient(09deg, #f46b45, #eea849)',
    borderRadius: '0.4rem',
    fontSize: '.9rem',
    fontWeight: 'bold',
    padding: '1rem 1.8rem',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '.4rem',

    '&:disabled': {
      background: '#ccc',
      cursor: 'not-allowed',
    },
  },

  h1: {
    fontSize: '2.2rem',
  },

  img: {
    borderRadius: 15,
  },
})

export const BoxContainer4 = styled('div', {
  width: '45rem',
  height: 'auto',
  padding: '1.5rem',
  color: '#000',
  borderRadius: 15,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2rem',
  boxShadow: '0 0px 20px 1px #f46b45',
  background: '#e8e4e4',

  '@media (max-width: 768px)': {
    width: '100%',
    gap: '1rem',
  },

  button: {
    width: '100%',
    background: 'linear-gradient(09deg, #f46b45, #eea849)',
    borderRadius: '0.4rem',
    fontSize: '.9rem',
    fontWeight: 'bold',
    padding: '1rem 1.8rem',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '.4rem',

    '&:disabled': {
      background: '#ccc',
      cursor: 'not-allowed',
    },
  },

  h1: {
    fontSize: '2.2rem',
  },

  img: {
    borderRadius: 15,
  },
})

export const BoxContainer5 = styled('div', {
  width: '45rem',
  height: 'auto',
  padding: '1.5rem',
  color: '#000',
  borderRadius: 15,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2rem',
  boxShadow: '0 0px 20px 1px #f46b45',
  background: '#e8e4e4',

  '@media (max-width: 768px)': {
    width: '100%',
    gap: '1rem',
  },

  button: {
    width: '100%',
    background: 'linear-gradient(09deg, #f46b45, #eea849)',
    borderRadius: '0.4rem',
    fontSize: '.9rem',
    fontWeight: 'bold',
    padding: '1rem 1.8rem',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '.4rem',

    '&:disabled': {
      background: '#ccc',
      cursor: 'not-allowed',
    },
  },

  h1: {
    fontSize: '2.2rem',
  },

  img: {
    borderRadius: 15,
  },
})

export const BoxContainer6 = styled('div', {
  width: '45rem',
  height: 'auto',
  padding: '1.5rem',
  color: '#000',
  borderRadius: 15,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2rem',
  boxShadow: '0 0px 20px 1px #f46b45',
  background: '#e8e4e4',

  '@media (max-width: 768px)': {
    width: '100%',
    gap: '1rem',
  },

  button: {
    width: '100%',
    background: 'linear-gradient(09deg, #f46b45, #eea849)',
    borderRadius: '0.4rem',
    fontSize: '.9rem',
    fontWeight: 'bold',
    padding: '1rem 1.8rem',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '.4rem',

    '&:disabled': {
      background: '#ccc',
      cursor: 'not-allowed',
    },
  },

  h1: {
    fontSize: '2.2rem',
  },

  img: {
    borderRadius: 15,
  },
})

export const InputContainer = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.8rem',

  p: {
    fontSize: '1rem',
    fontWeight: '400',
  },

  input: {
    width: 350,
    borderRadius: 15,
    padding: '.6rem 1rem',
    fontSize: '1.2rem',

    '@media (max-width: 768px)': {
      width: '100%',
    },
  },
})

export const SeguroContainer = styled('div', {
  width: '45rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'linear-gradient(09deg, #eea849, #f46b45)',
  boxShadow: '0 10px 15px -6px #f46b45',
  gap: '.3rem',
  borderRadius: 10,
  fontWeight: 'bold',
  padding: '1rem 0',

  '@media (max-width: 768px)': {
    width: '100%',
  },
})

export const QuestionContainer = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  textAlign: 'left',
  gap: '.3rem',
  fontSize: '.8rem',
  color: '#475569',
})

export const SelectContainer = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',

  P: {
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#475569',
  },
})

export const SelectConent = styled('div', {
  display: 'flex',
  gap: '.8rem',

  button: {
    transition: '100ms ease',
    padding: '10px',
  },
})

export const SelectConent2 = styled('div', {
  display: 'flex',
  gap: '.8rem',

  button: {
    transition: '100ms ease',
    padding: '.8rem 0',
    color: '#000',
    fontSize: '1rem',
  },
})

export const ModalOverlay = styled('div', {
  position: 'fixed',
  top: 0,
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
  backgroundColor: '#fff',
  color: '#000',
  padding: '20px',
  borderRadius: '25px',
  textAlign: 'center',
  animation: `${FadeIn} 0.3s ease`,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1rem',

  h2: {
    color: '#334155',
  },

  p: {
    color: '#334155',
    fontSize: '.9rem',
    fontWeight: '300',
  },
})

export const ModalButton = styled('a', {
  background: 'linear-gradient(09deg, #f46b45, #eea849)',
  color: '#fff',
  padding: '0.6rem 1rem',
  border: 'none',
  borderRadius: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '.4rem',
  fontSize: '1.4rem',
  fontWeight: '700',
  textDecoration: 'none',
})
