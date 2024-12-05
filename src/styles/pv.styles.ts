import { styled } from './stitches.config'
import { keyframes } from '@stitches/react'

export const MainContainer = styled('main', {
  width: '100vw',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  backgroundPosition: 'center',
  backgroundSize: 'initial',
  backgroundRepeat: 'repeat',
})

export const MainContent = styled('div', {
  maxWidth: 950,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '3rem',
  paddingBottom: '5rem',

  '@media (max-width: 768px)': {
    maxWidth: '100%',
  },
})

export const VslContainer = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1.5rem',

  '@media (max-width: 768px)': {
    padding: '0 .5rem',
  },

  h1: {
    color: '#000',
    fontSize: '2.5rem',

    '@media (max-width: 768px)': {
      fontSize: '1.8rem',
    },
  },
})

export const VslHeadline = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',

  p: {
    color: '#000',
    fontWeight: '900',
    fontSize: '1rem',
  },
})

export const ComentContainer = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '2rem',

  h2: {
    fontSize: '2.8rem',
    color: '#475569',
    fontWeight: '900',

    '@media (max-width: 768px)': {
      fontSize: '2rem',
    },
  },
})

export const AnimPic = keyframes({
  from: { transform: 'scale(1.0)' },
  to: { transform: 'scale(1.05)' },
})

export const DescontoContainer = styled('div', {
  width: '100vw',
  padding: '1rem 0',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  background: '#fff',
  gap: '1rem',
  animation: `${AnimPic} 2.5s infinite alternate`,
  transition: '200ms linear',

  h1: {
    fontSize: '4.3rem',
    color: 'red',
    textShadow: 'rgba(255, 0, 0, 0.59) 0px 0px 10px',
  },

  h2: {
    textShadow: '0px 0px 6px rgba(255, 0, 0, 0.59)',
    color: '#ff0000 !important',
    fontSize: '1.5rem',
  },

  h3: {
    textShadow: '0px 0px 10px rgba(0, 0, 0, 0.59)',
    color: '#000 !important',
    fontSize: '2rem',
  },

  p: {
    color: '#00A116',
    fontSize: '1rem',
    fontWeight: 'bold',
  },

  a: {
    textDecoration: 'none',
    background: '#00A116',
    padding: '0.75rem 2rem',
    fontWeight: '600',
    borderRadius: '5rem',
    color: '#ffffff',
  },
})
