import { useContext, useState } from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"
import GamesContext from "../utils/GameContext"
import styles from "./mystyle.module.css"
import Logo from "../images/disney-logo.png"
import Logo2 from "../images/mickey-mouse.png"
import Showcase from "./Showcase"
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
      {/* <header className={styles.navbar}>
        <nav>
          <ul>
            
            <li><a href="#"> Logo </a></li>
            {localStorage.token ? (
              <>
            <li><a href="/profile"> Profile </a></li>
            <li><a href="/" onClick={logout}> Logout </a></li>
           </> ): (
               <>
            <li><a href="#" onClick={handleOpenSignup}> Sign Up </a></li>
            <li><a href="#" onClick={handleOpenLogin} > Login </a></li> </>)}
          </ul>
        </nav>
        <h2>mmmmm</h2> {localStorage.token ? <h2>mmmmm</h2> : <h2>mmmmm</h2>}
      </header> */}

      {/* <Navbar className={styles.navbar}>
        <Container>
          <Navbar.Brand style={{ fontSize: "40px" }} src={Logo}>
            {Logo}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            {localStorage.token ? (
              <Nav className="ms-auto">
                <Link to="/profile" className="nav-link">
                  Profile
                </Link>
                <Link to="/" className="nav-link" onClick={logout}>
                  Logout
                </Link>
              </Nav>
            ) : (
              <Nav className="ms-auto">
                <div onClick={handleOpenSignup} className="nav-link">
                  Sign Up
                </div>
                <div onClick={handleOpenLogin} className="nav-link">
                  Login
                </div>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar> */}

      {/* <section style="background: #f1c40f; color: rgba(0, 0, 0, 0.5);"> */}

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
                <Link to="/profile" className={{ textDecoration: "none" }} >
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
                <Link to="/" className={{ textDecoration: "none" }}  onClick={handleOpenSignup}>
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

      {/* </section>   */}
    </>
  )
}

export default NavbarItem
