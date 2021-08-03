import React from 'react'
import styled from 'styled-components'

import { Input, INPUT_TYPES } from '../Input'
import { Button } from '../Button'
import { Card } from '../Card'
import { searchFood } from '../../API'
import { FoodCard } from '../FoodCard'

const StyledCard = styled(Card)`
  flex-direction: column;
  min-width: 400px;
  align-items: flex-end;
`

export function FoodSearch ({ onChooseFood }) {
  const [food, setFood] = React.useState('')
  const [foods, setFoods] = React.useState([])
  const [isLoading, setLoading] = React.useState(false)

  const handleOnTextChange = (text, name) => {
    setFood(text)
  }
  const handleOnSearchClick = () => {
    if (!food) {
      alert('Please enter a food!')
      return
    }
    setLoading(true)
    searchFood(food)
      .then((response) => {
        setFoods(
          response.data.foods.map((food) => {
            return {
              id: food.fdcId,
              name: food.description,
              calories: food.foodNutrients.find(
                (nutrient) => nutrient.nutrientId === 1008
              ).value
            }
          })
        )
      })
      .catch((err) => {
        alert(
          'There was an error! Please try again later ' + JSON.stringify(err)
        )
      })
      .finally(() => {
        setLoading(false)
      })
  }
  const handleOnChooseFood = (food) => () => {
    if (typeof onChooseFood === 'function') {
      onChooseFood(food)
    }
  }
  return (
    <div>
      <StyledCard>
        <Input
          title='Food'
          id='foodId'
          name='food'
          type={INPUT_TYPES.TEXT}
          value={food}
          handleOnChange={handleOnTextChange}
        />
        <Button onClick={handleOnSearchClick}>Search</Button>
      </StyledCard>
      {isLoading && <p>...loading</p>}
      {foods.map((food) => {
        return (
          <FoodCard
            key={food.id}
            name={food.name}
            calories={food.calories}
            actions={<Button onClick={handleOnChooseFood(food)}>Choose</Button>}
          />
        )
      })}
    </div>
  )
}
