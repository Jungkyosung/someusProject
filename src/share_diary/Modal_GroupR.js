import { useEffect, useState } from "react";

const Modal_GroupR = (props) => {

    const dairyContents = '아기 상어 뚜 루루 뚜루 귀여운 뚜 루루 뚜루 바닷 속 뚜 루루 뚜루 아기 상어 뚜 루루 뚜루 엄마상어 뚜 루루 뚜루 어여쁜 뚜 루루 뚜루 바닷 속 뚜 루루 뚜루 엄마 상어 아빠 상어 뚜 루루 뚜루 힘이 센 뚜 루루 뚜루 바닷 속 뚜 루루 뚜루 아빠 상어 할머니 상어 뚜 루루 뚜루 자상ㅎ나 뚜 루루 뚜루바닷 속 뚜 루루 뚜루 할머니 상어 할아버지 상어 뚜 루루 뚜루 멋있는 뚜 루루 뚜루 바닷 속 뚜 루루 뚜루 할아버지 상어 우리는 뚜 루루 뚜루 바다의 뚜 루루 뚜루 사냥 꾼 뚜 루루 뚜루 상어 가족 상어다~!!!!! 뚜 루루 뚜루 도망쳐 뚜 루루 뚜루 도망쳐 뚜 루루 뚜루 숨자 으악 뚜 루루 뚜루 상ㄹ았다 뚜 루루 뚜루 살았다 뚜 루루 뚜루 오늘도 뚜 루루 뚜루 ㄱ살았다 휴 신난다 뚜 루루 뚜루 신난다 뚜 루루 뚜루 춤을 춰 뚜 루루 뚜루 노래 끝 예!'

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


    return (
        <>
            {/* <div className="groupR_modalBody" onClick={(e) => e.stopPropagation()}> */}

            <div className="groupR_modal">
                <div className="groupR_modalImgbox">
                    <img className="groupR_modalImg" src={require("../img/writesample/write_4.PNG")} />
                </div>
                <div className="groupL_write">
                    <div className="groupR_modalHeader">
                        <div className="groupR_date">2023. 02. 17</div>
                        <div className="groupR_modalHeaderRight">
                            <div className="groupR_weather"></div>
                            <div className="groupR_mood"></div>
                        </div>
                    </div>
                    <div className="group_dairyContents">{dairyContents}</div>
                    {props.children}
                </div>
            </div>
        </>
    );
};

export default Modal_GroupR;