import axios from "axios";
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './datepicker.css';
import MyDiaryEach from "./MyDiaryEach";
import ko from 'date-fns/locale/ko';
import pentool from '../img/pentool.png';
import NaviDiary from "../navigation/NaviDiary";
import '../navigation/navi.css';
import './mydiarylist.css';
import TodoList from "./TodoList";
import Modal_Mydiary from "./Modal_Mydiary";
import jwt_decode from 'jwt-decode';

const MyDiaryList = ({ history, name }) => {

    const [modalState, setModalState] = useState(false);

    const [responseMemberId,setResponseMemberId] = useState();
    const memberId = 'jkstest';
    const memberPw = "wjdrytjd@";
    const closeModal = () => {
        setModalState(false);
    };

    const [token, setToken ] = useState('');

    //리스트가 마운트 될 때, token값을 받아와서 로그 출력해봄.
    useEffect(() => {
        axios.post(`http://localhost:8080/login`,
                { memberId, memberPw })
                .then((response) => {
                    console.log('response-----');
                    console.log(response);
                    console.log(response.data);
                    console.log(jwt_decode(response.data).sub);
                    console.log('responseMemberId');
                    setResponseMemberId(jwt_decode(response.data).sub);
                    console.log(responseMemberId);
                    setToken(response.data);
                    setList(response.data.list);
                    console.log('------token-----------');
                    sessionStorage.setItem('token',response.data);
                    console.log(sessionStorage.getItem('token'));
                    getTodos();
                })
                .catch((error) => {
                    console.log(error);
                    return;
                })
    },[]);

    const [list, setList] = useState([]);
    const [startDate, setStartDate] = useState(new Date());

    //{ 변수 }TodoList 기본 데이터(서버에서 GET으로 받아와야 함.)setTodos(response.data.list)
    const [todos, setTodos] = useState([]);

    //{ 함수 }Todos를 받아오는 함수 설정, useEffect할 때 getTodos함수 실행 필요!!
    async function getTodos(){
        try {
            const response = await axios.get('http://localhost:8080/api/someus/private/goal',
            {   headers: { 'Authorization': `Bearer ${sessionStorage.getItem('token')}` },
                params:{
                    memberId: memberId,
                    goalDate: startDate 
                }
            });
            console.log('response.data=',response.data);
            const dataA = response.data;
            setTodos(dataA);
            //데이터가 저장되어도 한박자 느리게 반응되니까 useCallback으로 조정해야 할 듯.
            console.log('response.data=todos');
            console.log(todos);
        } catch(error){
            console.log(error);
            return;
        };
    };

    // 요일의 이름 반환
    const getDayName = (date) => {
        return date.toLocaleDateString('ko-KR', {
            weekday: 'long',
        }).substr(0, 1);
    };

    // 날짜를 년, 월, 일로 비교
    const createDate = (date) => {
        return new Date(new Date(date.getFullYear()
            , date.getMonth()
            , date.getDate()
            , 0
            , 0
            , 0));
    };

    const handlerClickWrite = () => {
        history.push(`/someus/private/write`)
    }

    // 날짜 변경 시 해당 날짜를 기준으로 목록이 리랜더링
    const handlerChangeDate = (date) => {
        setStartDate(date);
        console.log(startDate);
        axios.get(`http://localhost:8080/api/someus/private/다이어리아이디`,
            { headers: { 'Authorization': `Bearer ${sessionStorage.getItem('token')}` } })
            .then((response) => {
                console.log(response);
                // 해당하는 날짜에 대한 일기의 데이터가 없을 경우
                if (response.data.list === null) {
                    alert(`일기를 작성하지 않았어요.`);
                }
                // 해당하는 날짜에 대한 일기의 데이터가 있는 경우 리스트를 새로 만들어 map 함수 실행
                else {
                    // history.push(`/someus/private/${diaryId}`);
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <>
            <div /*style={{ border: '3px solid red' }}*/>
                <NaviDiary name={name} />
                <div className='diarylist_background'
                /*style={{ backgroundImage: `url('../img/bg_mylist.png')`}}*/ >
                    {/* <img src={backimg} style={ { backgroundAttachment: 'fixed'}}/> */}
                    <div className='body' >
                        <div className="calendar-container">
                            <div className="calendar-box">
                                <DatePicker
                                    // 시작 날짜 셋팅
                                    selected={startDate}
                                    locale={ko}
                                    // 날짜가 클릭되면 해당 날짜로 이동
                                    onChange={handlerChangeDate}
                                    inline
                                    // 토, 일 색깔 변경
                                    dayClassName={date =>
                                        getDayName(createDate(date)) === '토' ? "saturday"
                                            :
                                            getDayName(createDate(date)) === '일' ? "sunday" : undefined
                                    }
                                    todayButton="today"
                                />
                            </div>
                            <div className="todo-box">
                                <TodoList todos={todos} setTodos={setTodos} startDate={startDate} getTodos={getTodos}/>
                            </div>
                        </div>
                        <div className='diary-container'>
                            <div>
                                <p>{name}의 일기</p>
                                <p className='date'>{startDate.getMonth() + 1} {startDate.toLocaleString("en-US", { month: "long" })}</p>
                            </div>

                            <button className='write' onClick={handlerClickWrite}>
                                <div className='write-button'>
                                    <img src={pentool} style={{ width: '15px', height: '15px' }} />
                                    <span> 일기 쓰기 </span>
                                </div>
                            </button>




                            {/* <img src={pentool} />
                        <input type='button'
                            value='일기 쓰기'
                            onClick={handlerClickWrite} /> */}
                            <div className='diary'>
                                {/* <div style={{ width: '300px', float: 'left' }}>
                            {list.map((list, index) => <MyDiaryEach key={index} list={list} />)}
                        </div> */}
                                {/* 하드코딩 테스트용 */}
                                {/* map으로 돌릴 때 모달에 넘길 index나 날짜 요소 필요 */}
                                <div className="diaryWrap">
                                    {modalState && <Modal_Mydiary closeModal={closeModal} />}
                                    <button type="button" onClick={() => setModalState(true)} ><MyDiaryEach /></button>
                                    <MyDiaryEach />
                                    <MyDiaryEach />
                                    <MyDiaryEach />
                                    <MyDiaryEach />
                                    <MyDiaryEach />
                                    <MyDiaryEach />
                                    <MyDiaryEach />
                                    <MyDiaryEach />
                                    <MyDiaryEach />
                                </div>


                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );

}

export default MyDiaryList;