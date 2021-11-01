import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { editLog } from '../../redux/actions/logs'

import { INPUT_TYPES, Input } from '../../Components/Input'
import { Card } from '../../Components/Card'
import { Button } from '../../Components/Button'

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.5em 0;
`
const Text = styled.p``

function EditLog ({ id, name, calories, usedCalories, editLog }) {
  const [usedGrams, setUsedGrams] = React.useState(
    (usedCalories / calories) * 100
  )
  function handleOnTextChange (value) {
    setUsedGrams(value)
  }
  const currentUsedCalories = (calories * usedGrams) / 100
  function onEditClick () {
    editLog(id, currentUsedCalories)
    back()
  }
  function back () {
    window.history.back()
  }
  if (!name) {
    return (
      <Card>
        <Row>
          <Text>Invalid log!</Text>
        </Row>
        <Button onClick={back}>Back</Button>
      </Card>
    )
  }
  return (
    <Card style={{ flexDirection: 'column', alignItems: 'stretch' }}>
      <Row>
        <Text>Food</Text>
        <Text>{name}</Text>
      </Row>
      <Row>
        <Text>Calories in 100g</Text>
        <Text>{calories}</Text>
      </Row>
      <Input
        id={name}
        name={name}
        title='Used Grams'
        type={INPUT_TYPES.NUMBER}
        value={usedGrams}
        handleOnChange={handleOnTextChange}
      />
      <Button onClick={onEditClick}>Edit</Button>
      <Row>
        <Text>Used Calories</Text>
        <Text>{currentUsedCalories}</Text>
      </Row>
      <Button onClick={back}>Back</Button>
    </Card>
  )
}

const mapStateToProps = (state, ownProps) => {
  const logId = ownProps.match.params.id
  const { logs } = state
  const log = logs.find((log) => String(log.id) === logId)
  const { id, name, calories, usedCalories } = log || {}
  return {
    id,
    name,
    calories,
    usedCalories
  }
}
export default connect(mapStateToProps, { editLog })(EditLog)
