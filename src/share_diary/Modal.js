import { useEffect, useState } from "react";
import Modal_GroupL from "./Modal_GroupL";
import Modal_GroupR from "./Modal_GroupR";
import './modal.css';


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
                <div className="group_modalBody" onClick={(e) => e.stopPropagation()}>
                    <Modal_GroupL />
                <div className="vertical_line"></div>    
                    <Modal_GroupR />
                </div>
            </div>
        </>
    );
};

export default Modal;