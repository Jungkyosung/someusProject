import { useState } from "react";

const Loginpage = () => {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const handlerIdInput = (e) => {
        setId(e.target.value);
        console.log(id);
    }

    //id가 값이 있다면 label의 클래스명이 바껴서 다른 css가 적용되도록.

    const handlerPwInput = (e) => {
        setPw(e.target.value);
        console.log(pw);
    }
    

    return (
        <>
            <div className={id === '' ? "dust-class" : "non-dust-class"}>
                <label><span>아이디</span></label><span className="A">A</span>
                    <input value={id} onChange={handlerIdInput}></input>
            </div>
            <div className={pw === '' ? "dust-class" : "non-dust-class"}>
                <label><span>비밀번호</span></label><span className="A">A</span>
                    <input type="password" value={pw} onChange={handlerPwInput}></input>
                
            </div>
        </>
    );
};
export default Loginpage;