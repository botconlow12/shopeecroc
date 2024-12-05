import {
  ArrowCircleDown,
  ArrowCircleUp,
  CaretDown,
  Trash,
} from 'phosphor-react'
import {
  ContainerComentario,
  ComentarioTitle,
  ComentarioSession,
  Expandir,
  SetComment,
  SetFeedback,
  SetCommentButton,
  ContentComentario,
} from './styles'

import CommentStruture from './ComentarioStruture'
import Avatar from '../../../public/avatar.webp'
import { useEffect, useState, Fragment } from 'react'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { comentarios } from './array'

interface TesteProps {
  comment: string
  date: Date
}

interface LocationProps {
  city: string
  region: string
}

export function Comentarios() {
  const [comment, setComment] = useState('')
  const [comments, setComments] = useState<TesteProps[]>([])
  const [location, setLocation] = useState({} as LocationProps)
  const [expandirHeight, setExpandirHeight] = useState(false)
  const [toShow, setToShow] = useState(3)

  const MostrarMais = () => {
    setExpandirHeight(!expandirHeight)

    if (expandirHeight) {
      setToShow(3)
    } else {
      setToShow(comentarios(location).length)
    }
  }

  const removeFeedback = (comment: string) => {
    const newArrayComments = comments.filter(
      (commentToRemove) => commentToRemove.comment !== comment,
    )
    setComments(newArrayComments)
  }

  const handleAddNewFeedback = () => {
    setComments([
      ...comments,
      {
        comment,
        date: new Date(),
      },
    ])
    setComment('')
  }

  useEffect(() => {
    const fetchLocation = async () => {
      await fetch('https://ipinfo.io?token=57f3d1eb815176')
        .then((response) => response.json())
        .then((data) => setLocation(data))
    }

    fetchLocation()
  }, [])

  return (
    <ContainerComentario id="chatSection">
      <ContentComentario>
        <ComentarioTitle>
          <h1>
            <u>Mais Recentes</u>
          </h1>
          <CaretDown size={25} color="#13150a" weight="bold" />{' '}
        </ComentarioTitle>

        <ComentarioSession>
          {comments.map((comment) => {
            return (
              <SetFeedback key={comment.comment}>
                <CommentStruture
                  src={Avatar}
                  title={'User Anônimo'}
                  desc={comment.comment}
                  time={formatDistanceToNow(comment.date, {
                    locale: ptBR,
                  })}
                  ammount={0}
                />

                <button onClick={() => removeFeedback(comment.comment)}>
                  <Trash size={24} />
                </button>
              </SetFeedback>
            )
          })}

          {comentarios(location)
            .filter((item, index) => index < toShow)
            .map((item) => (
              <Fragment key={item.name}>
                <CommentStruture
                  src={item.src}
                  title={item.name}
                  desc={item.desc}
                  time={item.time}
                  ammount={item.ammount}
                  hasRespostas={item.hasRespostas}
                  respostas={item.respostas}
                />
              </Fragment>
            ))}
        </ComentarioSession>
        <Expandir>
          <button onClick={MostrarMais}>
            {expandirHeight ? 'Mostrar Menos' : 'Mostrar Mais'}
            {expandirHeight ? (
              <ArrowCircleUp size={17} weight="bold" />
            ) : (
              <ArrowCircleDown size={17} weight="bold" />
            )}
          </button>
        </Expandir>

        <SetComment>
          <h1>Escreva um comentário</h1>
          <textarea
            value={comment}
            onChange={(event) => setComment(event.target.value)}
            placeholder="Deixe seu comentario..."
          />
          <SetCommentButton disabled={!comment} onClick={handleAddNewFeedback}>
            Publicar
          </SetCommentButton>
        </SetComment>
      </ContentComentario>
    </ContainerComentario>
  )
}
