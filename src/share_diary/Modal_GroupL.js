import { useEffect, useState } from "react";

const Modal_GroupL = (props) => {
    // 모달
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
    //

    //일기 수정 확인 필요
    const [contents, setContents] = useState('안녕 한 번쯤은 날 들어 봤겠지 너의 사랑니 이미 어릴 때 모두 겪었다 생각하겠지 Attention boys 나는 좀 다를 걸 다른 애들을 다 밀어내고 자리를 잡지 맘 속 깊은 곳에 아주 은밀하게 네 맘 벽을 뚫고 자라난다 특별한 경험 RumPumPumPum 아야! 머리가 아플 걸 잠도 오지 않을 걸 넌 쉽게 날 잊지 못할 걸 어느 날 깜짝 나타난 진짜 네 첫사랑 RumPumPumPumPum 이거 어쩌나 곧게 자란 아일 기대했겠지 삐딱하게 서서 널 괴롭히겠지 내가 좀 쉽진 않지 ');

    


    return (
        <>
            {/* <div className="groupL_modalBody" onClick={(e) => e.stopPropagation()}> */}
            <div className="groupL_modal">
                <div className="groupL_modalImgbox">
                    <img className="groupL_modalImg" src={require("../img/writesample/write_6.PNG")} />
                </div>
                <div className="groupL_write">
                    <div className="groupL_modalHeader">
                        <div className="groupL_date">2023. 02. 17</div>
                        <div className="groupL_modalHeaderRight">
                            <div className="groupL_weather"></div>
                            <div className="groupL_mood"></div>
                        </div>
                    </div>
                    {/* <div className="groupL_content">
                        <div className="groupL_dairyContents">{dairyContents}</div>
                    </div> */}
                    <div className="group_dairyContents">{contents}</div>
                    {props.children}
                </div>
            </div>
            {/* </div> */}

        </>
    );
};

export default Modal_GroupL;