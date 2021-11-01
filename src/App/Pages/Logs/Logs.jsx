import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import { Modal } from '../../Components/Modal'
import { FoodCard } from '../../Components/FoodCard'
import { Card } from '../../Components/Card'
import { Button, SecondaryButton } from '../../Components/Button'

import { removeLog } from '../../redux/actions/logs'

const StyledUl = styled.ul`
  min-width: 400px;
`
const ProgressBar = styled.div`
  width: 300px;
  height: 15px;
  background: #e0e0e0;
  border-radius: 8px;
  margin: 1em 0;
  border: 1px solid #bdbdbd;
  overflow: hidden;
`
const Progress = styled.div`
  background-color: ${(props) => {
    const percentage = props.percentage
    if (percentage < 65) {
      return '#4caf50'
    }
    if (percentage < 70) {
      return '#8bc34a'
    }
    if (percentage < 80) {
      return '#ffee58'
    }
    if (percentage < 90) {
      return '#f57f17'
    }
    return '#e53935'
  }};
  height: 100%;
  width: ${(props) => props.percentage}%;
  transition: all 400ms ease;
  border-radius: inherit;
`

function Logs ({ foods, logs, removeLog, dailyCaloriesBudget }) {
  const history = useHistory()
  const [isSelectFoodOpen, setSelectFoodOpen] = React.useState(false)
  function openSelectFood () {
    setSelectFoodOpen(true)
  }
  function closeSelectFood () {
    setSelectFoodOpen(false)
  }

  const onSelectClick = (id) => () => {
    history.push(`/log/food/${id}`)
  }
  const onRemoveClick = (id) => () => {
    removeLog(id)
  }
  const onEditClick = (id) => () => {
    history.push(`/log/edit/${id}`)
  }
  const usedCalories = logs.reduce((prevValue, currentValue) => {
    return prevValue + currentValue.usedCalories
  }, 0)
  return (
    <div>
      <Modal isOpen={isSelectFoodOpen} onClose={closeSelectFood}>
        <StyledUl>
          {foods.map((food) => {
            return (
              <li key={food.id}>
                <FoodCard
                  calories={food.calories}
                  name={food.name}
                  actions={
                    <Button onClick={onSelectClick(food.id)}>Select</Button>
                  }
                />
              </li>
            )
          })}
        </StyledUl>
      </Modal>
      <Card style={{ flexDirection: 'column' }}>
        <p>
          Used Calories: {usedCalories} / {dailyCaloriesBudget}
        </p>
        <ProgressBar>
          <Progress percentage={(usedCalories / dailyCaloriesBudget) * 100} />
        </ProgressBar>
        <Button onClick={openSelectFood}>Choose a Food</Button>
      </Card>
      <ul>
        {logs.map((log) => {
          return (
            <li key={log.id}>
              <FoodCard
                name={log.name}
                calories={log.usedCalories}
                actions={
                  <>
                    <Button onClick={onEditClick(log.id)}>Edit</Button>
                    <SecondaryButton onClick={onRemoveClick(log.id)}>
                      Remove
                    </SecondaryButton>
                  </>
                }
              />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  const { foods, logs, BMR } = state
  const { dailyCaloriesBudget } = BMR
  return {
    foods,
    logs,
    dailyCaloriesBudget
  }
}

export default connect(mapStateToProps, { removeLog })(Logs)
