
import { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Loginpage from './login/Loginpage';
import Modal from './modal/Modal';
import Regist from './regist/Regist'

function App() {
  const [modalState, setModalState] = useState(false);

  const closeModal = () => {
    setModalState(false);
  };


  return (
    <>
      <BrowserRouter>
        <div className='boxbox'></div>
        <Route path="/regist" component={Regist} />
        <Loginpage />
        <button value="모달띄우기" className="modalbtn" onClick={() => setModalState(true)}>모달띄우기버튼</button>
        {modalState && <Modal closeModal={closeModal} />}
        <hr />
      </BrowserRouter>
    </>
  );
}

export default App;
