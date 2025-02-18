import React from 'react'
//import SelfWritten from "../self-written";

import * as C from './style'

const Resume = () => {
  return (
    <C.Wrapper id="home">
      <C.Container>
        <C.TopLine>Marcio Dias</C.TopLine>
        <C.Title>
          Desenvolvedor
          <C.MultiText>Front-end{/*<SelfWritten />*/}</C.MultiText>
        </C.Title>
        <C.Text>
          Apaixonado por desafios e sempre em busca de novas oportunidades. Sou
          um profissional dinâmico e flexível, com facilidade para lidar com
          situações de mudança e pressão. Minha paciência e empatia facilitam
          meu trabalho em grupo, principalmente no trato com pessoas de
          diferentes níveis de habilidade e backgrounds. Além disso, sou um
          indivíduo com facilidade de aprendizado; sempre disposto a adquirir
          novos conhecimentos e ampliar minhas habilidades.
        </C.Text>
        <a
          style={{
            backgroundColor: 'none',
            textDecoration: 'none',
            color: 'inherit',
          }}
          href="https://drive.google.com/file/d/1f5TJsVOh-ziFmhg97FjS64H5bICnvKnl/view?usp=sharing"
          target="_blank"
        >
          <C.Button>Curriculo Pdf</C.Button>
        </a>
      </C.Container>
      <C.ImageSpace>
        <C.Img src="marcio_profile.png" alt="Foto de perfil" />
      </C.ImageSpace>
    </C.Wrapper>
  )
}

export default Resume
