import Image, { StaticImageData } from 'next/image'
import Like from '../../../../public/like.webp'
import { useEffect, useState } from 'react'
import Like2 from '../../../../public/like2.webp'
import {
  Answer,
  AvatarContainer,
  CommentContainer,
  Likes,
  Name,
  Showanswer,
  TextContainer,
} from './styles'
import { CaretDown, CaretRight } from 'phosphor-react'

interface CommentProps {
  src: StaticImageData | string
  title: string
  desc: string
  time: string
  ammount: number
  hasRespostas?: boolean
  respostas?: {
    src: StaticImageData | string
    name: string
    desc: string
    time: string
    ammount: number
  }[]
}

export default function CommentStruture({
  title,
  src,
  desc,
  time,
  ammount,
  hasRespostas,
  respostas,
}: CommentProps) {
  const [likes, setLikes] = useState(0)

  useEffect(() => {
    setLikes(ammount)
  }, [ammount])

  const [alreadyLiked, setAlreadyLiked] = useState(false)

  const handleLike = () => {
    setLikes(alreadyLiked ? likes - 1 : likes + 1)

    setAlreadyLiked(!alreadyLiked)
  }

  const [openDesc, setOpenDesc] = useState(false)

  const handleOpenDesc = () => setOpenDesc(!openDesc)

  return (
    <div>
      <div
        style={{
          margin: '1rem 0',
        }}
      >
        <CommentContainer>
          <AvatarContainer>
            <Image
              src={src}
              alt="ProfilePicture"
              quality={100}
              width={50}
              height={50}
            />
            <button
              onClick={handleLike}
              style={{
                color: alreadyLiked ? '#fff' : '#000',
                background: alreadyLiked
                  ? 'linear-gradient(09deg, #eea849, #f46b45)'
                  : '#f0f2f5',
              }}
            >
              Curtir
            </button>
          </AvatarContainer>

          <TextContainer>
            <Name>
              <h4>{title}</h4>
              <p>{time}</p>
            </Name>
            <p>{desc}</p>
            <Likes>
              <Image src={Like} alt="Like" quality={100} />
              <Image src={Like2} alt="Love" quality={100} />
              <span>{likes}</span>
            </Likes>
          </TextContainer>
        </CommentContainer>
        {hasRespostas && (
          <Showanswer>
            <button onClick={handleOpenDesc}>
              {openDesc ? <p>Esconder respostas</p> : <p>Mostrar respostas</p>}
              {openDesc ? <CaretDown size={15} /> : <CaretRight size={15} />}
            </button>
          </Showanswer>
        )}
      </div>
      {openDesc &&
        respostas &&
        respostas.map((item2) => (
          <Answer key={item2.desc}>
            <CommentStruture
              src={item2.src}
              title={item2.name}
              desc={item2.desc}
              time={item2.time}
              ammount={item2.ammount}
            />
          </Answer>
        ))}
    </div>
  )
}
