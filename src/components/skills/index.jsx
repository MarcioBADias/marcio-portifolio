import React from 'react'

import * as C from './style'

const Skills = () => {
  return (
    <C.Section id="skills">
      <C.Title>Habilidades</C.Title>
      <C.Container>
        <C.SubTitle>Soft-skills</C.SubTitle>
        <C.SoftSkills src="soft-link.svg" alt="Soft skills" />
      </C.Container>
      <C.Container>
        <C.SubTitle>Hard-skills</C.SubTitle>
        <C.Img src="hard-skills-icons.svg" alt="Hard skills" />
      </C.Container>
    </C.Section>
  )
}

export default Skills
