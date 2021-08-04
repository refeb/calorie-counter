import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const inputStyles = css`
  border-radius: 5px;
  border-color: lightgray;
  font-size: 1em;
  padding: 5px;
  background-color: white;
  border-style: solid;
  flex: 3;
  transition: outline-color 400ms ease;
  :focus-visible {
    outline-color: #9e9e9e;
  }
`

const StyledInput = styled.input`
  ${inputStyles}
`
const StyledSelect = styled.select`
  ${inputStyles}
`
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 0.5em;
`
const StyledLabel = styled.label`
  font-size: 1em;
  margin-right: 1em;
  color: #212121;
  flex: 1;
`

export const INPUT_TYPES = {
  NUMBER: 'number',
  TEL: 'tel',
  TEXT: 'text',
  EMAIL: 'email'
}
export function Input ({ title, id, value, name, type, handleOnChange }) {
  const onTextChange = (event) => {
    const { value, name } = event.target
    if (typeof handleOnChange === 'function') {
      handleOnChange(value, name)
    }
  }

  return (
    <Container>
      <StyledLabel htmlFor={id}>{title}</StyledLabel>
      <StyledInput
        id={id}
        value={value}
        name={name}
        type={type}
        onChange={onTextChange}
      />
    </Container>
  )
}
Input.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(
    Object.keys(INPUT_TYPES).map((key) => INPUT_TYPES[key])
  ),
  handleOnChange: PropTypes.func.isRequired
}
Input.defaultProps = {
  type: INPUT_TYPES.TEXT
}
export function Select ({
  title,
  id,
  value,
  name,
  options = [],
  handleOnChange
}) {
  const onTextChange = (event) => {
    const { value, name } = event.target
    if (typeof handleOnChange === 'function') {
      handleOnChange(value, name)
    }
  }

  return (
    <Container>
      <StyledLabel htmlFor={id}>{title}</StyledLabel>
      <StyledSelect id={id} value={value} name={name} onChange={onTextChange}>
        {options.map((opt) => (
          <option key={opt.id} value={opt.value}>
            {opt.name}
          </option>
        ))}
      </StyledSelect>
    </Container>
  )
}
