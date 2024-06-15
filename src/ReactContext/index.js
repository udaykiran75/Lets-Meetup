import React from 'react'

const ReactContext = React.createContext({
  username: '',
  topic: '',
  errorMsg: false,
  isRegistered: false,
  updateErrorMsg: () => {},
  updateUsername: () => {},
  changeTopic: () => {},
  changeRegisterStatus: () => {},
})
export default ReactContext
