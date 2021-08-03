import React from 'react'
import styled from 'styled-components'

import { Input, INPUT_TYPES } from '../../Components/Input'
import { Button, SecondaryButton } from '../../Components/Button'
import { FoodCard } from '../../Components/FoodCard'
import { Modal } from '../../Components/Modal'
import { FoodSearch } from '../../Components/FoodSearch'

const Container = styled.div``
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
const ButtonContainer = styled.div``
const LOCAL_STORAGE_FOODS_KEY = 'foods'
class AddFood extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      foodName: '',
      calories: 0,
      foods: [],
      isModalOpen: false
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

  handleOnRemoveFood = (id) => () => {
    this.setState((prevState) => {
      return {
        foods: prevState.foods.filter((food) => food.id !== id)
      }
    })
  }

  handleOnOpenModal = () => {
    this.setState(() => {
      return {
        isModalOpen: true
      }
    })
  }

  handleOnCloseModal = () => {
    this.setState(() => {
      return {
        isModalOpen: false
      }
    })
  }

  handleOnChooseFood = (food) => {
    this.setState((prevState) => {
      return {
        foods: [...prevState.foods, food],
        isModalOpen: false
      }
    })
  }

  render () {
    return (
      <Container>
        <Modal
          isOpen={this.state.isModalOpen}
          onClose={this.handleOnCloseModal}
        >
          <FoodSearch onChooseFood={this.handleOnChooseFood} />
        </Modal>
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
          <ButtonContainer>
            <Button onClick={this.handleOnOpenModal}>Search</Button>
            <Button onClick={this.handleOnButtonClick}>Add</Button>
          </ButtonContainer>
        </InputContainer>
        <ul>
          {this.state.foods.map((food) => {
            return (
              <li key={food.id}>
                <FoodCard
                  name={food.name}
                  calories={food.calories}
                  actions={
                    <SecondaryButton onClick={this.handleOnRemoveFood(food.id)}>
                      Remove
                    </SecondaryButton>
                  }
                />
              </li>
            )
          })}
        </ul>
      </Container>
    )
  }
}

export default AddFood
