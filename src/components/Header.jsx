import RootHeaderImage from '../assets/root-header.png'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div>
        <Link to="/">
            <img src={RootHeaderImage} alt="root-header" style={{width: "100vh"}}/>
        </Link>
    </div>
  )
}

export default Header;