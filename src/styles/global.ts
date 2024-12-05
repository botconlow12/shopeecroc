import { globalCss } from './stitches.config'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    color: '#fff',
    background: '#fff',
    overflowX: 'hidden',
    textAlign: 'center',

    '-webkit-font-smoothing': 'antialiased',

    '&::-webkit-scrollbar': {
      width: '5px',
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: 'rgba(28, 28, 28, 0.332)',
    },
    '&::-webkit-scrollbar-thumb': {
      background: 'linear-gradient(#557c93, #08203e)',
      borderRadius: 10,
    },
  },

  button: {
    cursor: 'pointer',
    border: '0',
    background: 'transparent',
  },

  'body, input, textarea, button': {
    fontFamily: '$default',
    fontWeight: '400',
  },
})
