import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import GamesContext from "../utils/GameContext"
import styles from "./mystyle.module.css"
import Logo from "../images/disney-logo.png"
import Logo2 from "../images/mickey-mouse.png"
import SignUp from "../pages/SignUp"
import Login from "../pages/Login"

function NavbarItem() {
  const { logout } = useContext(GamesContext)
  const [signupshow, setShowSignup] = useState(false)
  const [loginshow, setShowLogin] = useState(false)

  const handleOpenLogin = () => {
    setShowLogin(true)
  }

  const handleCloseLogin = () => {
    setShowLogin(false)
  }

  const handleOpenSignup = () => {
    setShowSignup(true)
  }

  const handleCloseSignup = () => {
    setShowSignup(false)
  }
  return (
    <>
      <nav className={styles.shift}>
        <ul>
          <img src={Logo} height={100} />
          <img src={Logo2} height={100} />
          <li>
            <Link to="/"> Home </Link>
          </li>
          {localStorage.token ? (
            <>
              <li>
                <Link to="/profile" className={{ textDecoration: "none" }}>
                  {" "}
                  Profile{" "}
                </Link>
              </li>
              <li>
                <Link to="/" className={{ textDecoration: "none" }} onClick={logout}>
                  {" "}
                  Logout{" "}
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/" className={{ textDecoration: "none" }} onClick={handleOpenSignup}>
                  {" "}
                  Sign Up{" "}
                </Link>
              </li>
              <li>
                <Link to="/" className={{ textDecoration: "none" }} onClick={handleOpenLogin}>
                  {" "}
                  Login{" "}
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
      <SignUp signupshow={signupshow} handleCloseSignup={handleCloseSignup} handleOpenLogin={handleOpenLogin} />
      <Login loginshow={loginshow} handleCloseLogin={handleCloseLogin} />
    </>
  )
}

export default NavbarItem
