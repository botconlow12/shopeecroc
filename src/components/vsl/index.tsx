/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
import React, { useRef, useEffect, useState } from 'react'
import { VslContent } from './styles'

export function Vsl() {
  const meuIframeRef = useRef<HTMLIFrameElement>(null)
  const [iframeHeight, setIframeHeight] = useState('')

  useEffect(() => {
    const script = document.createElement('script')
    script.src =
      'https://scripts.converteai.net/36581e86-3fe7-44d1-89e4-c5eb502798e8/players/65af118a5a68c1000982c45d/player.js'
    script.async = true
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  // Função para ajustar a altura do iframe com base na largura
  const ajustarAltura = () => {
    if (meuIframeRef.current) {
      const width = meuIframeRef.current.clientWidth // Obter a largura do iframe
      const scaleFactor = 0.56267 // Fator de escala de 10%, você pode ajustar conforme necessário
      const newHeight = `${width * scaleFactor}px` // Calcula a nova altura em pixels
      setIframeHeight(newHeight) // Define a nova altura para o estado
    }
  }

  // Chamando a função ajustarAltura quando o componente for renderizado e toda vez que o tamanho da janela mudar
  useEffect(() => {
    ajustarAltura()
    const handleResize = () => ajustarAltura()
    window.addEventListener('resize', handleResize)

    // Remover o listener quando o componente for desmontado para evitar memory leaks
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <div
        id="vid_65af118a5a68c1000982c45d"
        style={{
          position: 'relative',
          width: '100%',
          padding: '56.25% 0 0',
          borderRadius: '.8rem',
          boxShadow: '8px 8px 5px 0px rgba(0,0,0,0.35)',
        }}
      >
        <img
          id="thumb_65af118a5a68c1000982c45d"
          src="https://images.converteai.net/36581e86-3fe7-44d1-89e4-c5eb502798e8/players/65af118a5a68c1000982c45d/thumbnail.jpg"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: iframeHeight,
            objectFit: 'cover',
            display: 'block',
          }}
        />
        <div
          id="backdrop_65af118a5a68c1000982c45d"
          style={{
            position: 'absolute',
            top: 0,
            width: '100%',
            height: '100%',
            WebkitBackdropFilter: 'blur(5px)',
            backdropFilter: 'blur(5px)',
          }}
        />
      </div>
      <style jsx>{`
        .elementor-element:has(#smartplayer) {
          width: 100%;
        }
      `}</style>
    </>
  )
}

export function Vsl2() {
  const meuIframeRef = useRef<HTMLIFrameElement>(null)
  const [iframeHeight, setIframeHeight] = useState('')

  // Função para ajustar a altura do iframe com base na largura
  const ajustarAltura = () => {
    if (meuIframeRef.current) {
      const width = meuIframeRef.current.clientWidth // Obter a largura do iframe
      const scaleFactor = 0.56267 // Fator de escala de 10%, você pode ajustar conforme necessário
      const newHeight = `${width * scaleFactor}px` // Calcula a nova altura em pixels
      setIframeHeight(newHeight) // Define a nova altura para o estado
    }
  }

  // Chamando a função ajustarAltura quando o componente for renderizado e toda vez que o tamanho da janela mudar
  useEffect(() => {
    ajustarAltura()
    const handleResize = () => ajustarAltura()
    window.addEventListener('resize', handleResize)

    // Remover o listener quando o componente for desmontado para evitar memory leaks
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <VslContent>
      <iframe
        ref={meuIframeRef}
        id="ifr_666b1ad3d2a7d5000ba05b92"
        src="https://scripts.converteai.net/36581e86-3fe7-44d1-89e4-c5eb502798e8/players/666b1ad3d2a7d5000ba05b92/embed.html"
        allowFullScreen={false}
        style={{
          height: iframeHeight,
          border: 'none',
        }}
      />
    </VslContent>
  )
}
