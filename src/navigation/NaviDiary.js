import mypage from '../img/navicon_my.png'
import logout from '../img/navicon_logout.png'
import home from '../img/navicon_home.png'
import './navi.css'
const NaviDiary = (props) => {

    const handlerClickHome = () => {
        props.history.push('/someus');
    };

    const handlerClickMyPage = () => {
        props.history.push(`/someus/private/token에서 추출한 subject`);
    };

   
    return (
        <>
        <div id='header'>
            <div className= 'menu'>
                <input type="image" 
                        className= 'home'
                        src={home}
                        onClick={ handlerClickHome }></input>
                <div className='loginMessage'>
                    <p className="name">{ props.name }의 일기장 ◡̈⋆*</p>
                    <button type="button"
                            className= 'myPage' 
                            value="마이페이지"
                            onClick={ handlerClickMyPage }><img src={mypage} /></button>
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

export default NaviDiary;


// 초초 나 갈게 ㅜㅜ 무리하지말고 근양대충 하고 가 내일 하면 되지 우리 2일밖에 안 됐어 