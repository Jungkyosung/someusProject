import Navigation from '../navigation/Navigation';
import './main.css';
// import howtoBg from 'C:/Javascript/someus-app/src/img/bgB_detail.png';
import howto from '../img/mood_1.png';

const MainHowTo = ({ history }) => {
    return (
        <>
        <Navigation history={history}/>
        <div className="howto_background">
            <div className="howto_container">
                <img src={howto} />
            </div>  
        </div>
        
        </>
    );
}

export default MainHowTo;