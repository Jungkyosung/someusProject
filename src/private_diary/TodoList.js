import { useState } from "react";
import "./TodoList.css";

const TodoList = () => {

    // 추후 서버로 배열 받아올 땐 초기값 빈배열 적용
    // const [todos, setTodos] = useState([]);
    // 할일 목록 출력 내용 상태 변수 정의(샘플데이터) 
    const [todos, setTodos] = useState([
        { id: 1, img: 0, text: '' },
        { id: 2, img: 0, text: '' },
        { id: 3, img: 0, text: '' },
        { id: 4, img: 0, text: '' },
        { id: 5, img: 0, text: '' },
        { id: 6, img: 0, text: '' },
        { id: 7, img: 0, text: '' }
    ]);

    //체크박스를 누를 때 마다 바뀔 이미지 3개
    const images = [
        '/img/todo_null.png',
        '/img/todo_ing.png',
        '/img/todo_ok.png'
    ]

    //todolist의 input 텍스트 업데이트 해주는 핸들러
    function handlerChange(id, e) {
        setTodos(prevState => {
            const updateArray = [...prevState];
            const index = updateArray.findIndex(item => item.id === id);
            updateArray[index] = { ...updateArray[index], text: e };
            return updateArray;
        });
    }


    // 어떻게 해야 todos.img를 각 객체별로 바꿀 수 있을까??? 
    //img값을 +1한 후 3으로 나눠서 나머지 값으로 대입.  
    function handlerImgClick(id) {
        setTodos(prevState => {
            const updateArray = [...prevState];
            const index = updateArray.findIndex(item => item.id === id);
            updateArray[index] = { ...updateArray[index], img: (updateArray[index].img + 1) % 3 };
            return updateArray;
        })
    }

    //todo 추가 버튼 핸들러
    const handelrAddTodo = () => {
        setTodos(prevTodos => [...prevTodos, { id: prevTodos.length + 1, img: 0, text: '' }]);
    };

    return (
        <>
            <div className="todo_box">
                
                <div className="Todo">이번 달 목표
                <button onClick={handelrAddTodo}>+</button>
                </div>
                {/* 체크박스 - 클릭 이벤트 => 1번 클릭: 50%, 2번 클릭: 100% */}
                <div className="TodoListCheckBox">
                    
                    <ul>
                        {todos.map((todo, index) => (
                            <li key={index}>
                                {todo.img === 0 ? <span><img className="checkboxImg" src={process.env.PUBLIC_URL + images[0]} alt="x" onClick={() => handlerImgClick(todo.id)} /></span> : ""}
                                {todo.img === 1 ? <span><img className="checkboxImg" src={process.env.PUBLIC_URL + images[1]} alt="x" onClick={() => handlerImgClick(todo.id)} /></span> : ""}
                                {todo.img === 2 ? <span><img className="checkboxImg" src={process.env.PUBLIC_URL + images[2]} alt="x" onClick={() => handlerImgClick(todo.id)} /></span> : ""}
                                <input key={index} type="text" value={todo.text} onChange={e => handlerChange(todo.id, e.target.value)} placeholder=""></input>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default TodoList;