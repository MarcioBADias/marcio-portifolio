import React from 'react'
import * as C from './style'

const Projects = () => {
  return (
    <C.Section id="projects">
      <C.TextArea>
        <C.Title>PROJETOS</C.Title>
        <C.Text>
          Projetos são a minha paixão e a minha maior fonte de motivação. Aqui
          você encontrará alguns dos projetos que trabalhei recentemente. Clique
          em um dos itens para ver com mais detalhes as formas que trabalhei
          para atender às necessidades do cliente e produzir um produto final de
          alta qualidade. Espero que esses projetos possam lhe dar uma ideia do
          meu estilo de trabalho e do meu compromisso em criar soluções eficazes
          para cada cliente.
        </C.Text>
      </C.TextArea>
      <C.ProjectArea>
        <C.Link href="https://top-20-movies.netlify.app/" target="_blank">
          <C.Img src="projects/project-topMovies.svg" alt="Projeto em React" />
        </C.Link>
        <C.Link href="https://poke-rest-api.netlify.app/" target="_blank">
          <C.Img src="projects/project-PokeAPI.svg" alt="Projetoem Vue" />
        </C.Link>
        <C.Link
          href="https://controle-financeiro-pessoal-simples.netlify.app/"
          target="_blank"
        >
          <C.Img src="projects/project-FinControl.svg" alt="Projeto React" />
        </C.Link>
        <C.Link
          href="https://memory-game-challenger-code.netlify.app/"
          target="_blank"
        >
          <C.Img
            src="projects/project-memoryGame.svg"
            alt="Projeto em Javascript"
          />
        </C.Link>
      </C.ProjectArea>
    </C.Section>
  )
}

export default Projects
