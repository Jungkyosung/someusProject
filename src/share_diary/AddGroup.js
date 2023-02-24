import { keyboardImplementationWrapper } from "@testing-library/user-event/dist/keyboard";
import axios from "axios";
import { useState, useRef, useEffect } from "react";
import './addgroup.css';
import AddGroupNext from "./AddGroupNext";


const AddGroup = ( props, { history }) => {

    //AddGroupNext모달 값
    const [modalState, setModalState] = useState(false);

    const closeModal = () => {
        setModalState(false);
      };

    //모달 창
    useEffect(() => {
        document.body.style.cssText = `
        position: fixed;
        top: -${window.scrollY}px;
        overflow-y: scroll;
        width: 100%;`;

        return () => {
            const scrollY = document.body.style.top;
            document.body.style.cssText = '';
            window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
        };
    }, []);

    const modalClose = () => {
        props.closeModal();
        console.log(props.closeModal());
    }

    const [shareRoomName, setShareRoomName] = useState('');
    const [memberId, setMemberId] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        
        axios.post(`http://localhost:8080/api/someus/addgroup`,
            { "share_room_name": shareRoomName },
            { headers: { 'Authorization': `Bearer ${sessionStorage.getItem('token')}` } }
        )
            .then((response) => {
                console.log(response);
                alert(`${shareRoomName} 정상적으로 등록되었습니다.`);
                history.push(`/someus/groupnext`)
                setModalState(true);
            })
            .catch((error) => {
                alert(`등록에 실패했습니다.`);
                console.log(error);
                return;
            })

    };

    const handlerChangeRoomName = (e) => {
        setShareRoomName(e.target.value);
    };



    return (
        <>
            <div className="modal" onClick={modalClose}>
                <div className="modalBody" onClick={(e) => e.stopPropagation()}>
                    <div className="addgroup_background" >
                        <div className="addgroup_box">
                            <div className="addgroup_con">
                                <div className="groupdiary"></div>
                                <form onSubmit={onSubmit}>

                                    <div className="grouptitle">
                                        <span className="grouptitleimg"></span>
                                        <input type="text"
                                            value={shareRoomName}
                                            onChange={handlerChangeRoomName}
                                            placeholder='교환 일기의 이름을 정해 주세요.'>
                                        </input>
                                    </div>
                                    <button type="submit">짝꿍 등록하기</button>
                                    {modalState && <AddGroupNext closeModal={closeModal} />}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddGroup;