import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { addLog } from '../../redux/actions/logs'

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

function AddLog ({ name, calories, addLog }) {
  const [usedGrams, setUsedGrams] = React.useState(100)
  function handleOnTextChange (value) {
    setUsedGrams(value)
  }
  const usedCalories = (calories * usedGrams) / 100
  function onAddClick () {
    addLog({
      name,
      calories,
      usedCalories,
      id: new Date().getTime()
    })
    window.history.back()
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
      <Button onClick={onAddClick}>Add</Button>
      <Row>
        <Text>Used Calories</Text>
        <Text>{usedCalories}</Text>
      </Row>
    </Card>
  )
}

const mapStateToProps = (state, ownProps) => {
  const foodId = ownProps.match.params.id
  const { foods } = state
  const food = foods.find((food) => String(food.id) === foodId)
  const { name, calories } = food
  return { name, calories }
}
export default connect(mapStateToProps, { addLog })(AddLog)
