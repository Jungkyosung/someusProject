import NaviDiary from "../navigation/NaviDiary";
import './myPage.css';
// import jwt_decode from "jwt-decode";

const MyPage = ({ history }) => {
    const token = sessionStorage.getItem("token");
    // const decode_token = jwt_decode(token);
    // const name = decode_token.name;

    const handlerPrivate = () => {
        history.push('/someus/private');
    };

    const handlerShare = () => {
        history.push('/someus/share/grouplist');
    };

    return (
        <>
        <NaviDiary history={history}/>
            <div className="mypageBackground">
                <div className="mypage">
                    <button className="myD"
                        onClick={handlerPrivate}>
                    </button>
                    <button className="groupD"
                        onClick={handlerShare}>
                    </button>
                </div>
            </div>
        </>
    );
};

export default MyPage;