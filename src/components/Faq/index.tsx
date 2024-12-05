import { ForwardedRef, forwardRef } from 'react'
import {
  AccordionItem,
  AccordionRoot,
  StyledChevron,
  StyledContent,
  StyledContentText,
  StyledHeader,
  StyledTrigger,
} from './styles'
import { AccordionContentProps } from '@radix-ui/react-accordion'

export default function Faq() {
  return (
    <AccordionRoot
      defaultChecked
      type="single"
      defaultValue="item-1"
      collapsible
    >
      <AccordionItem value="item-1">
        <StyledHeader>
          <StyledTrigger>
            QUAIS AS FORMAS DE PAGAMENTO?
            <StyledChevron />
          </StyledTrigger>
        </StyledHeader>

        <AccordionContent>
          <p>
            Você pode comprar no cartão, em até 12x. Ou então realizar o
            pagamento á vista ou via PIX.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <StyledHeader>
          <StyledTrigger>
            COMO RECEBO O APLICATIVO?
            <StyledChevron />
          </StyledTrigger>
        </StyledHeader>

        <AccordionContent>
          <p>
            Após a compra você será direcionado para a área de menbros e também
            será enviado para seu e-mail o acesso. Muito fácil de acessar!
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <StyledHeader>
          <StyledTrigger>
            EU MESMO(A) CONSIGO FAZER?
            <StyledChevron />
          </StyledTrigger>
        </StyledHeader>

        <AccordionContent>
          <p>
            Sim, basta seguir o passo a passo, é bem fácil o procedimento, e
            qualquer dúvida basta acionar o suporte.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <StyledHeader>
          <StyledTrigger>
            POR QUANTO TEMPO TEREI ACESSO AO APLICATIVO?
            <StyledChevron />
          </StyledTrigger>
        </StyledHeader>

        <AccordionContent>
          <p>
            Após realizar a compra você terá acesso para sempre, poderá acessar
            quando e onde quiser.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-5">
        <StyledHeader>
          <StyledTrigger>
            FUNCIONA EM TODOS OS APARELHOS?
            <StyledChevron />
          </StyledTrigger>
        </StyledHeader>

        <AccordionContent>
          <p>
            Sim, tem o método para Celulares Android e para Celulares IOS, tudo
            passo a passo.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-6">
        <StyledHeader>
          <StyledTrigger>
            CONSIGO ACESSAR AS FOTOS DO APARELHO?
            <StyledChevron />
          </StyledTrigger>
        </StyledHeader>

        <AccordionContent>
          <p>
            Sim, você consegue acessar as fotos do aparelho, conversas do Whats
            APP, Menssenger, Instagram e escutar áudios, além de descobrir a
            localização do aparelho e lista de contatos.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-7">
        <StyledHeader>
          <StyledTrigger>
            O SITE É SEGURO?
            <StyledChevron />
          </StyledTrigger>
        </StyledHeader>

        <AccordionContent>
          <p>
            Com certeza! O pagamento é feito através de uma plataforma de cursos
            online 100% segura. Todos os seus dados são protegidos de acordo com
            os melhores padrões de segurança do mundo.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-8">
        <StyledHeader>
          <StyledTrigger>
            COMO POSSO TIRAR MINHAS DÚVIDAS?
            <StyledChevron />
          </StyledTrigger>
        </StyledHeader>

        <AccordionContent>
          <p>
            Diretamente pelo Whats App. Quando realizar sua matricula, terá
            acesso ao nosso whats app de suporte na área de alunos e nossa
            equipe estará pronta para te ajudar.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-9">
        <StyledHeader>
          <StyledTrigger>
            TEM PERIGO DA PESSOA DESCOBRIR?
            <StyledChevron />
          </StyledTrigger>
        </StyledHeader>

        <AccordionContent>
          <p>
            Não, o procedimento é seguro, a pessoa que será monitorada não
            saberá de nada.
          </p>
        </AccordionContent>
      </AccordionItem>
    </AccordionRoot>
  )
}

const AccordionContent = forwardRef<HTMLDivElement, AccordionContentProps>(
  (
    { children, ...props }: AccordionContentProps,
    forwardedRef: ForwardedRef<HTMLDivElement>,
  ) => (
    <StyledContent {...props} ref={forwardedRef}>
      <StyledContentText>{children}</StyledContentText>
    </StyledContent>
  ),
)

AccordionContent.displayName = 'AccordionContent'
