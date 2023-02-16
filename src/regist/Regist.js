import { useCallback, useEffect, useState } from "react";
import { MdCheckCircleOutline } from "react-icons/md";

const Regist = () => {
    //입력 받을 속성들
    const [ form, setForm ] = useState({
        id: '',
        email:'',
        password:'',
        passwordConfirm:''
    });

    //유효성 검사시 오류 메시지
    const [confirmMsg, setConfirmMsg] = useState({
        msgIdConfirm: '',
        msgEmailConfirm: '',
        msgPwConfirm: '',
        msgPwMatchConfirm: ''
    });

    //유효성 검사 상태체크
    const [ isValid, setIsValid ] = useState({
        isId: false,
        isEmail: false,
        isPassword: false,
        isPasswordConfirm: false,
        isRegistButton: false
    });

    //아이디 검증
    const onChangeId = useCallback( e => {
        const userIdRegex = /^[A-Za-z0-9+]{5,}$/;
        const idCurrent = e.target.value;
        setForm({...form, id: idCurrent});

        if(!userIdRegex.test(idCurrent)){
            setConfirmMsg({...confirmMsg, msgIdConfirm:'아이디 형식이 틀렸습니다. 숫자와 영문을 포함한 5글자 이상의 문자를 입력해주세요.(특수문자 제외)'});
            setIsValid({...isValid, isId:false});
        } else {
            setConfirmMsg({...confirmMsg, msgIdConfirm:' '});
            setIsValid({...isValid, isId:true});
        }
    })

    //이메일 검증
    const onChangeEmail = useCallback( e => {
        const emailRegex = /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        const emailCurrent = e.target.value;
        setForm({...form, email: emailCurrent});

        if(!emailRegex.test(emailCurrent)){
            setConfirmMsg({...confirmMsg, msgEmailConfirm:'이메일 형식이 틀렸습니다. 다시 확인해주세요.'});
            setIsValid({...isValid, isEmail:false});
        } else {
            setConfirmMsg({...confirmMsg, msgEmailConfirm:' '});
            setIsValid({...isValid, isEmail:true});
        }
    })

    //비밀번호 검증
    const onChangePw = useCallback( e => {
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
        const passwordCurrent = e.target.value;
        setForm({...form, password: passwordCurrent});

        if(!passwordRegex.test(passwordCurrent)){
            setConfirmMsg({...confirmMsg, msgPwConfirm:'숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요.'});
            setIsValid({...isValid, isPassword:false});
        } else {
            setConfirmMsg({...confirmMsg, msgPwConfirm:' '});
            setIsValid({...isValid, isPassword:true});
        }
    })

    //비밀번호 확인 검증
    const onChangePwConfirm = useCallback( e => {
        const passwordConfirmCurrent = e.target.value;
        setForm({...form, passwordConfirm: passwordConfirmCurrent});

        if(form.password === passwordConfirmCurrent){
            setConfirmMsg({...confirmMsg, msgPwMatchConfirm:' '});
            setIsValid({...isValid, isPasswordConfirm:true});
        } else {
            setConfirmMsg({...confirmMsg, msgPwMatchConfirm:'비밀번호가 일치하지 않아요. 다시 확인해주세요.'});
            setIsValid({...isValid, isPasswordConfirm:false});
        }
    })
    
    
    //로그인 인풋 출력 추후 form태그로 axois사용해서 서버로 post처리 해야함.
    return (
        <>
            <div className={form.id === '' ? "dust-class" : "non-dust-class"}>
                <label><span>아이디</span></label><span className="A">A</span>
                    <input value={form.id} onChange={onChangeId} placeholder="아이디"></input>
                    {isValid.isId ? <MdCheckCircleOutline className="checkCircle"/> : ""}
            </div>
            <div>{confirmMsg.msgIdConfirm}</div>
            <div className={form.email === '' ? "dust-class" : "non-dust-class"}>
                <label><span>이메일</span></label><span className="A">A</span>
                    <input value={form.email} onChange={onChangeEmail} placeholder="이메일"></input>
                    {isValid.isEmail ? <MdCheckCircleOutline className="checkCircle"/> : ""}
            </div>
            <div>{confirmMsg.msgEmailConfirm}</div>
            <div className={form.password === '' ? "dust-class" : "non-dust-class"}>
                <label><span>비밀번호</span></label><span className="A">A</span>
                    <input type="password" value={form.password} onChange={onChangePw} placeholder="비밀번호"></input>
                    {isValid.isPassword ? <MdCheckCircleOutline className="checkCircle"/> : ""}
            </div>
            <div>{confirmMsg.msgPwConfirm}</div>
            <div className={form.passwordConfirm === '' ? "dust-class" : "non-dust-class"}>
                <label><span>비밀번호 확인</span></label><span className="A">A</span>
                    <input type="password" value={form.passwordConfirm} onChange={onChangePwConfirm} placeholder="비밀번호 확인"></input>
                    {isValid.isPasswordConfirm ? <MdCheckCircleOutline className="checkCircle"/> : ""}
            </div>
            <div>{confirmMsg.msgPwMatchConfirm}</div>
            <button disabled={!(isValid.isId && isValid.isEmail && isValid.isPassword && isValid.isPasswordConfirm)} >가입하기</button>
        </>
    );
};
export default Regist;