import './index.css'

const Message = props => {
  const {isLoggedIn} = props
  const message = isLoggedIn ? 'welcome user' : 'please Login'

  return <h1 className="message">{message}</h1>
}

export default Message
