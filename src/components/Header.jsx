import '../styles/Header.css'
import logo from '../images/logottin.png'

function Header(){
    return(
        <div id='heades'>
            <img src={logo} />
            <h1>Welcome to the awesome page!</h1>
        </div>
    );
}

export default Header;