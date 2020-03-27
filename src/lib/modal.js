import React from "react";
import { useModalActions } from './modal-context';
import ReactModal from 'react-modal';

export default function Modal(props) {
  // eslint-disable-next-line no-unused-vars
  const [showModal, hideModal] = useModalActions();
  const closeModal = () => hideModal(props.id)

  return (
    <ReactModal 
    isOpen={true}
    ariaHideApp={false}
    onRequestClose={closeModal}>
    {props.children}
    </ReactModal>
  );
}