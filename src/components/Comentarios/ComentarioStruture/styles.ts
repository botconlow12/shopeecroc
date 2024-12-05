import { styled } from '../../../styles/stitches.config'

export const CommentContainer = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  textAlign: 'start',
  gap: '1rem',
  color: '#000',
})

export const AvatarContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '.5rem',

  img: {
    borderRadius: '100%',
  },

  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: '.4rem',
    transition: '100ms linear',
    fontWeight: 'bold',

    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
})

export const TextContainer = styled('div', {
  width: 'auto',
  minWidth: '22rem',
  height: 'auto',
  minHeight: '6rem',
  position: 'relative',
  padding: '.8rem',
  borderRadius: 10,
  background: '#f0f2f5',
  boxShadow: '6px 6px 10px rgba(0, 0, 0, 0.20)',

  '@media (max-width: 768px)': {
    minWidth: '10rem',
  },
})

export const Name = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '.5rem',
  fontSize: '1rem',

  '@media (max-width: 768px)': {
    fontSize: '.9rem',
  },

  h4: {
    '&:hover': {
      textDecoration: 'underline',
    },
  },

  p: {
    fontWeight: 'bold',
  },
})

export const Likes = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '.3rem',
  padding: '.4rem',
  borderRadius: 30,
  background: '#f8fafc',
  position: 'absolute',
  right: 0,
  boxShadow: '3px 3px 10px #c9c7c7',
  marginTop: '.1rem',
  transition: '100ms linear',

  img: {
    width: '1.5rem',
    height: '1.5rem',
    borderRadius: '100%',
  },

  '&:hover': {
    transform: 'scale(1.05)',
  },
})

export const Showanswer = styled('div', {
  marginTop: '.6rem',
  marginLeft: '5rem',

  button: {
    color: '#000',
    background: 'transparent',
    display: 'flex',
    gap: '.1rem',
    alignItems: 'center',
  },
})

export const Answer = styled('div', {
  marginTop: '1.6rem',
  marginLeft: '2srem',
  paddingLeft: '2rem',
  fontSize: '.9rem',
  borderLeft: '1px solid #000',

  '@media (max-width: 768px)': {
    marginLeft: '1.1rem',
  },
})
