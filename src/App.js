
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Loginpage from './login/Loginpage';
import Regist from './regist/Regist'

function App() {
  return (
    <>
      <BrowserRouter>
      <Route path="/regist" component={Regist} />
      <Regist/>
      <hr/>
      <Loginpage/>
      </BrowserRouter>
    </>
  );
}

export default App;
