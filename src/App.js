import './App.css'
import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import ReactContext from './ReactContext'
import MeetingHome from './components/MeetingHome'
import LoginMeeting from './components/LoginMeeting'
import PageNotFound from './components/PageNotFound'

class App extends Component {
  state = {
    username: '',
    topic: 'ARTS_AND_CULTURE',
    isRegistered: false,
    errorMsg: false,
  }

  updateUsername = value => {
    this.setState({username: value})
  }

  changeTopic = value => {
    this.setState({topic: value})
  }

  changeRegisterStatus = () => {
    this.setState({isRegistered: true})
  }

  updateErrorMsg = value => {
    this.setState({errorMsg: value})
  }

  render() {
    const {username, topic, isRegistered, errorMsg} = this.state
    return (
      <ReactContext.Provider
        value={{
          username,
          topic,
          errorMsg,
          isRegistered,
          updateErrorMsg: this.updateErrorMsg,
          updateUsername: this.updateUsername,
          changeTopic: this.changeTopic,
          changeRegisterStatus: this.changeRegisterStatus,
        }}
      >
        <Switch>
          <Route exact path="/" component={MeetingHome} />
          <Route exact path="/register" component={LoginMeeting} />
          <Route exact path="/not-found" component={PageNotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </ReactContext.Provider>
    )
  }
}
export default App
