import { styled } from '../../styles/stitches.config'

export const VslContent = styled('div', {
  width: 868,

  '@media (max-width: 768px)': {
    width: '100%',
  },

  iframe: {
    boxShadow: '15px 15px 10px 0px rgba(0, 0, 0, .30)',
    borderRadius: '10px',
    width: '100%',
  },
})
