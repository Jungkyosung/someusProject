import { useState, useEffect, useRef } from 'react';
import './main.css';
import Navigation from '../navigation/Navigation';

const Main = ({history}) => {
    const [ message, setMessage ] = useState('');

    const letters = useRef('그날그날 겪은 일이나 생각, 느낌 등을 함께 또 따로 기록하는 일기장');    
    const letterIndex = useRef(0);

    const token = sessionStorage.getItem("token");
    
    const intervalId = setInterval(() => {
        const letter = letters.current.substr(letterIndex.current, 1);
        letterIndex.current ++;
        setMessage(message + letter);
        clearInterval(intervalId);
    }, 200);

    return(
        <>
        <Navigation history={history}/>
        <div className="main_background">
            <h1 className='text'>{message}</h1>
        </div>
        <div className="footer">
            <div className="copyright">
                <p>Copyright &copy; SOMEUS</p>
            </div>
        </div>
        </>
    );
}

export default Main;