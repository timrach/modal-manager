import React from "react";
import AModal from '../modals/a-modal';
import { useModalActions } from '../lib';

export default function ModalOpener() {

    const [showModal] = useModalActions();
    const openModalA = () => showModal (<AModal id="A"/>);

    return (
        <div>
            <button onClick={openModalA}> Open Modal A</button>
        </div>
    );
}