import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { Input, INPUT_TYPES } from '../../Components/Input'
import { Button, SecondaryButton } from '../../Components/Button'
import { FoodCard } from '../../Components/FoodCard'
import { Modal } from '../../Components/Modal'
import { FoodSearch } from '../../Components/FoodSearch'

import { addNewFood, removeFood, setFoods } from '../../redux/actions/foods'

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
// const LOCAL_STORAGE_FOODS_KEY = 'foods'
class AddFood extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      foodName: '',
      calories: 0,
      isModalOpen: false
    }
  }

  // componentDidMount () {
  //   this.props.setFoods(
  //     JSON.parse(localStorage.getItem(LOCAL_STORAGE_FOODS_KEY)) || []
  //   )
  // }

  // componentDidUpdate (prevProps, prevState) {
  //   if (prevProps.foods.length !== this.props.foods.length) {
  //     localStorage.setItem(
  //       LOCAL_STORAGE_FOODS_KEY,
  //       JSON.stringify(this.props.foods)
  //     )
  //   }
  // }

  handleOnButtonClick = () => {
    const { foodName, calories } = this.state
    const { foods } = this.props
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
    this.props.addNewFood({
      id: new Date().getTime(),
      name: foodName,
      calories: Number(calories)
    })
    this.setState((prevState) => {
      return {
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
    this.props.removeFood(id)
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
    this.props.addNewFood(food)
    this.handleOnCloseModal()
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
          {this.props.foods.map((food) => {
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
const mapStateToProps = (state) => {
  const { foods } = state
  return {
    foods
  }
}

export default connect(mapStateToProps, { addNewFood, removeFood, setFoods })(
  AddFood
)
