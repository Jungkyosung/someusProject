import './navi.css'
import logo from '../img/logo_main.png'
import login from '../img/navicon_login.png'
import howTo from '../img/navicon_howTo.png'

const NaviLogout = (props) => {

    const handlerClickHome = () => {
        props.history.push('/someus');
    };

    const handlerClickGuide = () => {
        props.history.push('/someus/guide');
    }

    const handlerClickLogin = () => {
        props.history.push('/someus/login');
    }

    return(
        <>
        <div id='header'>
        <div className="menu">
                <input type="image" 
                        className= 'navi_icon'
                        src={logo}
                        alt="SOMEUS"
                        onClick={ handlerClickHome }></input>
                <button type="button"
                        className= 'howTo' 
                        onClick={ handlerClickGuide }><img src={howTo} alt="howto"/></button>
                <div className="loginMessage">
                    <button type="button"
                            className= 'login' 
                            onClick={ handlerClickLogin }><img src={login} alt="LOGIN"/></button>
                </div>
            </div>
            </div>
        </>
    );
}

export default NaviLogout;