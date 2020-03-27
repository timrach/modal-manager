import React from "react";
import AModal from '../modals/a-modal';
import { useModalActions } from '../lib/modal-context';

export default function ModalOpener() {

    const [showModal] = useModalActions();
    const openModalA = () => showModal (<AModal id="A"/>);

    return (
        <div>
            <button onClick={openModalA}> Open Modal A</button>
        </div>
    );
}