import { styled } from '../../styles/stitches.config'

export const ContainerComentario = styled('div', {
  width: '100vw',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const ContentComentario = styled('div', {
  width: '50rem',
  height: 'auto',
  background: '#fff',
  color: '#13150a',
  padding: '2rem 0',
  borderRadius: '0.5rem',
  boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)',
  display: 'flex',
  flexDirection: 'column',
  fontFamily: 'sans-serif',

  '@media (max-width: 768px)': {
    width: '100%',
    padding: '1.7rem 0',
  },
})

export const ComentarioTitle = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '.5rem',
  padding: '0 1.7rem',

  h1: {
    color: '#000',
    fontSize: '1.6rem',
  },
})

export const ComentarioSession = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '1.7rem',
  height: 'auto',
})

export const Expandir = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: '0 1.7rem',

  button: {
    display: 'flex',
    alignItems: 'center',
    gap: '.3rem',
    padding: '.4rem',
    borderRadius: 10,
    background: 'linear-gradient(09deg, #eea849, #f46b45)',
    fontWeight: 'bold',
    fontSize: '.8rem',
    color: '#fff',
    boxShadow: '0px 0px 5px 1px #f46b45',
    transition: '200ms ease',

    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
})

export const ComentariosExpandido = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
})

export const SetComment = styled('div', {
  width: '100%',
  height: 'auto',
  padding: '0 1.7rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  gap: '1rem',

  h1: {
    textAlign: 'initial',
    color: '#000',
    fontSize: '1.2rem',

    '@media (max-width: 768px)': {
      marginTop: '1rem',
    },
  },

  textarea: {
    border: 0,
    borderRadius: '0.5rem',
    padding: '1rem',
    background: '#f0f2f5',
    resize: 'none',

    '&:focus': {
      outlineColor: '#696969',
      outlineStyle: 'solid',
    },
  },
})

export const SetCommentButton = styled('button', {
  color: '#fff',
  fontSize: '1.2rem',
  fontWeight: 'bold',
  background: 'linear-gradient(90deg, #1D976C, #93F9B9)',
  padding: '1rem 0',
  borderRadius: '0.5rem',

  '&:disabled': {
    background: '#ccc',
    cursor: 'not-allowed',
  },
})

export const SetFeedback = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',

  button: {
    background: 'transparent',

    '&:hover': {
      svg: {
        color: 'red',
      },
    },
  },
})
