import styled from 'styled-components'

export const Button = styled.button`
  color: #263238;
  font-size: 1em;
  padding: 0.4em 1em;
  border: solid 1px lightgrey;
  border-radius: 5px;
  cursor: pointer;
  background-color: #f5f5f5;
  transition: background-color 400ms ease;
  :active {
    background-color: #eeeeee;
  }
`
export const SecondaryButton = styled(Button)`
  background-color: #e53935;
  color: #f5f5f5;
  :active {
    background-color: #f5f5f5;
    color: #e53935;
  }
`
