import React, {useContext} from "react";
import AModal from '../modals/a-modal';
import { ModalContext } from "../lib/modal-context";

export default function ModalOpener() {

    const {dispatch} = useContext(ModalContext);
    const openModalA = () => dispatch({ type: 'SHOW_MODAL', modal: <AModal key="A"/>})

    return (
        <div>
            <button onClick={openModalA}> Open Modal A</button>
        </div>
    );
}