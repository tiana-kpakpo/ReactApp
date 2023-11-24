import './index.css'
import './App.css'
import Routes from './routes'
import { AuthProvider } from './context/AuthContext'
import { GoogleOAuthProvider } from '@react-oauth/google';




function App() {

  // const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;


  return (

    <>
      <GoogleOAuthProvider clientId= {import.meta.env.VITE_GOOGLE_CLIENT_ID}>


    <AuthProvider>

      <Routes/>

    </AuthProvider>

    </GoogleOAuthProvider>


    </>

  )
}

export default App
