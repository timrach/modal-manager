import React, { useContext, useState } from "react";
import {ModalContext} from '../lib/modal-context';
import ReactModal from 'react-modal';

export default function Modal(props) {
  const {dispatch} = useContext(ModalContext);
  const closeModal = () => dispatch({ type: "HIDE_MODAL", key: "A" })

  return (
    <ReactModal 
    isOpen={true}
    ariaHideApp={false}
    onRequestClose={closeModal}>
    {props.children}
    </ReactModal>
  );
}