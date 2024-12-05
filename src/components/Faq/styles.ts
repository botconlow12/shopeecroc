import { CaretDown } from 'phosphor-react'
import { styled } from '../../styles/stitches.config'
import * as Accordion from '@radix-ui/react-accordion'
import { keyframes } from '@stitches/react'

export const AccordionRoot = styled(Accordion.Root, {
  borderRadius: 6,
  width: 700,
  boxShadow: `0 2px 30px 5px #00000060`,
  textAlign: 'start',

  '@media (max-width: 768px)': {
    width: '100%',
  },
})

export const AccordionItem = styled(Accordion.Item, {
  overflow: 'hidden',
  marginTop: 1,

  '&:first-child': {
    marginTop: 0,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },

  '&:last-child': {
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
})

export const StyledHeader = styled(Accordion.Header, {
  all: 'unset',
  display: 'flex',
})

export const StyledTrigger = styled(Accordion.Trigger, {
  all: 'unset',
  background: '#fff',
  padding: '0 20px',
  height: 60,
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontSize: '1rem',
  fontWeight: 'bold',
  lineHeight: 1,
  color: '#000',
  '&:hover': { background: '#ccc' },
})

export const StyledChevron = styled(CaretDown, {
  color: '#000',
  transition: 'transform 300ms cubic-bezier(0.87, 0, 0.13, 1)',
  '[data-state=open] &': { transform: 'rotate(180deg)' },
})

export const slideDown = keyframes({
  from: { height: 0 },
  to: { height: 'var(--radix-accordion-content-height)' },
})

export const slideUp = keyframes({
  from: { height: 'var(--radix-accordion-content-height)' },
  to: { height: 0 },
})

export const StyledContent = styled(Accordion.Content, {
  overflow: 'hidden',
  fontSize: 15,
  color: '#fff',
  backgroundColor: 'transparent',

  '&[data-state="open"]': {
    animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
})

export const StyledContentText = styled('div', {
  padding: '15px 20px',
})
