import axios from "axios";
import { useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";
import './groupList.css';
import NavigationDiary from "../navigation/NaviDiary";
import GroupShareList from "./GroupShareList";
import GroupShareEach from "./GroupShareEach";
import AddGroup from "./AddGroup";



const GroupList = (props) => {
    // 모달
    const [modalState, setModalState] = useState(false);

    const closeModal = () => {
        setModalState(false);
      };
    
    // 일기
    const [ groupList, setGroupList ] = useState([]);
    let title="우리들의 일기";

    useEffect(() => {
        axios.get(`http://localhost:8080/api/someus/share/grouplist`,
                { headers: { 'Authorization' : `Bearer ${ sessionStorage.getItem('token') }`}})
            .then(response => {
                console.log(response);
                setGroupList(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    })

    const handlerClickAdd = () => {
        // props.history.push('/someus/addgroup');
        setModalState(true);
    };

    return (
        <>
            <NavigationDiary />
            <div className="groupList_background">
            <div className="grouplist_box">
                    <input type="button"
                            className="groupAddbtn"
                            onClick={ handlerClickAdd }></input>
                {modalState && <AddGroup closeModal={closeModal} />}
                
                {/* { groupList.map((groupList, index) => 
                    <div key={ index }>
                        <p>{ groupList.title }</p>
                        <p>{ groupList.img }</p>
                    </div>) } */}
            
        
                    <GroupShareEach />
                    <GroupShareEach />
                    <GroupShareEach />
                    <GroupShareEach />
                    <GroupShareEach />
                    <GroupShareEach />
                </div>
                
            </div>
        </>
    );
}


export default GroupList;