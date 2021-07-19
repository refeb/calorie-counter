import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  color: gray;
  font-weight: 500;
  background-color: #f5f5f5;
  padding: 1em 0;
  text-align: center;
`

export function Greeting ({ name }) {
  return <Container>Welcome {name}</Container>
}
Greeting.propTypes = {
  name: PropTypes.string
}
