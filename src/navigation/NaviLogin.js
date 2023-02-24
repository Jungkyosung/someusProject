import './navi.css'
import logo from '../img/logo_main.png'
import mypage from '../img/navicon_my.png'
import howTo from '../img/navicon_howTo.png'
import logout from '../img/navicon_logout.png'

const NaviLogin = (props) => {

    const handlerClickHome = () => {
        props.history.push('/someus');
    };

    const handlerClickMyPage = () => {
        props.history.push('/someus/private/~~');
    };

    const handlerClickGuide = () => {
        props.history.push('someus/guide');
    };

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
                        onClick={ handlerClickGuide }><img src={howTo}/></button>
                <div className="loginMessage">
                    <p className="name">{ props.name }의 일기장 ◡̈⋆*</p>
                    <button type="button"
                            className= 'myPage' 
                            value="마이페이지"
                            onClick={ handlerClickMyPage}><img src={mypage}/></button>
                    <button type="button"
                            className= 'logout' 
                            value="로그아웃"
                            onClick={ handlerClickMyPage }><img src={logout} /></button>
                </div>
            </div>
        </div>    
        </>
    );
}

export default NaviLogin;

