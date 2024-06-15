import ReactContext from '../../ReactContext'

import {
  Homebgcontainer,
  Logoimage,
  RegisterContainer,
  RegisterHeading,
  RegisterText,
  RegisterButton,
  MeetupImage,
  RegisterName,
  RegisterTopic,
  LinkElement,
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

const MeetingHome = props => {
  const onClickRegister = () => {
    const {history} = props
    history.replace('/register')
  }

  const renderRegisterView = () => (
    <RegisterContainer>
      <RegisterHeading>Welcome to Meetup</RegisterHeading>
      <RegisterText>Please register for the topic</RegisterText>
      <LinkElement to="/register">
        <RegisterButton onClick={onClickRegister}>Register</RegisterButton>
      </LinkElement>
      <MeetupImage
        src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
        alt="meetup"
      />
    </RegisterContainer>
  )

  const renderRegisteredView = (username, topic) => {
    const selectedTopic = topicsList.filter(eachItem => eachItem.id === topic)

    return (
      <RegisterContainer>
        <RegisterName>{`Hello ${username}`}</RegisterName>
        <RegisterTopic>{`Welcome to ${selectedTopic[0].displayText}`}</RegisterTopic>
        <MeetupImage
          src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
          alt="meetup"
        />
      </RegisterContainer>
    )
  }

  return (
    <ReactContext.Consumer>
      {value => {
        const {username, topic, isRegistered} = value
        return (
          <Homebgcontainer>
            <Logoimage
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
              alt="website logo"
            />
            {isRegistered
              ? renderRegisteredView(username, topic)
              : renderRegisterView()}
          </Homebgcontainer>
        )
      }}
    </ReactContext.Consumer>
  )
}
export default MeetingHome
