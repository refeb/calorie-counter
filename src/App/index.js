import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'

import { Menu, MenuItem } from './Components/Menu'
import HomePage from './Pages/Home'
import AddFoodPage from './Pages/AddFood'
import LogsPage from './Pages/Logs'
import AddLogPage from './Pages/AddLog'
import EditLogPage from './Pages/EditLog/EditLog'

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
class App extends React.Component {
  render () {
    return (
      <MainContainer>
        <Container>
          <BrowserRouter>
            <Menu>
              <MenuItem exact to='/'>
                Home
              </MenuItem>
              <MenuItem to='/log'>Log</MenuItem>
              <MenuItem to='/food'>Food</MenuItem>
            </Menu>
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route path='/log/edit/:id' component={EditLogPage} />
              <Route path='/log/food/:id' component={AddLogPage} />
              <Route path='/log' component={LogsPage} />
              <Route path='/food' component={AddFoodPage} />
            </Switch>
          </BrowserRouter>
        </Container>
      </MainContainer>
    )
  }
}

export default App
