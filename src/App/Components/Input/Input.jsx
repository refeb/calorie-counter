import React from 'react'
import PropTypes from 'prop-types'

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
    <div>
      <label htmlFor={id}>{title}</label>
      <input
        id={id}
        value={value}
        name={name}
        type={type}
        onChange={onTextChange}
      />
    </div>
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
