import { styled } from 'styled-components'

export const Section = styled.section`
  background-color: #313131;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  @media (max-width: 840px) {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Title = styled.h1`
  margin-bottom: 2rem;

  @media (max-width: 840px) {
    margin-top: 1rem;
  }
`

export const Adress = styled.p``
