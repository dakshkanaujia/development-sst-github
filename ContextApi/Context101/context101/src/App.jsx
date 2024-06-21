import Login from './Components/Login.jsx'
import Profile from './Components/Profile.jsx'
import UserContextProvider from './Context/UserContextProvider.jsx'

function App() {

  return (
    <UserContextProvider>
      <h1>Daksh Mini Context API Project</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
