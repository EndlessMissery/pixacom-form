import logo from '../../assets/logo.webp';
import './Header.css';

function Header() {
  return (
    <header>
        <img className='logo' src={logo} alt="logo" />
    </header>
    );
}
export default Header;