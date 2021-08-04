import React from 'react'
import styled from 'styled-components'

import { Card } from '../../Components/Card'
import { Button } from '../../Components/Button'
import { Input, INPUT_TYPES, Select } from '../../Components/Input'

const Container = styled(Card)`
  flex-direction: column;
  align-items: flex-end;
`
const Bmr = styled.p`
  width: 100%;
  text-align: left;
  line-height: 1.5em;
  font-weight: 500;
  display: flex;
  margin-top: 1em;
  :last-child {
    margin-bottom: 1em;
  }
  :after {
    content: 'calories';
    font-size: 0.8em;
    margin-left: 3px;
  }
`
const Title = styled.span`
  color: #757575;
  flex: 0.85;
`
const GENDERS = [
  {
    id: 0,
    value: 0,
    name: 'Male'
  },
  {
    id: 1,
    value: 1,
    name: 'Female'
  }
]
const ACTIVITIES = [
  {
    id: 0,
    value: 1.2,
    name: 'Sedentary'
  },
  {
    id: 1,
    value: 1.375,
    name: 'Lightly Active'
  },
  {
    id: 2,
    value: 1.55,
    name: 'Moderately Active'
  },
  {
    id: 3,
    value: 1.725,
    name: 'Very Active'
  },
  {
    id: 4,
    value: 1.9,
    name: 'Extra Active'
  }
]
function calculateBMR ({ weight, height, age, gender }) {
  const baseBMR = 10 * weight + 6.25 * height - 5 * age
  if (gender) {
    return baseBMR - 161
  }
  return baseBMR + 5
}
const ONE_KG_IN_POUND = 2.20462
const CALORIES_TO_LOSE_ONE_POUND = 3500 / 7
const BMR_KEY = 'BMR'
const INPUTS_KEY = 'personalInfo'
export default function Home () {
  const [inputs, setInputs] = React.useState({
    age: 0,
    weight: 0,
    height: 0,
    gender: GENDERS[0].value,
    activity: ACTIVITIES[0].value,
    changeWeight: 0
  })
  const [BMR, setBMR] = React.useState({
    BMR: 0,
    dailyCaloriesBudget: 0
  })
  React.useEffect(() => {
    const BMR = JSON.parse(localStorage.getItem(BMR_KEY))
    const inputs = JSON.parse(localStorage.getItem(INPUTS_KEY))
    if (BMR) {
      setInputs(inputs)
      setBMR(BMR)
    }
  }, []) // component did mount
  React.useEffect(() => {
    if (BMR.BMR) {
      localStorage.setItem(BMR_KEY, JSON.stringify(BMR))
      localStorage.setItem(INPUTS_KEY, JSON.stringify(inputs))
    }
  }, [BMR.BMR])
  const handleOnInputChange = (text, name) => {
    setInputs(
      Object.assign({}, inputs, {
        [name]: text
      })
    )
  }
  const handleOnCalculateClick = () => {
    const { weight, height, age, gender, activity, changeWeight } = inputs
    const baseBMR = calculateBMR({ weight, height, age, gender })
    const BMR = baseBMR * activity
    const caloriesToChange =
      changeWeight * ONE_KG_IN_POUND * CALORIES_TO_LOSE_ONE_POUND
    const dailyCaloriesBudget = BMR + caloriesToChange
    setBMR({
      BMR,
      dailyCaloriesBudget
    })
  }
  return (
    <Container>
      <Input
        name='age'
        id='ageId'
        title='Age'
        type={INPUT_TYPES.NUMBER}
        value={inputs.age}
        handleOnChange={handleOnInputChange}
      />
      <Input
        name='weight'
        id='weightId'
        title='Weight in kg'
        type={INPUT_TYPES.NUMBER}
        value={inputs.weight}
        handleOnChange={handleOnInputChange}
      />
      <Input
        name='height'
        id='heightId'
        title='Height in cm'
        type={INPUT_TYPES.NUMBER}
        value={inputs.height}
        handleOnChange={handleOnInputChange}
      />
      <Select
        name='gender'
        id='genderId'
        title='Gender'
        options={GENDERS}
        value={inputs.gender}
        handleOnChange={handleOnInputChange}
      />
      <Select
        name='activity'
        id='activityId'
        title='Activity'
        options={ACTIVITIES}
        value={inputs.activity}
        handleOnChange={handleOnInputChange}
      />
      <Input
        name='changeWeight'
        id='changeWeightId'
        title='Change weight in a week'
        type={INPUT_TYPES.NUMBER}
        value={inputs.changeWeight}
        handleOnChange={handleOnInputChange}
      />
      <Button onClick={handleOnCalculateClick}>Calculate</Button>
      <Bmr>
        <Title>Daily calories to stay at your weight: </Title>
        {BMR.BMR}
      </Bmr>
      <Bmr>
        <Title>Your daily budget based on your goal: </Title>
        {BMR.dailyCaloriesBudget}
      </Bmr>
    </Container>
  )
}
