import React from 'react'
import styled from 'styled-components'

import { Input, INPUT_TYPES } from './Components/Input'
import { Button } from './Components/Button'
import { FoodCard } from './Components/FoodCard'

const MainContainer = styled.div`
  background-color: #ffffff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  max-width: 500px;
  width: 100%;
`
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 100%;
  align-items: flex-end;
  margin-bottom: 1em;
  background-color: #f5f5f5;
  padding: 1em;
  box-sizing: border-box;
`
const LOCAL_STORAGE_FOODS_KEY = 'foods'
class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      foodName: '',
      calories: 0,
      foods: []
    }
  }

  componentDidMount () {
    this.setState(() => {
      return {
        foods: JSON.parse(localStorage.getItem(LOCAL_STORAGE_FOODS_KEY)) || []
      }
    })
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevState.foods.length !== this.state.foods.length) {
      localStorage.setItem(
        LOCAL_STORAGE_FOODS_KEY,
        JSON.stringify(this.state.foods)
      )
    }
  }

  handleOnButtonClick = () => {
    const { foodName, foods } = this.state
    if (!foodName) {
      alert('Please enter a food!')
      return
    }
    if (
      foods.find((food) => food.name.toLowerCase() === foodName.toLowerCase())
    ) {
      alert(`You've added ${foodName}!`)
      return
    }
    this.setState((prevState) => {
      return {
        foods: [
          ...prevState.foods,
          {
            id: new Date().getTime(),
            name: prevState.foodName,
            calories: Number(prevState.calories)
          }
        ],
        foodName: '',
        calories: 0
      }
    })
  }

  onTextChange = (value, name) => {
    this.setState(() => {
      return {
        [name]: value
      }
    })
  }

  handleOnRemoveFood = (id) => {
    this.setState((prevState) => {
      return {
        foods: prevState.foods.filter((food) => food.id !== id)
      }
    })
  }

  render () {
    return (
      <MainContainer>
        <Container>
          <InputContainer>
            <Input
              title='Food'
              id='foodNameId'
              name='foodName'
              value={this.state.foodName}
              handleOnChange={this.onTextChange}
              type={INPUT_TYPES.TEXT}
            />
            <Input
              title='Calories in 100 grams'
              id='caloriesId'
              name='calories'
              value={this.state.calories}
              handleOnChange={this.onTextChange}
              type={INPUT_TYPES.NUMBER}
            />
            <Button onClick={this.handleOnButtonClick}>Add</Button>
          </InputContainer>
          <ul>
            {this.state.foods.map((food) => {
              return (
                <li key={food.id}>
                  <FoodCard
                    id={food.id}
                    name={food.name}
                    calories={food.calories}
                    onRemove={this.handleOnRemoveFood}
                  />
                </li>
              )
            })}
          </ul>
        </Container>
      </MainContainer>
    )
  }
}

export default App
