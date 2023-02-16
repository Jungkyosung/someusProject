import { useEffect } from "react";

const Modal = (props) => {

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
            <div className="modal" onClick={modalClose}>
                <div className="modalBody" onClick={(e) => e.stopPropagation()}>
                    <button className="modalCloseBtn" onClick={modalClose}>모달닫기</button>
                    {props.children}
                </div>
            </div>
        </>
    );
};

export default Modal;