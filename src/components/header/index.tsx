import { HeaderContainer, HeaderContent, HeaderImg, HeaderImg2 } from './styles'
import Image from 'next/image'
import Logo from '../../../public/logo.webp'
import Logo2 from '../../../public/logo2.webp'

interface HeaderProps {
  price: string
}

export default function Header({ price }: HeaderProps) {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderImg>
          <Image alt="logo" quality={100} src={Logo} width={300} />
        </HeaderImg>
        <HeaderImg2>
          <Image alt="logo" quality={100} src={Logo2} width={100} />
        </HeaderImg2>

        <p>SALDO: R$ {price}</p>
      </HeaderContent>
    </HeaderContainer>
  )
}
