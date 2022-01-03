import axios from "axios"
import { useEffect, useState } from "react"
import { Routes, Route, useNavigate } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import SignUp from "./pages/SignUp"
import Login from "./pages/Login"
import GamesContext from "./utils/GameContext"
import Profile from "./pages/Profile"
import WebFont from "webfontloader" // أحذفه ماني محتاجته
import NavbarItem from "./components/Navbar"
import Showcase from "./components/Showcase"
import OneGame from "./pages/OneGame"

function App() {
  const [games, setGames] = useState([])
  const [profile, setProfile] = useState(null)
  const navigate = useNavigate()


  const getGames = async () => {
    const response = await axios.get("http://localhost:5000/api/games")
    setGames(response.data)
  }

  const getProfile = async () => {
    const response = await axios.get("http://localhost:5000/api/auth/profile", {
      headers: {
        Authorization: localStorage.token,
      },
    })
    setProfile(response.data)
  }

  useEffect(() => {
    getGames()
    if (localStorage.token) getProfile()
  }, [])

  const signup = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const userBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
        avatar: form.elements.avatar.value,
      }

      await axios.post("http://localhost:5000/api/auth/signup", userBody)
      console.log("signup success")
    } catch (error) {
      console.log(error)
    }
  }

  const login = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const userBody = {
        email: form.elements.email.value,
        password: form.elements.password.value,
      }

      const response = await axios.post("http://localhost:5000/api/auth/login", userBody)

      const token = response.data
      localStorage.token = token

      getProfile()
      console.log("login success")

      navigate("/")
    } catch (error) {
      if (error.response) console.log(error.response.data)
      else console.log(error)
    }
  }

  const logout = () => {
    localStorage.removeItem("token")
    console.log("logout success")
  }

  const addRating = async (gameId, rating) => {
    try {
      const ratingBody = {
        rating,
      }
      await axios.post(`http://localhost:5000/api/games/${gameId}/ratings`, ratingBody, {
        headers: {
          Authorization: localStorage.token,
        },
      })
      getGames()
    } catch (error) {
      if (error.response) console.log(error.response.data)
      else console.log(error)
    }
  }

  const likeGame = async gameId => {
    try {
      const response = await axios.get(`http://localhost:5000/api/games/${gameId}/likes`, {
        headers: {
          Authorization: localStorage.token,
        },
      })
      getGames()
    } catch (error) {
      if (error.response) console.log(error.response.data)
      else console.log(error)
    }
  }

  const addComment = async (e, gameId) => {
    e.preventDefault()
    try {
      const form = e.target
      const commentBody = {
        comment: form.elements.comment.value,
      }

      form.reset()
      await axios.post(`http://localhost:5000/api/games/${gameId}/comments`, commentBody, {
        headers: {
          Authorization: localStorage.token,
        },
      })

      getGames()
    } catch (error) {
      if (error.response) console.log(error.response.data)
      else console.log(error)
    }
  }

  const store = {
    games,
    profile,
    signup,
    login,
    logout,
    addRating,
    likeGame,
    addComment,
    // signupshow,
    // loginshow,
    // handleOpenLogin,
    // handleCloseLogin,
    // handleOpenSignup,
    // handleCloseSignup,
  }

  return (
    <GamesContext.Provider value={store}>
      <NavbarItem />

      <SignUp />
      <Login />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/game/:gameId" element={<OneGame />} />
      </Routes>
    </GamesContext.Provider>
  )
}

export default App
