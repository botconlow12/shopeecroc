import { styled } from '../../styles/stitches.config'

export const HeaderContainer = styled('div', {
  width: '100vw',
  height: '8rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'linear-gradient(09deg, #eea849, #f46b45)',
  zIndex: '1000',
})

export const HeaderContent = styled('div', {
  width: 1140,
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  zIndex: '1000',
  background: 'linear-gradient(09deg, #eea849, #f46b45)',

  p: {
    color: '#fff',
    background: '#e54300',
    padding: '1rem 2rem',
    borderRadius: 999,
    fontWeight: '700',
    fontSize: '1.5rem',

    '@media (max-width: 768px)': {
      padding: '.7rem 1rem',
      fontSize: '1.3rem',
    },
  },

  '@media (max-width: 768px)': {
    position: 'fixed',
    top: '0rem',
    width: '100%',
    padding: '1rem  0',
  },
})

export const HeaderImg = styled('div', {
  '@media (max-width: 768px)': {
    display: 'none',
  },
})

export const HeaderImg2 = styled('div', {
  display: 'none',
  '@media (max-width: 768px)': {
    display: 'block',
  },
})
