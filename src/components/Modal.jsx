import { useContext, useEffect, useState } from "react";
import { MdOutlineReplay } from "react-icons/md";
import { GameContext } from "../store/GameContext";
const Modal = ({ children }) => {

    const { GameState, replay } = useContext(GameContext);
    const [isOpen, setIsOpen] = useState(false);
    console.log(GameState.winner, isOpen)
    const openModal = () => setIsOpen(true);
    const closeModal = () => { setIsOpen(false); replay(); }
    useEffect(() => {
        setIsOpen(GameState.winner != null);
    }, [GameState])

    const modalMessage = () => {
        if (GameState.winner === 'draw') {
            return "XO DRAW!"
        }
        return `Hurray Player ${GameState.winner} won the game`
    }
    return (
        <>
            {isOpen ? (<div className="main-modal">
                <div className="modal-box">
                    <div className="modal-message">{modalMessage()}</div>

                    <MdOutlineReplay onClick={closeModal} />
                </div>
            </div>) : (<></>)}
        </>

    )
}

export default Modal;