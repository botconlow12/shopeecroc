import { styled } from './stitches.config'

export const TermsContainer = styled('main', {
  width: '100vw',
  margin: '0 auto',
})

export const TermsContent = styled('main', {
  maxWidth: 1120,
  margin: '0 auto',
  padding: '4rem 1rem',
  color: '#000',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',

  p: {
    color: '#62595d',
  },
})

export const TermsSecao = styled('main', {
  paddingLeft: '2rem',

  li: {
    color: '#62595d',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },

  p: {
    marginBottom: '1rem',
  },
})
