import { styled } from '../../styles/stitches.config'

export const QuestionContainer = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  textAlign: 'left',
  gap: '.3rem',
  fontSize: '.8rem',
  color: '#000',
})

export const RespondaContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '.3rem',

  h3: {
    fontSize: '2rem',
  },

  p: {
    color: '#000',
  },
})

export const SelectContainer = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',

  P: {
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#000',
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
