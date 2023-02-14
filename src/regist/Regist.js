import { useCallback, useState } from "react";

const Regist = () => {
    //필드도 줄일수 있든가? 가능할듯?
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [confirmPwdMsg, setConfirmPwdMsg] = useState('');

    //핸들러 줄이기 필요
    const handlerNameInput = (e) => {
        setName(e.target.value);
        console.log(name);
    }
    const handlerNicknameInput = (e) => {
        setNickname(e.target.value);
        console.log(nickname);
    }
    const handlerEmailInput = (e) => {
        setEmail(e.target.value);
        console.log(email);
    }
    const handlerPasswordInput = (e) => {
        setPassword(e.target.value);
        console.log(password);
    }
    const handlerPassword2Input = useCallback((e) => {
        setPassword2(e.target.value);
        console.log(e);
        
        if(password2 === '') {
            setConfirmPwdMsg('');
            return true;
        }
        if(password2 !== password){
            setConfirmPwdMsg("비밀번호가 일치하지 않습니다.");
        } else {
            setConfirmPwdMsg("올바른 비밀번호입니다.");
        }
    },[password2])
    
    //컴포넌트로 묶어서? 줄이기 필요 
    return (
        <>
            <div className={name === '' ? "dust-class" : "non-dust-class"}>
                <label><span>이름</span></label><span className="A">A</span>
                    <input value={name} onChange={handlerNameInput}></input>
            </div>
            <div className={nickname === '' ? "dust-class" : "non-dust-class"}>
                <label><span>닉네임</span></label><span className="A">A</span>
                    <input value={nickname} onChange={handlerNicknameInput}></input>
            </div>
            <div className={email === '' ? "dust-class" : "non-dust-class"}>
                <label><span>이메일</span></label><span className="A">A</span>
                    <input value={email} onChange={handlerEmailInput}></input>
            </div>
            <div className={password === '' ? "dust-class" : "non-dust-class"}>
                <label><span>비밀번호</span></label><span className="A">A</span>
                    <input type="password" value={password} onChange={handlerPasswordInput}></input>
            </div>
            <div className={password2 === '' ? "dust-class" : "non-dust-class"}>
                <label><span>비밀번호 확인</span></label><span className="A">A</span>
                    <input type="password" value={password2} onChange={handlerPassword2Input}></input>
            </div>
            <div>{confirmPwdMsg}</div>
        </>
    );
};
export default Regist;