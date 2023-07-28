import {Link, useHistory} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Header = () => {
  const history = useHistory()

  const onLogOut = () => {
    localStorage.setItem('curr_page', 1)
    Cookies.remove('jwt_token')
    history.push('/login')
  }

  return (
    <div className="header-container">
      <Link to="/">
        <div className="logo-container">
          <img
            src="https://res.cloudinary.com/dfzlpem5o/image/upload/v1690351226/Frame_274_h7zryd.jpg"
            alt="logo"
            className="logo"
          />
          <h1 className="head">Tasty Kitchens</h1>
        </div>
      </Link>
      <ul className="un-ordered">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/cart">
          <li>Cart</li>
        </Link>
        <li>
          <button type="button" className="btn" onClick={onLogOut}>
            Logout
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Header
