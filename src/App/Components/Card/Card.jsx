import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: #fafafa;
  padding: 1em 1.2em;
  box-sizing: border-box;
  border-radius: 8px;
  box-shadow: 0 1px 5px 1px #0000001c;
  margin-bottom: 0.6em;
  transition: box-shadow 200ms ease;
  :hover {
    box-shadow: 0 0px 1px 1px #0000001c;
  }
`
