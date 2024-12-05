import { styled } from '../../styles/stitches.config'

export const PopUpContainer = styled('div', {
  backgroundColor: '#fff',
  borderRadius: 10,
  display: 'flex',
  alignItems: 'center',
  gap: '.9rem',
  padding: '.9rem',
  width: 300,
  boxShadow: '0px 0px 10px 3px rgba(0, 0, 0, 0.25)',
  zIndex: 1000,
  position: 'fixed',
  bottom: '1rem',
  transition: 'all 200ms ease',
  zindex: 1000,
  fontFamily: 'sans-serif',

  variants: {
    open: {
      true: {
        right: '1rem',
        opacity: 1,
      },
      false: {
        right: '-5rem',
        opacity: 0,
      },
    },
  },

  defaultVariants: {
    open: 'false',
  },
})

export const PopUpContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '.1rem',
})

export const PopUpName = styled('div', {
  display: 'flex',
  gap: '.3rem',
  color: '#000',

  fontSize: '.9rem',
})

export const PopUpDesc = styled('div', {
  fontSize: '.8rem',
  color: '#828282',
})

export const PopUpAcessories = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const PopUpRealTime = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '.2rem',

  fontSize: '.8rem',
  color: '#6eb2a6',
})
