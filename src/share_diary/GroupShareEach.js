import groupdiaryimg from '../img/groupD_1.png';
import './groupshareEach.css';

const GroupShareEach = ({ list }) => {
    return (
        <>
        {/* <div style={ {float: 'left', width: "calc('300px' / 4)", padding: 5} }>
            <img src="" />
            <p>{ list.date }</p>
        </div> */}

    <div className='groupEachdiary'>
            <div className='groupdiaryimg'>
                <img src={groupdiaryimg} />
            </div>
            <div className='share_title'>우리들의 일기</div>
        </ div>
        </>
    );
}

export default GroupShareEach;