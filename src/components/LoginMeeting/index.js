import ReactContext from '../../ReactContext'

import {
  Loginbgcontainer,
  Logoimage,
  Logincontainer,
  Loginimage,
  Formelement,
  Heading,
  InputDiv,
  Label,
  Input,
  Select,
  RegisterButton,
  Errormsg,
} from './styledComponents'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const LoginMeeting = props => (
  <ReactContext.Consumer>
    {value => {
      const {
        username,
        topic,
        updateUsername,
        changeTopic,
        errorMsg,
        updateErrorMsg,
        changeRegisterStatus,
      } = value

      const onChangeUsername = event => {
        updateUsername(event.target.value)
      }

      const onChangeTopic = event => {
        changeTopic(event.target.value)
      }

      const onClickSubmitform = event => {
        event.preventDefault()
        if (username !== '') {
          const {history} = props
          history.replace('/')
          changeRegisterStatus()
        } else {
          updateErrorMsg(true)
        }
      }

      return (
        <Loginbgcontainer>
          <Logoimage
            src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
            alt="website logo"
          />
          <Logincontainer>
            <Loginimage
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
              alt="website register"
            />
            <Formelement onSubmit={onClickSubmitform}>
              <Heading>Let us join</Heading>
              <InputDiv>
                <Label htmlFor="username">NAME</Label>
                <Input
                  type="text"
                  id="username"
                  placeholder="Your name"
                  value={username}
                  onChange={onChangeUsername}
                />
              </InputDiv>
              <InputDiv>
                <Label htmlFor="topics">TOPICS</Label>
                <Select value={topic} onChange={onChangeTopic} id="topics">
                  {topicsList.map(eachTopic => (
                    <option key={eachTopic.id} id="topics" value={eachTopic.id}>
                      {eachTopic.displayText}
                    </option>
                  ))}
                </Select>
              </InputDiv>
              <RegisterButton type="submit">Register Now</RegisterButton>
              {errorMsg && <Errormsg>Please enter your name</Errormsg>}
            </Formelement>
          </Logincontainer>
        </Loginbgcontainer>
      )
    }}
  </ReactContext.Consumer>
)
export default LoginMeeting
