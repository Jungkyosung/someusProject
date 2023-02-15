import axios from "axios";
import { useState } from "react";
import { withRouter } from "react-router-dom";


const Loginpage = ({ history }) => {
    //id, pw state 설정
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    //id 바뀌면 state에 저장
    const handlerIdInput = (e) => {
        setId(e.target.value);
        console.log(id);
    };
    //pw 바뀌면 state에 저장
    const handlerPwInput = (e) => {
        setPw(e.target.value);
        console.log(pw);
    };


    const handlerRegist = () => {
        console.log(history);
        history.push('/regist');
    };

    const handlerSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/login', {
                id,
                pw,
            });
            localStorage.setItem('token', response.data.token);

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="loginPage">
            <div className="logo">로고사진</div>
            <div className="loginInput">
                <form onSubmit={handlerSubmit}>
                    {/* id, pw가 값이 있다면 label의 클래스명이 바껴서 다른 css가 적용되도록. */}
                    <div className={id === '' ? "dust-class" : "non-dust-class"}>
                        <label><span>아이디</span></label><span className="A">A</span>
                        <input value={id} onChange={handlerIdInput}></input>
                    </div>
                    <div className={pw === '' ? "dust-class" : "non-dust-class"}>
                        <label><span>비밀번호</span></label><span className="A">A</span>
                        <input type="password" value={pw} onChange={handlerPwInput}></input>

                    </div>
                    <div>
                        <button type="submit">로그인</button>
                        <button type="button" onClick={handlerRegist}>회원가입</button>
                    </div>
                </form>

            </div>
        </div>
    );
};
export default withRouter(Loginpage);