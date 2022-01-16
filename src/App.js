import axios from "axios"
import { useEffect, useState } from "react"
import { Routes, Route, useNavigate } from "react-router-dom"
import Home from "./pages/Home"
import SignUp from "./pages/SignUp"
import Login from "./pages/Login"
import GamesContext from "./utils/GameContext"
import Profile from "./pages/Profile"
import NavbarItem from "./components/Navbar"
import OneGame from "./pages/OneGame"
import OneTicket from "./pages/OneTicket"

function App() {
  const [games, setGames] = useState([])
  const [tickets, setTickets] = useState([])
  
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
    getTickets()
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
const getTickets = async() => {
  const response = await axios.get("http://localhost:5000/api/auth/gametickets")
    setTickets(response.data)
    getProfile()
}
   //  اد تكت
  const addTicket = async (e, gameId) => {
    e.preventDefault()
    try {
      const form = e.target
      const ticketBody = {
        date: form.elements.date.value,
      }

      form.reset()
      await axios.post(`http://localhost:5000/api/games/${gameId}/tickets`, ticketBody, {
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

  const deleteComment = async (gameId, comment_id) => {
    await axios.delete(`http://localhost:5000/api/games/${gameId}/comments/${comment_id}`, {
     
      headers: {
        Authorization: localStorage.token,
      }, 
    })
    getGames()
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
    deleteComment,
    addTicket,
    tickets,
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
        <Route path="profile/ticket/:ticketId" element={<OneTicket />} />
      </Routes>
    </GamesContext.Provider>
  )
}

export default App
