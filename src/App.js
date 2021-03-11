import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import UsersContainer from './Components/Users/UsersContainer'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Profile from './Components/Profile/Profile'
import News from './Components/News/News'
import Music from './Components/Music/Music'
import Settings from './Components/Settings/Settings'
import DialogsContainer from './Components/Dialogs/DialogsContainer'

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <BrowserRouter>
        <div className="app-wrapper">
          <Navbar />
          <Header />
          <div className="app-wrapper-content">
            <Route path="/dialogs" render={() => <DialogsContainer />} />
            <Route path="/profile" render={() => <Profile />} />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/news" render={News} />
            <Route path="/music" render={Music} />
            <Route path="/settings" render={Settings} />
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
