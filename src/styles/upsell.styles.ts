import { styled } from './stitches.config'

export const MainContainer = styled('main', {
  width: '100vw',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  backgroundPosition: 'center',
  backgroundSize: 'initial',
  backgroundRepeat: 'repeat',

  '@media (max-width: 768px)': {
    height: '100vh',
  },
})

export const MainContent = styled('div', {
  maxWidth: 950,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  '@media (max-width: 768px)': {
    maxWidth: '100%',
  },
})

export const VslContainer = styled('div', {
  width: 868,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1rem',
  padding: '4rem 0',

  '@media (max-width: 768px)': {
    padding: '2rem .5rem',
    width: '100%',
  },

  h1: {
    fontSize: '2.5rem',
    color: '#000',

    '@media (max-width: 768px)': {
      fontSize: '2.3rem',
    },
  },

  h3: {
    color: 'red',
  },

  p: {
    display: 'flex',
    gap: '.4rem',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#475569',
    fontWeight: '900',
    fontSize: '1.1rem',
  },

  button: {
    background: '#18BA6F',
    fontSize: '1.4rem',
    fontWeight: '700',
    color: '#fff',
    borderRadius: 25,
    border: 0,
    padding: '1.2rem 2.5rem',
    transition: 'all 300ms ease-in-out',
    textDecoration: 'none',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '.6rem',

    '@media (max-width: 768px)': {
      fontSize: '1.1rem',
      padding: '1rem 1.5rem',
      width: '100%',
    },

    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
})
