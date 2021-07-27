import React from 'react'
import styled from 'styled-components'

import { Card } from '../Card'
const Field = styled.span`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`
const FoodField = styled(Field)`
  justify-content: flex-start;
  flex: 2;
`
const FoodItem = styled.span`
  flex: 1;
`

const Title = styled.span`
  color: #757575;
  margin-right: 0.5em;
`
export function FoodCard ({ name, calories, actions }) {
  return (
    <Card>
      <FoodField>
        <FoodItem>
          <Title>Food:</Title>
          {name}
        </FoodItem>
        <FoodItem>
          <Title>Calories:</Title>
          {calories}
        </FoodItem>
      </FoodField>
      <Field>{actions}</Field>
    </Card>
  )
}
