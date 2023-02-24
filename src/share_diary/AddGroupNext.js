import { keyboardImplementationWrapper } from "@testing-library/user-event/dist/keyboard";
import axios from "axios";
import { useState, useRef } from "react";
import './addgroup.css';


const AddGroupNext = ( props, { history }) => {

    const [ shareRoomName, setShareRoomName ] = useState('');
    const [ memberId, setMemberId ] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        axios.post(`http://localhost:8080/api/someus/addgroup`,
            { "share_room_name": shareRoomName,
              "member_id": memberId },
              { headers: { 'Authorization' : `Bearer ${ sessionStorage.getItem('token') }`}}
            )
            .then((response) => {
                console.log(response);
                alert(`정상적으로 등록되었습니다.`);
                history.push(`/someus/grouplist`)
            })
            .catch((error) => {
                alert(`등록에 실패했습니다.`);
                console.log(error);
            })
    };



    const handlerChangeMemberId = (e) => {
        setMemberId(e.target.value);
    };

    return (
        <>
            <div className="addgroup_background" >
                <div className="addgroup_box">
                <div className="addgroup_con">
                    <div className="groupdiary" alt="GroupDiaryNew"></div>
                        <form onSubmit={ onSubmit }>
                            <div className="groupMemberid">
                                <span className="groupMemberidimg"></span>
                                <input type="text"
                                        value={ memberId }
                                        onChange={ handlerChangeMemberId }
                                        placeholder='함께할 친구의 아이디를 입력해 주세요.' />
                            </div>
                            <button type="submit">등록</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddGroupNext;